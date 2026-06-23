import { NextResponse } from "next/server";

const RATE_LIMIT_WINDOW = 60_000;
const MAX_REQUESTS = 120;
const BLOCK_DURATION = 300_000;

const ipHits = new Map();
const blockedIPs = new Map();

const ATTACK_PATTERNS = [
  {
    name: "SQLi",
    regex: /(\b(select|insert|update|delete|drop|union|alter|exec|declare|create|truncate)\b.+\b(from|into|table|database|set|where)\b)|('.*(\bor\b|\band\b).*=\s*')|(\/\*.*\*\/)|(;\s*(drop|select|insert|delete|update))/i,
  },
  {
    name: "XSS",
    regex: /(<script[\s/>])|(javascript\s*:)|(on\w+\s*=)|(<iframe[\s/>])|(<embed[\s/>])|(<object[\s/>])|(<img[^>]+onerror=)|(document\.cookie)|(eval\s*\()|(fromCharCode\s*\()/i,
  },
  {
    name: "PathTraversal",
    regex: /(\.\.\/|\.\.\\|%2e%2e%2f|%2e%2e\/|%2e%2e%5c|%252e%252e%252f|%c0%ae%c0%ae)/i,
  },
  {
    name: "CmdInjection",
    regex: /[;&|`$]\s*(cat|ls|id|whoami|wget|curl|nc|bash|sh|powershell|cmd|ping|nslookup|nmap|chmod|chown|rm\s+-rf|mkfifo|python|perl|ruby|php)\b/i,
  },
  {
    name: "SSRF",
    regex: /(file:\/\/|gopher:\/\/|dict:\/\/|ldap:\/\/|tftp:\/\/)/i,
  },
  {
    name: "NullByte",
    regex: /%00/i,
  },
];

const SUSPICIOUS_AGENTS = [
  /^$/,
  /sqlmap/i,
  /nikto/i,
  /nmap/i,
  /masscan/i,
  /zgrab/i,
  /gobuster/i,
  /dirbuster/i,
  /wfuzz/i,
  /acunetix/i,
  /netsparker/i,
  /openvas/i,
  /nessus/i,
  /hydra/i,
  /medusa/i,
  /metasploit/i,
  /cobaltstrike/i,
  /brutus/i,
];

const BLOCKED_METHODS = ["TRACE", "TRACK", "CONNECT"];

function getClientIP(request) {
  const forwarded = request.headers.get("x-forwarded-for");
  if (forwarded) {
    return forwarded.split(",")[0].trim();
  }
  const realIP = request.headers.get("x-real-ip");
  if (realIP) return realIP.trim();
  return "127.0.0.1";
}

function isBlocked(ip) {
  const block = blockedIPs.get(ip);
  if (!block) return false;
  if (Date.now() > block.until) {
    blockedIPs.delete(ip);
    return false;
  }
  return true;
}

function blockIP(ip) {
  blockedIPs.set(ip, { until: Date.now() + BLOCK_DURATION });
}

function checkRateLimit(ip) {
  const now = Date.now();
  let record = ipHits.get(ip);

  if (!record || now > record.windowStart + RATE_LIMIT_WINDOW) {
    record = { windowStart: now, count: 0 };
    ipHits.set(ip, record);
  }

  record.count++;

  if (record.count > MAX_REQUESTS) {
    blockIP(ip);
    return false;
  }

  return true;
}

function detectAttack(url, headers) {
  const decodedURL = decodeURIComponent(url).toLowerCase();
  const userAgent = (headers.get("user-agent") || "").toLowerCase();
  const referer = (headers.get("referer") || "").toLowerCase();

  const targets = [decodedURL, userAgent, referer];

  for (const pattern of ATTACK_PATTERNS) {
    for (const target of targets) {
      if (pattern.regex.test(target)) {
        return pattern.name;
      }
    }
  }

  for (const agentPattern of SUSPICIOUS_AGENTS) {
    if (agentPattern.test(userAgent)) {
      return "SuspiciousAgent";
    }
  }

  const contentLength = parseInt(headers.get("content-length") || "0", 10);
  if (contentLength > 1_048_576) {
    return "LargePayload";
  }

  return null;
}

const SECURITY_HEADERS = {
  "X-Content-Type-Options": "nosniff",
  "X-Frame-Options": "DENY",
  "X-XSS-Protection": "1; mode=block",
  "Referrer-Policy": "strict-origin-when-cross-origin",
  "X-Permitted-Cross-Domain-Policies": "none",
  "X-Download-Options": "noopen",
  "Cross-Origin-Opener-Policy": "same-origin-allow-popups",
  "Permissions-Policy":
    "camera=(), microphone=(), geolocation=(), accelerometer=(), autoplay=(), clipboard-read=(), display-capture=(), gyroscope=(), magnetometer=(), midi=(), payment=(), usb=()",
};

export default function proxy(request) {
  const ip = getClientIP(request);
  const url = request.nextUrl.pathname + request.nextUrl.search;
  const headers = request.headers;

  if (isBlocked(ip)) {
    return new NextResponse("Access Denied", { status: 403 });
  }

  if (BLOCKED_METHODS.includes(request.method)) {
    blockIP(ip);
    return new NextResponse("Method Not Allowed", { status: 405 });
  }

  if (!checkRateLimit(ip)) {
    return new NextResponse("Too Many Requests", { status: 429 });
  }

  const attack = detectAttack(url, headers);
  if (attack) {
    blockIP(ip);
    return new NextResponse("Access Denied", { status: 403 });
  }

  const response = NextResponse.next();

  Object.entries(SECURITY_HEADERS).forEach(([key, value]) => {
    response.headers.set(key, value);
  });

  response.headers.set("Server", "");

  return response;
}

export const config = {
  matcher: "/((?!_next/|favicon.ico|assets/).*)",
};

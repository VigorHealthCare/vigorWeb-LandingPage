import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Layout({ children }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.getElementById("navbar");
      if (!navbar) return;
      if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
      } else {
        navbar.classList.remove("scrolled");
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const fadeElements = document.querySelectorAll(".fade-in");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    fadeElements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [router.asPath]);

  const handleNavClick = useCallback(
    (e, href) => {
      if (href.startsWith("#")) {
        e.preventDefault();
        setMenuOpen(false);
        if (router.pathname !== "/") {
          router.push("/" + href).then(() => {
            setTimeout(() => {
              const target = document.querySelector(href);
              if (target) {
                const offset = 80;
                const top =
                  target.getBoundingClientRect().top +
                  window.pageYOffset -
                  offset;
                window.scrollTo({ top, behavior: "smooth" });
              }
            }, 100);
          });
        } else {
          const target = document.querySelector(href);
          if (target) {
            const offset = 80;
            const top =
              target.getBoundingClientRect().top +
              window.pageYOffset -
              offset;
            window.scrollTo({ top, behavior: "smooth" });
          }
        }
      } else {
        setMenuOpen(false);
      }
    },
    [router]
  );

  return (
    <>
      <nav className="navbar" id="navbar">
        <div className="container nav-container">
          <div className="logo">
            <Link href="/">
              <img
                src="/assets/logo.png"
                alt="VigorCare"
                className="logo-img"
                onError={(e) => {
                  e.currentTarget.src =
                    "https://via.placeholder.com/150x40?text=VigorCare";
                }}
              />
            </Link>
          </div>
          <button
            className={`menu-toggle ${menuOpen ? "active" : ""}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <i className={`fa-solid ${menuOpen ? "fa-xmark" : "fa-bars"}`}></i>
          </button>
          <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
            <li>
              <Link href="/#features" onClick={(e) => handleNavClick(e, "#features")}>
                Features
              </Link>
            </li>
            <li>
              <Link href="/#pricing" onClick={(e) => handleNavClick(e, "#pricing")}>
                Pricing
              </Link>
            </li>
            <li>
              <Link href="/about" onClick={() => setMenuOpen(false)}>
                About Us
              </Link>
            </li>
            <li>
              <Link href="/terms" onClick={() => setMenuOpen(false)}>
                Terms of Use
              </Link>
            </li>
            <li>
              <Link href="/privacy" onClick={() => setMenuOpen(false)}>
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link
                href="/#waitlist"
                className="btn btn-primary"
                onClick={(e) => handleNavClick(e, "#waitlist")}
              >
                Free Trial
              </Link>
            </li>
          </ul>
        </div>
      </nav>

      {children}

      <footer>
        <div className="container">
          <div className="footer-container">
            <div className="footer-info">
              <img
                src="/assets/logo.png"
                alt="VigorCare Logo"
                className="logo-img footer-logo"
                onError={(e) => {
                  e.currentTarget.src =
                    "https://via.placeholder.com/150x40?text=VigorCare";
                }}
              />
              <p>
                Peace of mind for the diaspora, professional care for home.
                Aligning with Nigeria&apos;s national primary healthcare
                strategy.
              </p>
            </div>
            <div className="footer-links">
              <h4>Company</h4>
              <ul>
                <li>
                  <Link href="/about">About Us</Link>
                </li>
                <li>
                  <Link href="/#features">Features</Link>
                </li>
                <li>
                  <Link href="/#pricing">Pricing</Link>
                </li>
              </ul>
            </div>
            <div className="footer-links">
              <h4>Legal</h4>
              <ul>
                <li>
                  <Link href="/#pilot-legal">Telehealth Consent</Link>
                </li>
                <li>
                  <Link href="/terms">Terms of Use</Link>
                </li>
                <li>
                  <Link href="/privacy">Privacy Policy</Link>
                </li>
              </ul>
            </div>
            <div className="footer-links">
              <h4>Download App</h4>
              <p>Coming Soon</p>
              <div className="app-badges footer-badges">
                <Link href="/#apps-coming-soon" className="app-badge">
                  <img
                    src="/assets/play-store-badge.svg"
                    alt="Google Play"
                    onError={(e) => {
                      e.currentTarget.src =
                        "https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg";
                    }}
                  />
                </Link>
                <Link href="/#apps-coming-soon" className="app-badge">
                  <img
                    src="/assets/app-store-badge.svg"
                    alt="App Store"
                    onError={(e) => {
                      e.currentTarget.src =
                        "https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg";
                    }}
                  />
                </Link>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            &copy; 2026 VigorCare. All rights reserved. Managed by Scalable
            Tech.
          </div>
        </div>
      </footer>
    </>
  );
}

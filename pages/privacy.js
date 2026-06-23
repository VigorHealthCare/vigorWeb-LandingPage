import Head from "next/head";
import Layout from "../components/Layout";

export default function PrivacyPage() {
  return (
    <>
      <Head>
        <title>Privacy Policy | VigorCare</title>
      </Head>
      <Layout>
        <header className="page-header">
          <div className="container fade-in">
            <h1>Privacy Policy</h1>
            <p>Last updated: May 14, 2026</p>
          </div>
        </header>
        <main
          className="document-content container fade-in"
          style={{ animationDelay: "0.1s" }}
        >
          <h2>1. Introduction</h2>
          <p>
            At VigorCare, we take your privacy and the security of your medical
            data seriously. This Privacy Policy explains how we collect, use,
            disclose, and safeguard your information when you visit our website
            or use our telehealth and healthcare management platform.
          </p>
          <h2 className="mt-3">2. Information We Collect</h2>
          <p>
            We may collect personal information that you voluntarily provide to
            us when you register for an account, including:
          </p>
          <ul
            style={{
              marginLeft: "20px",
              marginBottom: "1.5rem",
              color: "var(--text-muted)",
            }}
          >
            <li>
              <strong>Personal Data:</strong> Name, email address, phone number,
              and billing information of the sponsor.
            </li>
            <li>
              <strong>Health Data:</strong> Electronic Medical Records (EMR),
              consultation notes, prescriptions, and medical history of the
              designated patients in Nigeria.
            </li>
            <li>
              <strong>Usage Data:</strong> Information about how you interact
              with our platform, IP addresses, and device information.
            </li>
          </ul>
          <h2 className="mt-3">3. How We Use Your Information</h2>
          <p>We use the information we collect to:</p>
          <ul
            style={{
              marginLeft: "20px",
              marginBottom: "1.5rem",
              color: "var(--text-muted)",
            }}
          >
            <li>
              Facilitate telehealth consultations and medical care coordination.
            </li>
            <li>
              Provide sponsors with transparent access to EMR and appointment
              history.
            </li>
            <li>Process payments and subscription renewals securely.</li>
            <li>
              Improve our platform, customer service, and overall user
              experience.
            </li>
          </ul>
          <h2 className="mt-3">4. Data Security &amp; Encryption</h2>
          <p>
            VigorCare employs strict security measures to protect your personal
            and health data. All Electronic Medical Records (EMR) and video
            consultations are encrypted both in transit and at rest. We comply
            with relevant national and international health data privacy
            standards (such as NDPR) to ensure your family&apos;s medical
            history remains entirely confidential.
          </p>
          <h2 className="mt-3">5. Sharing Your Information</h2>
          <p>
            We do not sell your personal information. We only share necessary
            health data with the verified Primary Healthcare Centers (PHCs) and
            doctors who are directly treating the designated patients. We may
            also share information with secure third-party payment processors to
            facilitate your subscription.
          </p>
          <p className="mt-3">
            <em>
              Note: This is a temporary placeholder document. The full, legally
              binding Privacy Policy will be published prior to the official
              launch.
            </em>
          </p>
        </main>
      </Layout>
    </>
  );
}

import Head from "next/head";
import Layout from "../components/Layout";

export default function TermsPage() {
  return (
    <>
      <Head>
        <title>Terms of Use | VigorCare</title>
      </Head>
      <Layout>
        <header className="page-header">
          <div className="container fade-in">
            <h1>Terms of Use</h1>
            <p>Last updated: May 14, 2026</p>
          </div>
        </header>
        <main
          className="document-content container fade-in"
          style={{ animationDelay: "0.1s" }}
        >
          <h2>1. Introduction</h2>
          <p>
            Welcome to VigorCare. These Terms of Use (&quot;Terms&quot;) govern
            your access to and use of the VigorCare website, mobile
            applications, and telehealth services (collectively, the
            &quot;Services&quot;). By accessing or using our Services, you agree
            to be bound by these Terms and our Privacy Policy.
          </p>
          <h2 className="mt-3">2. Description of Services</h2>
          <p>
            VigorCare provides a platform that connects diaspora sponsors with
            verified Primary Healthcare Centers (PHCs) and medical professionals
            in Nigeria. Our Services include facilitating video consultations,
            providing access to Electronic Medical Records (EMR), and managing
            prescription fulfillment for your designated beneficiaries
            (&quot;Patients&quot;). VigorCare does not provide direct medical
            advice; we are a technology platform facilitating access to
            independent healthcare providers.
          </p>
          <h2 className="mt-3">3. User Accounts &amp; Responsibilities</h2>
          <p>
            To use certain features of the Services, you must register for an
            account. You agree to provide accurate, current, and complete
            information during the registration process. You are responsible
            for safeguarding your password and for all activities that occur
            under your account. You must immediately notify VigorCare of any
            unauthorized use of your account.
          </p>
          <h2 className="mt-3">4. Telehealth Consent &amp; Ethical Use</h2>
          <p>
            By registering a Patient on our platform, you confirm that you have
            obtained the necessary consent from the Patient to manage their
            healthcare records and appointments. All telehealth consultations
            are conducted by licensed professionals subject to Nigerian medical
            regulations. You agree to use the platform solely for lawful
            purposes and not to misuse the EMR or appointment systems.
          </p>
          <h2 className="mt-3">5. Payments &amp; Subscriptions</h2>
          <p>
            Certain features of VigorCare require a paid subscription or
            one-time fees. By providing a payment method, you authorize us to
            charge the applicable fees. All fees are non-refundable except as
            expressly stated in our Refund Policy. We ensure all financial
            transactions are transparent, and funds allocated for healthcare are
            directly remitted to the verified healthcare providers.
          </p>
          <h2 className="mt-3">6. Limitation of Liability</h2>
          <p>
            To the fullest extent permitted by law, VigorCare shall not be
            liable for any indirect, incidental, special, consequential, or
            punitive damages arising out of or related to your use of the
            Services. We do not guarantee the medical outcomes of the
            independent healthcare providers using our platform.
          </p>
          <p className="mt-3">
            <em>
              Note: This is a temporary placeholder document. The full, legally
              binding Terms of Use will be published prior to the official
              launch.
            </em>
          </p>
        </main>
      </Layout>
    </>
  );
}

import Link from "next/link";

export default function Trust() {
  return (
    <section className="legal section-white" id="pilot-legal">
      <div className="container">
        <div className="section-header center fade-in">
          <h2>Trust &amp; Compliance</h2>
          <p>
            Your trust and the privacy of your family&apos;s health data are our
            top priority.
          </p>
        </div>
        <div className="icon-grid-3">
          <div className="icon-card fade-in">
            <div className="icon-circle bg-light-blue">
              <i className="fa-solid fa-file-contract text-blue"></i>
            </div>
            <h3>Telehealth Consent</h3>
            <p>
              We ensure all patients and sponsors understand the nature of
              telehealth consultations and provide informed consent.
            </p>
          </div>
          <div className="icon-card fade-in">
            <div className="icon-circle bg-light-green">
              <i className="fa-solid fa-scale-balanced text-green"></i>
            </div>
            <h3>Terms of Use</h3>
            <p>
              Our platform is governed by strict terms of use to ensure ethical
              medical practice and financial accountability.
            </p>
            <Link href="/terms" className="service-link">
              Read more <i className="fa-solid fa-arrow-right"></i>
            </Link>
          </div>
          <div className="icon-card fade-in">
            <div className="icon-circle bg-light-blue">
              <i className="fa-solid fa-lock text-blue"></i>
            </div>
            <h3>Privacy Policy</h3>
            <p>
              All data is encrypted and managed according to national and
              international health data privacy standards.
            </p>
            <Link href="/privacy" className="service-link">
              Read more <i className="fa-solid fa-arrow-right"></i>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

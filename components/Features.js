import Link from "next/link";

export default function Features() {
  return (
    <section className="features section-light" id="features">
      <div className="container">
        <div className="section-header center fade-in">
          <h2>Healthcare Managed with Care</h2>
          <p>
            VigorCare provides a dedicated platform to monitor and manage the
            health of your family back home.
          </p>
        </div>
        <div className="services-grid">
          <div className="service-card fade-in">
            <div className="service-icon">
              <i className="fa-solid fa-video"></i>
            </div>
            <h3>Video Consultations</h3>
            <p>
              Connect your family with verified Nigerian PHC providers for
              professional medical advice.
            </p>
            <Link href="#waitlist" className="service-link">
              Learn more <i className="fa-solid fa-arrow-right"></i>
            </Link>
          </div>
          <div className="service-card fade-in" style={{ animationDelay: "0.1s" }}>
            <div className="service-icon">
              <i className="fa-solid fa-folder-open"></i>
            </div>
            <h3>EMR Access</h3>
            <p>
              View real-time Electronic Medical Records of your sponsored loved
              ones directly from your dashboard.
            </p>
            <Link href="#waitlist" className="service-link">
              Learn more <i className="fa-solid fa-arrow-right"></i>
            </Link>
          </div>
          <div className="service-card fade-in" style={{ animationDelay: "0.2s" }}>
            <div className="service-icon">
              <i className="fa-solid fa-file-prescription"></i>
            </div>
            <h3>PDF E-prescriptions</h3>
            <p>
              Receive digital prescriptions that can be verified and fulfilled
              at certified pharmacies.
            </p>
            <Link href="#waitlist" className="service-link">
              Learn more <i className="fa-solid fa-arrow-right"></i>
            </Link>
          </div>
          <div className="service-card fade-in" style={{ animationDelay: "0.3s" }}>
            <div className="service-icon">
              <i className="fa-solid fa-bell"></i>
            </div>
            <h3>Appointment Reminders</h3>
            <p>
              Automated notifications to both you and your loved ones for
              upcoming check-ups and follow-ups.
            </p>
            <Link href="#waitlist" className="service-link">
              Learn more <i className="fa-solid fa-arrow-right"></i>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

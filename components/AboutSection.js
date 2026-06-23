import Link from "next/link";

export default function About() {
  return (
    <section className="about section-white" id="about">
      <div className="container split-container">
        <div className="split-image fade-in">
          <div className="rounded-image-container">
            <div className="about-icon-grid">
              <div className="about-icon-item">
                <i className="fa-solid fa-user-nurse"></i>
              </div>
              <div className="about-icon-item">
                <i className="fa-solid fa-hospital"></i>
              </div>
              <div className="about-icon-item">
                <i className="fa-solid fa-truck-medical"></i>
              </div>
              <div className="about-icon-item">
                <i className="fa-solid fa-stethoscope"></i>
              </div>
            </div>
          </div>
        </div>
        <div className="split-content fade-in">
          <h2>About Us</h2>
          <p>
            Vigor Medical Services Limited is redefining healthcare delivery for
            families separated by distance with VigorCare, an innovative
            healthcare coordination platform designed to bridge the gap in
            remote family care. By integrating telemedicine, triage support, and
            a vetted network of local providers into a seamless, secure
            ecosystem, VigorCare addresses a critical market pain point: the
            lack of transparency, efficiency, and financial control in managing
            healthcare from afar. Whether for the global diaspora or for
            professionals working in different states within Nigeria, the
            platform mitigates the risks of fund misappropriation and care
            delays, transforming a stressful, uncertain process into a reliable,
            high-yield investment in family wellbeing.
          </p>
          <Link
            href="/about"
            className="service-link"
            style={{ marginBottom: "1.5rem", display: "inline-flex" }}
          >
            Read more <i className="fa-solid fa-arrow-right"></i>
          </Link>
          <h2>Our Mission &amp; Network</h2>
          <ul className="bullet-list">
            <li>
              <div className="bullet-icon">
                <i className="fa-solid fa-check text-green"></i>
              </div>
              <div>
                <strong>Who We Are</strong>
                <p>
                  We are a team of healthcare professionals and technology
                  enthusiasts dedicated to improving the primary healthcare
                  system in Nigeria.
                </p>
              </div>
            </li>
            <li>
              <div className="bullet-icon">
                <i className="fa-solid fa-check text-green"></i>
              </div>
              <div>
                <strong>Verified Clinics</strong>
                <p>
                  Over 50+ partner clinics across Lagos, Abuja, and Port
                  Harcourt, all integrated with our EMR system.
                </p>
              </div>
            </li>
            <li>
              <div className="bullet-icon">
                <i className="fa-solid fa-check text-green"></i>
              </div>
              <div>
                <strong>Certified Specialists</strong>
                <p>
                  Access to a network of certified doctors, nurses, and
                  specialists for video consultations and in-person care.
                </p>
              </div>
            </li>
          </ul>
          <Link href="#waitlist" className="btn btn-primary mt-3">
            Join the Free Trial
          </Link>
        </div>
      </div>
    </section>
  );
}

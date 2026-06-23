export default function ComingSoon() {
  return (
    <section className="coming-soon section-light" id="apps-coming-soon">
      <div className="container split-container align-center">
        <div className="split-content fade-in">
          <h2>Care in Your Pocket</h2>
          <p>
            Our mobile applications for Sponsors, Patients, and Providers are
            currently in development. Join the waitlist to be notified as soon
            as they are available.
          </p>
          <div className="status-card mt-3">
            <h3>
              <i className="fa-solid fa-rocket text-blue"></i> Coming Soon
            </h3>
            <p>
              We are currently polishing the final features and ensuring the
              highest security standards for your health data.
            </p>
            <div className="progress-bar">
              <div className="progress-fill" style={{ width: "85%" }}></div>
            </div>
          </div>
        </div>
        <div className="split-image fade-in">
          <div className="app-mockup-placeholder">
            <div className="mockup-inner">
              <i
                className="fa-solid fa-mobile-screen-button text-blue"
                style={{ fontSize: "8rem", opacity: 0.5 }}
              ></i>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

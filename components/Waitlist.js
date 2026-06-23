export default function Waitlist() {
  return (
    <section className="waitlist section-white" id="waitlist">
      <div className="container">
        <div className="section-header center fade-in">
          <h2>Join the Future of Care</h2>
          <p>
            Don&apos;t miss out: The first 50 users to register will receive
            our Freecare package. Be the first to experience professional
            healthcare management for your loved ones.
          </p>
        </div>
        <div className="form-wrapper fade-in">
          <iframe
            src="https://docs.google.com/forms/d/e/1FAIpQLScr0iABMS_6PZrDpo1eBrwv0BU2_kCW2qt5UXb5CERGEIfmEA/viewform?embedded=true"
            width="100%"
            height="900"
            frameBorder="0"
            marginHeight="0"
            marginWidth="0"
          >
            Loading…
          </iframe>
        </div>

        <div
          className="provider-cta fade-in center mt-3"
          style={{
            backgroundColor: "var(--bg-light-blue)",
            padding: "3rem 1.5rem",
            borderRadius: "var(--radius-lg)",
            border: "1px solid rgba(0,0,0,0.05)",
            marginTop: "3rem",
          }}
        >
          <h3 style={{ marginBottom: "1rem" }}>
            Are you a Healthcare Provider?
          </h3>
          <p
            style={{
              maxWidth: "600px",
              margin: "0 auto 1.5rem auto",
            }}
          >
            Join our network of verified clinics and specialists to deliver
            premium healthcare. Partner with us to provide transparent,
            high-quality care to families across Nigeria.
          </p>
          <a
            href="https://forms.gle/4qsjw43BFG52NXsY7"
            className="btn btn-primary"
            target="_blank"
            rel="noopener noreferrer"
          >
            Provider Registration{" "}
            <i
              className="fa-solid fa-arrow-up-right-from-square"
              style={{ marginLeft: "5px", fontSize: "0.9em" }}
            ></i>
          </a>
        </div>
      </div>
    </section>
  );
}

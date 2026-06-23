import Link from "next/link";

export default function Hero() {
  return (
    <header className="hero" id="home">
      <div className="container hero-container">
        <div className="hero-content fade-in">
          <h1>
            Remote Healthcare for <br />
            <span className="highlight">Loved Ones in Nigeria</span>
          </h1>
          <p>
            Managed health monitoring for families back home with EMR
            transparency. Ensure the cash you send goes directly to the care of
            your loved ones.
          </p>
          <div className="hero-btns">
            <Link href="#waitlist" className="btn btn-primary">
              Free Trial
            </Link>
          </div>
          <div className="app-badges hero-badges">
            <Link href="#apps-coming-soon" className="app-badge">
              <img
                src="/assets/play-store-badge.svg"
                alt="Get it on Google Play"
                onError={(e) => {
                  e.currentTarget.src =
                    "https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg";
                }}
              />
            </Link>
            <Link href="#apps-coming-soon" className="app-badge">
              <img
                src="/assets/app-store-badge.svg"
                alt="Download on the App Store"
                onError={(e) => {
                  e.currentTarget.src =
                    "https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg";
                }}
              />
            </Link>
          </div>
        </div>
        <div className="hero-image-wrapper fade-in" style={{ animationDelay: "0.2s" }}>
          <div className="arch-container">
            <img src="/assets/doctor.png" alt="Doctor" className="hero-doc" />
          </div>
          <div className="floating-badge">
            <div className="badge-icon">
              <i className="fa-solid fa-user-doctor"></i>
            </div>
            <div className="badge-text">
              <strong>Verified</strong>
              <br />
              Professionals
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

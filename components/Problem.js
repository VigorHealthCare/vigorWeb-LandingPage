export default function Problem() {
  return (
    <section className="problem section-white" id="problem">
      <div className="container">
        <div className="section-header center fade-in">
          <h2>Bridging the Accountability Gap</h2>
          <p>
            Sending money home for healthcare shouldn&apos;t be a gamble. We
            understand the emotional worry and the lack of transparency in the
            current process.
          </p>
        </div>
        <div className="icon-grid-3">
          <div className="icon-card fade-in">
            <div className="icon-circle bg-light-green">
              <i className="fa-solid fa-money-bill-wave text-green"></i>
            </div>
            <h3>Misallocated Funds</h3>
            <p>
              Money meant for health bills often gets used for other family
              needs, leaving loved ones without proper care.
            </p>
          </div>
          <div className="icon-card fade-in" style={{ animationDelay: "0.1s" }}>
            <div className="icon-circle bg-light-blue">
              <i className="fa-solid fa-eye-slash text-blue"></i>
            </div>
            <h3>Zero Visibility</h3>
            <p>
              Diaspora sponsors often have no way to verify if their loved ones
              actually saw a doctor or received treatment.
            </p>
          </div>
          <div className="icon-card fade-in" style={{ animationDelay: "0.2s" }}>
            <div className="icon-circle bg-light-yellow">
              <i className="fa-solid fa-heart-pulse text-yellow"></i>
            </div>
            <h3>Emotional Stress</h3>
            <p>
              The constant worry of &quot;are they actually okay?&quot;
              shouldn&apos;t be part of your daily life abroad.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

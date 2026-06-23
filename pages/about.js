import Head from "next/head";
import Layout from "../components/Layout";

export default function AboutPage() {
  return (
    <>
      <Head>
        <title>About Us | VigorCare</title>
      </Head>
      <Layout>
        <header className="page-header">
          <div className="container fade-in">
            <h1>About Us</h1>
            <p>Our Mission &amp; Network</p>
          </div>
        </header>
        <main
          className="document-content container fade-in"
          style={{ animationDelay: "0.1s" }}
        >
          <h2>Our Story</h2>
          <p>
            Vigor Medical Services Limited is redefining healthcare delivery for
            families separated by distance with VigorCare, an innovative
            healthcare coordination platform designed to bridge the gap in
            remote family care. By integrating telemedicine, triage support,
            and a vetted network of local providers into a seamless, secure
            ecosystem, VigorCare addresses a critical market pain point: the
            lack of transparency, efficiency, and financial control in managing
            healthcare from afar. Whether for the global diaspora or for
            professionals working in different states within Nigeria, the
            platform mitigates the risks of fund misappropriation and care
            delays, transforming a stressful, uncertain process into a reliable,
            high-yield investment in family wellbeing.
          </p>
          <p>
            Positioned for scalable growth, VigorCare is built to evolve from a
            specialized medical coordinator into a comprehensive, long-term
            family care infrastructure across Nigeria. By establishing a robust,
            tech-enabled foundation that ensures timely access and measurable
            health outcomes, the platform creates sustained user loyalty and a
            predictable revenue model for clients caring for distant loved ones.
            VigorCare represents a high-impact solution in the emerging
            telehealth and care-coordination sector, uniquely engineered to
            streamline logistics, optimize health expenditures, and deliver
            absolute peace of mind to families, regardless of the geographical
            distance between them.
          </p>
          <h2 className="mt-3">Who We Are</h2>
          <p>
            We are a team of healthcare professionals and technology
            enthusiasts dedicated to improving the primary healthcare system in
            Nigeria.
          </p>
          <h2 className="mt-3">Verified Clinics</h2>
          <p>
            Over 50+ partner clinics across Lagos, Abuja, and Port Harcourt,
            all integrated with our EMR system.
          </p>
          <h2 className="mt-3">Certified Specialists</h2>
          <p>
            Access to a network of certified doctors, nurses, and specialists
            for video consultations and in-person care.
          </p>
        </main>
      </Layout>
    </>
  );
}

import Head from "next/head";
import Layout from "../components/Layout";
import Hero from "../components/Hero";
import StatsBanner from "../components/StatsBanner";
import Problem from "../components/Problem";
import Features from "../components/Features";
import AboutSection from "../components/AboutSection";
import Pricing from "../components/Pricing";
import Trust from "../components/Trust";
import ComingSoon from "../components/ComingSoon";
import Waitlist from "../components/Waitlist";

export default function Home() {
  return (
    <>
      <Head>
        <title>VigorCare | Remote Healthcare for Loved Ones in Nigeria</title>
        <meta
          name="description"
          content="Managed health monitoring for families back home with EMR transparency. Ensure the cash you send goes directly to the care of your loved ones."
        />
      </Head>
      <Layout>
        <Hero />
        <StatsBanner />
        <Problem />
        <Features />
        <AboutSection />
        <Pricing />
        <Trust />
        <ComingSoon />
        <Waitlist />
      </Layout>
    </>
  );
}

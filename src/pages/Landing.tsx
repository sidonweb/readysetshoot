import BentoGrid from "../components/BentoGrid";
import Features from "../components/Features";
import Footer from "../components/Footer";
import Future from "../components/Future";
import Hero from "../components/Hero";
import Toggles from "../components/Toggles";
import WhyUs from "../components/WhyUs";

const Landing = () => {
  return (
    <>
      <Hero />
      <Features />
      <Toggles />
      <WhyUs />
      <Future />
      <BentoGrid />
      <Footer />

    </>
  )
}

export default Landing;
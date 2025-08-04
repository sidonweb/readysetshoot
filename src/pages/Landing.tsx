import BentoGrid from "../components/BentoGrid";
import Features from "../components/Features";
import Footer from "../components/ui/Footer";
import Future from "../components/Future";
import Hero from "../components/Hero";
import Toggles from "../components/Toggles";
import WhyUs from "../components/WhyUs";
import Slideshow from "../components/Slideshow";
import Testimonials from "../components/Testimonials";

const Landing = () => {
  return (
    <>
      <Hero />
      <Features />
      <Toggles />
      <WhyUs />
      <Future />
      <BentoGrid />
      <Slideshow />
      <Testimonials />
      <Footer />

    </>
  )
}

export default Landing;
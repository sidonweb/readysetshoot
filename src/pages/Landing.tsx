// import BentoGrid from "../components/BentoGrid";
import Features from "../components/Features";
import Footer from "../components/ui/Footer";
import Future from "../components/Future";
import Hero from "../components/Hero";
import Toggles from "../components/Toggles";
import WhyUs from "../components/WhyUs";
import Slideshow from "../components/Slideshow";
import Testimonials from "../components/Testimonials";
import FAQ from "../components/FAQ";
import CTA from "../components/CTA";
// import Testing from "../components/Testing";

const Landing = () => {
  return (
    <>
      <Hero />
      <Features />
      <Toggles />
      <WhyUs />
      <Future />

      {/* <Testing /> */}
      {/* <BentoGrid /> */}
      <div className="relative w-full overflow-hidden px-4 lg:px-24 py-20 md:py-32">

        <div className="md:text-center mb-16 text-white">
          <h1 className="text-4xl mb-6">
            <span className="text-orange-500">Moments From</span> Our Community
          </h1>
          <p className="text-[#7E7E7E] text-base max-w-6xl mx-auto leading-relaxed">
            Collection of moments beautifully captured by people who use ReadySetShoot to plan and schedule their photography sessions.
          </p>
        </div>

        <Slideshow />
      </div>
      <Testimonials />
      <FAQ />
      <CTA />
      <Footer />

    </>
  )
}

export default Landing;
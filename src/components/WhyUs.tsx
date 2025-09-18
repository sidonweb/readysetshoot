import React from 'react';
import iphone from "/iPhone FAQ.png"

const WhyUs: React.FC = () => {
    return (
        <section id='whyus' className=" bg-gradient-to-r from-[#5A00FF] to-[#7F39FF] text-white flex items-center justify-center px-4 lg:px-24 py-20 md:py-32">
            <div className="max-w-6xl w-full flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-16">
                {/* Left side - Video or Image container */}
                {/* <div className="flex-shrink-0 relative w-80 h-80 md:w-96 md:h-96 ">
                    <video
                        className="w-full h-full object-cover rounded-full"
                        autoPlay
                        loop
                        muted
                        playsInline
                    >
                        <source src="/Metallic.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div> */}



                {/* Right side - Content */}
                <div className="flex-1 md:max-w-xl space-y-6 lg:space-y-12 text-center md:text-left">

                    <h1 className="text-left text-3xl md:text-4xl mb-20">
                        <span className="text-[#FF6B2C]">Why We Built</span>{' '}
                        <span className="text-white">ReadySetShoot</span>
                    </h1>

                    <div className="space-y-4 lg:space-y-6 text-base text-white text-justify">
                        <p>
                                Great shots depend on timing, light, and conditions but most planning tools only scratch the surface.
                        </p>

                        <p>
                            They give you numbers. Sunrise at 6:21. Clouds at 30%. Moonrise at 9:07. Useful, but not enough to tell you if it will be a moment worth capturing.
                        </p>

                        <p>
                            ReadySetShoot was created to answer the real questions photographers have: Will the sky light up or stay flat? Will the stars break through or fade behind haze? Will the conditions create an image worth framing?
                        </p>

                        <p>
                            Instead of data overload, you get clear, shoot-specific guidance. So when nature delivers, you know exactly when to press the shutter.
                        </p>
                    </div>
                </div>

                <div className="hidden md:flex flex-shrink-0 max-w-[240px] relative">
                    {/* Glow aura */}
                    <div className="absolute inset-0 rounded-full blur-3xl bg-gradient-to-r from-[#5A00FF] to-[#7F39FF]" />

                    {/* iPhone image */}
                    <img
                        className="relative w-full h-auto object-contain animate-float drop-shadow-2xl"
                        src={iphone}
                        alt="iPhone displaying readysetshoot app"
                    />
                </div>

            </div>
        </section>
    );
};

export default WhyUs;
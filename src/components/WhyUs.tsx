import React from 'react';

const WhyUs: React.FC = () => {
    return (
        <div className="min-h-screen bg-black text-white flex items-center justify-center px-4 py-8 md:py-32">
            <div className="max-w-7xl w-full flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-16">
                {/* Left side - Video container */}
                <div className="flex-shrink-0 relative w-80 h-80 md:w-96 md:h-96 ">
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
                </div>

                {/* Right side - Content */}
                <div className="flex-1 max-w-3xl space-y-6 lg:space-y-12 text-center lg:text-left">
                    <h1 className="text-3xl md:text-4xl ">
                        <span className="text-orange-500">Why We Built</span>{' '}
                        <span className="text-white">ReadySetShoot</span>
                    </h1>

                    <div className="space-y-4 lg:space-y-6 text-base text-gray-300 leading-relaxed">
                        <p>
                            Most photo planning tools weren't made for photographers.
                        </p>

                        <p>
                            They show you basic weather, sunrise times, or moon phases but not what you
                            actually need to capture the shot.
                        </p>

                        <p>
                            Will the clouds block the glow? Will the Milky Way break through? Will it look
                            good or just technically happen?
                        </p>

                        <p>
                            That's where ReadySetShoot comes in. It gives you real, shoot-specific insights not
                            just numbers, but answers.
                        </p>

                        <p>
                            Because when conditions align, you shouldn't be guessing.{' '}
                            <span className="text-blue-400 font-medium">You should be ready.</span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WhyUs;
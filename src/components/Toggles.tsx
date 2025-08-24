import React, { useState } from 'react';

type FeatureMode = 'sunrise' | 'sunset' | 'astro';

interface FeatureContent {
    title: string;
    items: string[];
    image: string;
}

const Toggles: React.FC = () => {
    const [activeMode, setActiveMode] = useState<FeatureMode>('sunrise');

    const featureContent: Record<FeatureMode, FeatureContent> = {
        sunrise: {
            title: 'Sunrise',
            items: [
                'Sunrise Time & Light Quality',
                'Rain, Cloud Cover, Temperature, Visibility',
                'Tide Chart With High, Low & Tide At Sunrise',
                'Wave Height & Interval For Coastal Conditions',
                'Observation Timeline'
            ],
            image: "./Sunrise.png"
        },
        sunset: {
            title: 'Sunset',
            items: [
                'Sunset Time & Golden Hour Duration',
                'Weather Conditions & Cloud Formations',
                'Tide Levels During Evening Hours',
                'Wind Patterns & Atmospheric Clarity',
                'Photography Timeline & Best Viewing Times'
            ],
            image: "./Sunset.png"
        },
        astro: {
            title: 'Astro',
            items: [
                'Moon Phases & Rise/Set Times',
                'Planet Visibility & Constellation Maps',
                'Milky Way Core Visibility Windows',
                'Light Pollution & Darkness Quality',
                'Meteor Shower & Celestial Event Calendar'
            ],
            image: "./Astro.png"
        }
    };

    const currentContent = featureContent[activeMode];

    return (
        <div className="bg-[#0E0F11] text-white px-4 md:px-8 lg:px-24 py-20 md:py-32">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col gap-16  items-center">
                    {/* Navigation Tabs */}
                    <div className="flex flex-row justify-evenly items-center w-full max-w-6xl">
                        {Object.entries(featureContent).map(([key, content]) => (
                            <button
                                key={key}
                                onClick={() => setActiveMode(key as FeatureMode)}
                                className={`text-xl unbounded tracking-wide transition-all duration-500 pb-2 border-b-2 ${activeMode === key
                                    ? 'text-white border-[#FF6B2C]'
                                    : 'text-gray-400 border-transparent hover:text-gray-200'
                                    }`}
                            >
                                {content.title}
                            </button>
                        ))}
                    </div>
                    <div className="flex flex-col md:flex-row gap-12 items-center justify-between w-full max-w-6xl">
                        {/* Feature List */}
                        <div className="space-y-6 mt-12">
                            {currentContent.items.map((item, index) => (
                                <div
                                    key={`${activeMode}-${index}`}
                                    className="flex items-start space-x-4 group opacity-0 animate-fade-in-up"
                                    style={{
                                        animationDelay: `${index * 100}ms`,
                                        animationFillMode: 'forwards'
                                    }}
                                >
                                    <div className="w-2 h-2 rounded-full bg-[#CFCFCF] mt-3 flex-shrink-0 "></div>
                                    <p className="text-lg text-[#CFCFCF]">
                                        {item}
                                    </p>
                                </div>
                            ))}
                        </div>
                        {/* Right Panel */}
                        <div className="flex-1 max-w-md">
                            {/* Content */}
                            <div className="relative z-10">
                                <img src={currentContent.image} alt={currentContent.title} className="w-full h-auto rounded-2xl" />
                            </div>

                        </div>
                    </div>
                </div>
            </div>

            <style>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 0.6s ease-out;
        }
      `}</style>
        </div>
    );
};

export default Toggles;
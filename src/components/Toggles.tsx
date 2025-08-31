import React, { type JSX, useState } from 'react';

type FeatureMode = 'sunrise' | 'sunset' | 'astro';

interface FeatureContent {
    title: string;
    items: { icon: JSX.Element; title: string; list: string[] }[];
    image: string;
}

const Toggles: React.FC = () => {
    const [activeMode, setActiveMode] = useState<FeatureMode>('sunrise');

    const featureContent: Record<FeatureMode, FeatureContent> = {
        sunrise: {
            title: 'Sunrise',
            items: [
                {
                    icon: <svg></svg>,
                    title: 'Sunrise Time & Light Quality',
                    list: ["Sunrise start and end times", "Light quality forecast for planning"]
                },
                {
                    icon: <svg></svg>,
                    title: 'Weather Conditions',
                    list: ["Rain probability and cloud cover", "Temperature and visibility levels"]
                },
                {
                    icon: <svg></svg>,
                    title: 'Tides & Waves',
                    list: ["High and low tide chart for sunrise", "Wave height and interval details"]
                },
                {
                    icon: <svg></svg>,
                    title: 'Observation Timelines',
                    list: ["Hour-by-hour change in conditions", "Best window for morning shooting"]
                }
            ],
            image: "./Sunrise.png"
        },
        sunset: {
            title: 'Sunset',
            items: [
                {
                    icon: <svg></svg>,
                    title: 'Sunrise & Light',
                    list: ["Sunset start and end times", "Light quality forecast for planning"]
                },
                {
                    icon: <svg></svg>,
                    title: 'Weather Conditions',
                    list: ["Rain probability and cloud cover", "Temperature and visibility levels"]
                },
                {
                    icon: <svg></svg>,
                    title: 'Tides & Waves',
                    list: ["High and low tide chart for sunset", "Wave height and interval details"]
                },
                {
                    icon: <svg></svg>,
                    title: 'Observation Timeline',
                    list: ["Hour-by-hour change in conditions", "best windoe for evening shooting"]
                }
            ],
            image: "./Sunset.png"
        },
        astro: {
            title: 'Astro',
            items: [
                {
                    icon: <svg></svg>,
                    title: 'Astro Twilight',
                    list: ["Twilight start and end times", "Best observation darkness window"]
                },
                {
                    icon: <svg></svg>,
                    title: 'Weather & Sky Quality',
                    list: ["Rain probability and cloud cover", "Temperature and Bortle index"]
                },
                {
                    icon: <svg></svg>,
                    title: 'Milky Way & Moon',
                    list: ["Milky Way rise, transit, set times", "Moon phase, illumination, timings"]
                },
                {
                    icon: <svg></svg>,
                    title: 'Aurora & Timeline',
                    list: ["Live aurora activity forecast", "Hour-by-hour observation timeline"]
                }
            ],
            image: "./Astro.png"
        }
    };

    const currentContent = featureContent[activeMode];

    return (
        <div className="bg-black text-white px-8 lg:px-24 py-20 md:py-32 rounded-t-2xl">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col gap-16 md:gap-24  items-center">
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
                    <div className="flex flex-col-reverse md:flex-row gap-22 items-center justify-between w-full max-w-6xl">
                        {/* Feature List */}
                        <div className="space-y-6">
                            {currentContent.items.map((item, index) => (
                                <div
                                    key={`${activeMode}-${index}`}
                                    className="flex items-center space-x-4 group opacity-0 animate-fade-in-up"
                                    style={{
                                        animationDelay: `${index * 100}ms`,
                                        animationFillMode: 'forwards'
                                    }}
                                >
                                    <div className="text-[#CFCFCF]">
                                        <h4 className="text-[#F5F5F5] font-semibold mb-4 text-xl">{item.title}</h4>
                                        <ul className="list-disc list-inside">
                                            {item.list.map((listItem, listIndex) => (
                                                <li key={`${activeMode}-${index}-${listIndex}`}>{listItem}</li>
                                            ))}
                                        </ul>
                                    </div>
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
import React, { useState } from 'react';
import { Sun, Moon, Star, Eye, Heart } from 'lucide-react';

type FeatureMode = 'sunrise' | 'sunset' | 'astro';

interface FeatureContent {
    title: string;
    items: string[];
    icon: React.ReactNode;
    gradient: string;
    bgColor: string;
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
            icon: <Sun className="w-6 h-6" />,
            gradient: 'from-orange-400 via-pink-400 to-purple-500',
            bgColor: 'bg-gradient-to-br from-orange-900/20 via-pink-900/20 to-purple-900/20'
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
            icon: <Moon className="w-6 h-6" />,
            gradient: 'from-amber-400 via-orange-400 to-red-500',
            bgColor: 'bg-gradient-to-br from-amber-900/20 via-orange-900/20 to-red-900/20'
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
            icon: <Star className="w-6 h-6" />,
            gradient: 'from-indigo-400 via-purple-400 to-pink-400',
            bgColor: 'bg-gradient-to-br from-indigo-900/20 via-purple-900/20 to-pink-900/20'
        }
    };

    const currentContent = featureContent[activeMode];

    return (
        <div className=" bg-[#0E0F11] text-white p-14">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col gap-16 items-center">
                    {/* Navigation Tabs */}
                    <div className="flex flex-row justify-evenly items-center w-full max-w-6xl">
                        {Object.entries(featureContent).map(([key, content]) => (
                            <button
                                key={key}
                                onClick={() => setActiveMode(key as FeatureMode)}
                                className={`text-xl unbounded tracking-wide transition-all duration-500 pb-2 border-b-2 ${activeMode === key
                                    ? 'text-white border-orange-500'
                                    : 'text-gray-400 border-transparent hover:text-gray-200'
                                    }`}
                            >
                                {content.title}
                            </button>
                        ))}
                    </div>
                    <div className="flex flex-row gap-12 items-center justify-between w-full max-w-6xl">
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
                                    <div className="w-2 h-2 rounded-full bg-gray-400 mt-3 flex-shrink-0 group-hover:bg-orange-400 transition-colors duration-300"></div>
                                    <p className="text-lg text-gray-300 leading-relaxed group-hover:text-white transition-colors duration-300">
                                        {item}
                                    </p>
                                </div>
                            ))}
                        </div>
                        {/* Right Panel */}
                        <div className="flex-1 max-w-md">
                            <div
                                className={`relative rounded-3xl p-8 transition-all duration-1000 ${currentContent.bgColor} backdrop-blur-sm border border-white/10`}
                            >
                                {/* Gradient Background Effect */}
                                <div
                                    className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${currentContent.gradient} opacity-10 transition-all duration-1000`}
                                ></div>

                                {/* Content */}
                                <div className="relative z-10">
                                    {/* Header */}
                                    <div className="flex items-center justify-between mb-8">
                                        <div className="flex items-center space-x-3">
                                            <div className={`p-3 rounded-full bg-gradient-to-r ${currentContent.gradient} opacity-80`}>
                                                {currentContent.icon}
                                            </div>
                                            <h3 className="text-xl font-medium">{currentContent.title}</h3>
                                        </div>
                                        <button className="text-gray-400 hover:text-white transition-colors">
                                            <Eye className="w-5 h-5" />
                                        </button>
                                    </div>

                                    {/* Timeline Button */}
                                    <button className="w-full flex items-center justify-between p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-all duration-300 mb-6 group">
                                        <span className="text-gray-300 group-hover:text-white transition-colors">
                                            View Observation Timeline
                                        </span>
                                        <div className="w-6 h-6 rounded-full border border-gray-400 flex items-center justify-center group-hover:border-white transition-colors">
                                            <div className="w-2 h-2 bg-gray-400 rounded-full group-hover:bg-white transition-colors"></div>
                                        </div>
                                    </button>

                                    {/* Bottom Icons */}
                                    <div className="flex items-center justify-between pt-6 border-t border-white/10">
                                        <div className="flex space-x-6">
                                            <div className="flex flex-col items-center space-y-2">
                                                {currentContent.icon}
                                                <span className="text-xs text-gray-400">{currentContent.title}</span>
                                            </div>
                                            <div className="flex flex-col items-center space-y-2">
                                                <Moon className="w-6 h-6 text-gray-500" />
                                                <span className="text-xs text-gray-500">Sunset</span>
                                            </div>
                                            <div className="flex flex-col items-center space-y-2">
                                                <Star className="w-6 h-6 text-gray-500" />
                                                <span className="text-xs text-gray-500">Astro</span>
                                            </div>
                                        </div>
                                        <div className="flex flex-col items-center space-y-2">
                                            <Heart className="w-6 h-6 text-gray-500 hover:text-red-400 transition-colors cursor-pointer" />
                                            <span className="text-xs text-gray-500">Saved</span>
                                        </div>
                                    </div>
                                </div>
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
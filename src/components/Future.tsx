import React from 'react';
import { Sun, Users, TrendingUp, Clock, Lightbulb, RefreshCw } from 'lucide-react';

const Future: React.FC = () => {
    const features = [
        {
            icon: <Sun className="w-8 h-8" />,
            title: "Sun & Moon Path AR",
            description: "Visualize the sun and moon's path in real time with AR overlays to perfectly plan your shots."
        },
        {
            icon: <Users className="w-8 h-8" />,
            title: "Community Locations",
            description: "Explore and share great photo spots near you, discovered by fellow ReadySetShoot users."
        },
        {
            icon: <TrendingUp className="w-8 h-8" />,
            title: "Live Tide & Swell Data",
            description: "Stay informed with real-time tide and swell conditions for better coastal photography."
        },
        {
            icon: <Clock className="w-8 h-8" />,
            title: "Drive Time Estimates",
            description: "Know exactly when to leave with traffic-aware travel timing built into your shoot alerts."
        },
        {
            icon: <Lightbulb className="w-8 h-8" />,
            title: "Light Mode",
            description: "A clean, bright UI option for those who prefer shooting and scrolling in the daylight."
        },
        {
            icon: <RefreshCw className="w-8 h-8" />,
            title: "You Decide What's Next",
            description: "Have something in mind? Request your own feature right from the app. We're building what you need."
        }
    ];

    return (
        <div className="min-h-screen bg-[#0E0F11] text-white py-16 px-4">
            <div className="max-w-6xl mx-auto">
                {/* Header Section */}
                <div className="text-center mb-16">
                    <h1 className="text-4xl mb-8">
                        The Future of ReadySetShoot{' '}
                        <span className="text-orange-500">Is In Your Hands</span>
                    </h1>
                    <p className="text-[#7E7E7E] text-base max-w-6xl mx-auto leading-relaxed">
                        We're building more than just a photography tool. We're building it with the people who use it. Every upcoming feature you see here has
                        been inspired by real feedback, early users, and conversations with our community. What we build next depends on what you tell us
                        matters most.
                    </p>
                </div>

                {/* Features Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    {features.map((feature, index) => (
                        <div key={index} className="flex items-center gap-6">
                            {/* Icon */}
                            <div className="flex-shrink-0 text-gray-400 mt-1">
                                {feature.icon}
                            </div>

                            {/* Content */}
                            <div className="flex-1">
                                <h3 className="text-xl md:text-2xl font-semibold text-white mb-3">
                                    {feature.title}
                                </h3>
                                <p className="text-[#7E7E7E] text-base md:text-lg leading-relaxed">
                                    {feature.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Future;
import { useState } from 'react';

const FAQ = () => {
    const [openItem, setOpenItem] = useState(null);

    const faqData = [
        {
            id: 1,
            question: "How accurate are the sunrise and sunset forecasts?",
            answer: "Our sunrise and sunset forecasts are highly accurate, typically within 1-2 minutes of the actual times. We use precise astronomical calculations based on your exact location, taking into account atmospheric refraction and your local horizon."
        },
        {
            id: 2,
            question: "Is this app good for Milky Way and astro planning?",
            answer: "Absolutely! The app is specifically designed for astrophotography planning. It provides detailed information about moon phases, astronomical twilight times, light pollution levels, and optimal shooting windows for Milky Way photography."
        },
        {
            id: 3,
            question: "How often does the forecast update?",
            answer: "Weather forecasts are updated every 6 hours with the latest meteorological data. Astronomical data (sunrise, sunset, moon phases) is calculated in real-time based on your location and never needs updating as it's based on precise celestial mechanics."
        },
        {
            id: 4,
            question: "Is this just for pros or can anyone use it?",
            answer: "The app is designed for everyone! Whether you're a professional astrophotographer, amateur astronomer, or just someone who loves watching sunrises and sunsets, the intuitive interface makes it easy for anyone to plan their perfect shoot."
        },
        {
            id: 5,
            question: "How many locations can I save?",
            answer: "You can save unlimited locations in the app. Create a personalized list of your favorite shooting spots, from local parks to exotic destinations, and quickly access detailed forecasts for each location."
        },
        {
            id: 6,
            question: "Does ReadySetShoot work globally?",
            answer: "Yes! ReadySetShoot works anywhere in the world. Simply search for any location globally and get accurate astronomical and weather data. The app supports locations from the Arctic Circle to Antarctica."
        }
    ];

    const toggleItem = (id: any) => {
        setOpenItem(prev => prev === id ? null : id);
    };

    return (
        <div className="min-h-screen bg-black text-white px-4 md:px-8 lg:px-24 py-8 md:py-32">
            <div className="flex flex-col md:flex-row items-start justify-center">
                {/* Left Side - FAQ */}
                <div className="w-full px-2 md:px-24">
                    <div className="mb-12">
                        <p className="text-gray-400 text-sm mb-3">FAQs</p>
                        <h1 className="text-4xl leading-tight">
                            Questions → <span className="text-orange-500">Answers</span>
                        </h1>
                    </div>

                    <div className="space-y-2">
                        {faqData.map((item) => (
                            <div 
                                key={item.id} 
                                className={`transition-all duration-300 ease-in-out ${
                                    openItem === item.id 
                                        ? 'bg-[#222222] rounded-lg border-b border-transparent' 
                                        : 'border-b border-gray-800 rounded-lg'
                                }`}
                            >
                                <button
                                    onClick={() => toggleItem(item.id)}
                                    className={`w-full py-4 flex items-center justify-between text-left transition-all duration-300 ease-in-out ${
                                        openItem === item.id 
                                            ? 'bg-[#222222] px-4 rounded-lg' 
                                            : 'cursor-pointer'
                                    }`}
                                >
                                    <span className={`text-lg transition-colors duration-300 ease-in-out ${
                                        openItem === item.id 
                                            ? 'text-[#999FA5]' 
                                            : 'text-[#F5F5F5]'
                                    }`}>
                                        {item.question}
                                    </span>
                                    <div className="flex-shrink-0 w-6 h-6 flex items-center justify-center">
                                        <div className="relative w-4 h-4">
                                            {/* Horizontal line - always visible */}
                                            <div className="absolute top-1/2 left-1/2 w-4 h-0.5 bg-white transform -translate-x-1/2 -translate-y-1/2 transition-all duration-300 ease-in-out" />
                                            {/* Vertical line - rotates and fades when open */}
                                            <div
                                                className={`absolute top-1/2 left-1/2 w-0.5 h-4 bg-white transform -translate-x-1/2 -translate-y-1/2 transition-all duration-300 ease-in-out ${
                                                    openItem === item.id 
                                                        ? 'opacity-0 rotate-90 scale-0' 
                                                        : 'opacity-100 rotate-0 scale-100'
                                                }`}
                                            />
                                        </div>
                                    </div>
                                </button>
                                
                                {/* Answer container with smooth height transition */}
                                <div
                                    className={`overflow-hidden transition-all duration-500 ease-in-out ${
                                        openItem === item.id 
                                            ? 'max-h-96 opacity-100' 
                                            : 'max-h-0 opacity-0'
                                    }`}
                                >
                                    <div className="px-4 pb-6 pt-2 text-gray-300 leading-relaxed">
                                        {item.answer}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FAQ;
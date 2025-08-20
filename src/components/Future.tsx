// import React from 'react';
// import { Sun, Users, TrendingUp, Clock, Lightbulb, RefreshCw } from 'lucide-react';

// const Future: React.FC = () => {
//     const features = [
//         {
//             icon: <Sun className="w-8 h-8" />,
//             title: "Sun & Moon Path AR",
//             description: "Visualize the sun and moon's path in real time with AR overlays to perfectly plan your shots."
//         },
//         {
//             icon: <Users className="w-8 h-8" />,
//             title: "Community Locations",
//             description: "Explore and share great photo spots near you, discovered by fellow ReadySetShoot users."
//         },
//         {
//             icon: <TrendingUp className="w-8 h-8" />,
//             title: "Live Tide & Swell Data",
//             description: "Stay informed with real-time tide and swell conditions for better coastal photography."
//         },
//         {
//             icon: <Clock className="w-8 h-8" />,
//             title: "Drive Time Estimates",
//             description: "Know exactly when to leave with traffic-aware travel timing built into your shoot alerts."
//         },
//         {
//             icon: <Lightbulb className="w-8 h-8" />,
//             title: "Light Mode",
//             description: "A clean, bright UI option for those who prefer shooting and scrolling in the daylight."
//         },
//         {
//             icon: <RefreshCw className="w-8 h-8" />,
//             title: "You Decide What's Next",
//             description: "Have something in mind? Request your own feature right from the app. We're building what you need."
//         }
//     ];

//     return (
//         <div className="min-h-screen bg-[#0E0F11] text-white py-16 px-4">
//             <div className="max-w-6xl mx-auto">
//                 {/* Header Section */}
//                 <div className="text-center mb-16">
//                     <h1 className="text-4xl mb-8">
//                         The Future of ReadySetShoot{' '}
//                         <span className="text-orange-500">Is In Your Hands</span>
//                     </h1>
//                     <p className="text-[#7E7E7E] text-base max-w-6xl mx-auto leading-relaxed">
//                         We're building more than just a photography tool. We're building it with the people who use it. Every upcoming feature you see here has
//                         been inspired by real feedback, early users, and conversations with our community. What we build next depends on what you tell us
//                         matters most.
//                     </p>
//                 </div>

//                 {/* Features Grid */}
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
//                     {features.map((feature, index) => (
//                         <div key={index} className="flex items-center gap-6">
//                             {/* Icon */}
//                             <div className="flex-shrink-0 text-gray-400 mt-1">
//                                 {feature.icon}
//                             </div>

//                             {/* Content */}
//                             <div className="flex-1">
//                                 <h3 className="text-xl md:text-2xl font-semibold text-white mb-3">
//                                     {feature.title}
//                                 </h3>
//                                 <p className="text-[#7E7E7E] text-base md:text-lg leading-relaxed">
//                                     {feature.description}
//                                 </p>
//                             </div>
//                         </div>
//                     ))}
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Future;

const Future = () => {
  return (
    <section className="bg-[#0E0F11] text-white py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl font-light mb-6">
            The Future of ReadySetShoot{' '}
            <span className="text-orange-500">Is In Your Hands</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            We're building more than just a photography tool. What we build next depends on what you tell us matters most.
          </p>
        </div>

        {/* Features Grid */}
        <div className="space-y-14">
          {/* Row 1 - Left aligned */}
          <div className="flex justify-start border-b border-[#222222] pb-8">
            <div className="flex items-start space-x-6 max-w-lg">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Sun & Moon Path AR</h3>
                <p className="text-gray-400">
                  Visualize the sun and moon's path in real time with AR overlays to perfectly plan your shots.
                </p>
              </div>
            </div>
          </div>

          {/* Row 2 - Right aligned */}
          <div className="flex justify-end border-b border-[#222222] pb-8">
            <div className="flex items-start space-x-6 max-w-lg">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                  </svg>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Community Locations</h3>
                <p className="text-gray-400">
                  Explore and share great photo spots near you, discovered by fellow ReadySetShoot users.
                </p>
              </div>
            </div>
          </div>

          {/* Row 3 - Left aligned */}
          <div className="flex justify-start border-b border-[#222222] pb-8">
            <div className="flex items-start space-x-6 max-w-lg">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17 3H7c-1.1 0-2 .9-2 2v16l7-3 7 3V5c0-1.1-.9-2-2-2zm0 15l-5-2.18L7 18V5h10v13z"/>
                  </svg>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Live Tide & Swell Data</h3>
                <p className="text-gray-400">
                  Stay informed with real-time tide and swell conditions for better coastal photography.
                </p>
              </div>
            </div>
          </div>

          {/* Row 4 - Right aligned */}
          <div className="flex justify-end border-b border-[#222222] pb-8">
            <div className="flex items-start space-x-6 max-w-lg">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Drive Time Estimates</h3>
                <p className="text-gray-400">
                  Know exactly when to leave with traffic-aware travel timing built into your shoot alerts.
                </p>
              </div>
            </div>
          </div>

          {/* Row 5 - Left aligned */}
          <div className="flex justify-start border-b border-[#222222] pb-8">
            <div className="flex items-start space-x-6 max-w-lg">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                  </svg>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Light Mode</h3>
                <p className="text-gray-400">
                  A clean, bright UI option for those who prefer shooting and scrolling in the daylight.
                </p>
              </div>
            </div>
          </div>

          {/* Row 6 - Right aligned */}
          <div className="flex justify-end">
            <div className="flex items-start space-x-6 max-w-lg">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/>
                  </svg>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">You Decide What's Next</h3>
                <p className="text-gray-400">
                  Have something in mind? Request your own feature right from the app. We're building what you need.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Future;
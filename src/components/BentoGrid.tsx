import React, { useState } from 'react';
import { Zap, ArrowRight, } from 'lucide-react';

const BentoGrid: React.FC = () => {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-black text-white p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        {/* Grid Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-4 h-auto lg:h-[600px]">

          {/* Main Brand Card */}
          <div
            className="lg:col-span-5 md:col-span-1 bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-6 md:p-8 flex flex-col justify-center relative overflow-hidden group cursor-pointer transition-all duration-300 hover:scale-[1.02]"
            onMouseEnter={() => setHoveredCard('brand')}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <div className="relative z-10">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-xl flex items-center justify-center">
                  <Zap className="w-6 h-6 text-black" />
                </div>
              </div>
              <h2 className="text-2xl md:text-3xl font-bold mb-2">One App.</h2>
              <h3 className="text-2xl md:text-3xl font-bold mb-6 text-gray-300">Every Forecast.</h3>
            </div>
            <div className={`absolute inset-0 bg-gradient-to-r from-yellow-400/10 to-orange-500/10 transition-opacity duration-300 ${hoveredCard === 'brand' ? 'opacity-100' : 'opacity-0'}`}></div>
          </div>

          {/* Forecast Card */}
          <div
            className="lg:col-span-4 md:col-span-1 bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl p-6 md:p-8 flex flex-col justify-between relative overflow-hidden group cursor-pointer transition-all duration-300 hover:scale-[1.02]"
            onMouseEnter={() => setHoveredCard('forecast')}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <div>
              <div className="text-sm text-orange-100 mb-2 font-medium">Sunrise</div>
              <h3 className="text-2xl md:text-3xl font-bold mb-8 leading-tight">
                Forecast<br />
                every<br />
                moment<br />
                that<br />
                matters
              </h3>
            </div>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div className="space-y-2">
                <div className="text-orange-100">Tides</div>
                <div className="text-orange-100">Sunset</div>
                <div className="text-orange-100">Astro</div>
              </div>
              <div className="space-y-2">
                <div className="text-orange-100">Cloud Cover</div>
                <div className="text-orange-100">Light Pollution</div>
              </div>
            </div>
            <div className={`absolute inset-0 bg-white/10 transition-opacity duration-300 ${hoveredCard === 'forecast' ? 'opacity-100' : 'opacity-0'}`}></div>
          </div>

          {/* Device Showcase */}
          <div
            className="lg:col-span-3 md:col-span-2 bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-6 md:p-8 flex flex-col justify-between relative overflow-hidden group cursor-pointer transition-all duration-300 hover:scale-[1.02]"
            onMouseEnter={() => setHoveredCard('device')}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <div className="flex-1 flex items-center justify-center mb-6">
              <div className="relative">
                {/* Phone mockups */}
                <div className="relative transform rotate-12">
                  <div className="w-24 h-44 bg-gradient-to-b from-gray-700 to-gray-900 rounded-2xl border border-gray-600 p-1">
                    <div className="w-full h-full bg-gradient-to-b from-purple-900 to-blue-900 rounded-xl flex items-center justify-center">
                      <div className="w-8 h-8 bg-gray-400 rounded-full opacity-60"></div>
                    </div>
                  </div>
                </div>
                <div className="absolute -top-4 -left-4 transform -rotate-12">
                  <div className="w-24 h-44 bg-gradient-to-b from-gray-700 to-gray-900 rounded-2xl border border-gray-600 p-1">
                    <div className="w-full h-full bg-gradient-to-b from-yellow-800 to-orange-900 rounded-xl flex items-end p-2">
                      <div className="w-4 h-4 bg-gray-300 rounded-full"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">Ready. Set. Shoot.</h3>
              <p className="text-gray-400 text-sm">No more switching tabs or second-guessing skies. Everything you need to plan the perfect shot is here.</p>
            </div>
            <div className={`absolute inset-0 bg-gradient-to-r from-purple-500/10 to-blue-500/10 transition-opacity duration-300 ${hoveredCard === 'device' ? 'opacity-100' : 'opacity-0'}`}></div>
          </div>

          {/* Analytics Card */}
          <div
            className="lg:col-span-7 md:col-span-1 bg-gradient-to-br from-gray-900 to-black rounded-2xl p-6 md:p-8 flex items-center justify-between relative overflow-hidden group cursor-pointer transition-all duration-300 hover:scale-[1.02]"
            onMouseEnter={() => setHoveredCard('analytics')}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <div className="flex-1">
              <h3 className="text-2xl md:text-3xl font-bold mb-4 leading-tight">
                Light waits for<br />
                nobody. We<br />
                make sure<br />
                you're ready.
              </h3>
            </div>
            <div className="flex-1 relative">
              {/* Analytics visualization */}
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-xl"></div>
                <div className="relative p-6 space-y-4">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-400">Cloud Coverage</span>
                    <span className="text-white font-bold">5.7</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-400">Current AQI Index</span>
                    <span className="text-white font-bold">4.9</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-400">Moon Phase</span>
                    <span className="text-white">🌕</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-400">Forecasted AQI Index</span>
                    <span className="text-white font-bold">5.7</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-400">Overcast Likelihood</span>
                    <span className="text-white font-bold">62%</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-400">Horizon Likelihood</span>
                    <span className="text-white font-bold">79%</span>
                  </div>
                </div>
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent pointer-events-none"></div>
              </div>
            </div>
            <div className={`absolute inset-0 bg-gradient-to-r from-purple-500/10 to-blue-500/10 transition-opacity duration-300 ${hoveredCard === 'analytics' ? 'opacity-100' : 'opacity-0'}`}></div>
          </div>

          {/* CTA Card */}
          <div
            className="lg:col-span-5 md:col-span-1 bg-gradient-to-br from-blue-600 to-purple-700 rounded-2xl p-6 md:p-8 flex flex-col justify-between relative overflow-hidden group cursor-pointer transition-all duration-300 hover:scale-[1.02]"
            onMouseEnter={() => setHoveredCard('cta')}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <div className="flex-1 flex items-center justify-center mb-6">
              <div className="relative">
                <div className="w-32 h-20 bg-gradient-to-r from-green-400 to-blue-500 rounded-xl flex items-center justify-center transform rotate-3">
                  <div className="text-2xl">📊</div>
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-green-400 rounded-full flex items-center justify-center">
                  <div className="w-3 h-3 bg-white rounded-full"></div>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">Built for<br />Real World<br />Conditions.</h3>
            </div>
            <div className="mt-auto">
              <button className="w-full bg-white/20 hover:bg-white/30 rounded-xl py-3 px-4 flex items-center justify-center space-x-2 transition-all duration-300 group">
                <span className="font-medium">Shoot Smarter.</span>
                <span className="font-bold">Start Now.</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
            <div className={`absolute inset-0 bg-white/10 transition-opacity duration-300 ${hoveredCard === 'cta' ? 'opacity-100' : 'opacity-0'}`}></div>
          </div>

        </div>

        {/* Mobile optimization message */}
        <div className="mt-8 text-center text-gray-500 text-sm md:hidden">
          <p>Swipe to explore each feature card</p>
        </div>
      </div>
    </div>
  );
};

export default BentoGrid;
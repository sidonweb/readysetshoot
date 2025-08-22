import React, { useState } from 'react';
import { ArrowRight, } from 'lucide-react';
import Silk from './ui/Silk';




const BentoGrid: React.FC = () => {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-black text-white px-4 md:px-8 py-8 md:py-32">
      <div className="max-w-7xl mx-auto">
        {/* Grid Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-4 h-auto lg:h-[600px]">

          {/* Main Brand Card */}
          <div
            className="lg:col-span-5 md:col-span-1 rounded-2xl p-6 md:p-8 flex flex-col justify-center relative overflow-hidden group cursor-pointer "
          >
            {/* Silk BG */}
            <div className="absolute inset-0 z-0 pointer-events-none">
              <Silk
                speed={5}
                scale={1}
                color="#7B7481"
                noiseIntensity={1.5}
                rotation={0}
              />
            </div>
            <div className="relative z-10 flex flex-col md:flex-row justify-center items-center gap-8">
              <div className="flex items-center space-x-3 mb-4">
                <svg width="58" height="109" viewBox="0 0 58 109" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M55.8072 54.7498H40.7178C40.5489 54.7498 40.382 54.7146 40.2275 54.6465C40.0731 54.5783 39.9346 54.4786 39.8208 54.3539C39.7071 54.2291 39.6206 54.082 39.5669 53.922C39.5132 53.7619 39.4935 53.5924 39.509 53.4243L43.7661 7.29667C44.3394 1.08265 36.2237 -1.76735 32.7861 3.44083L1.16263 51.355C0.202375 52.8105 1.24583 54.7498 2.98968 54.7498H18.0791C18.2479 54.7498 18.4149 54.785 18.5693 54.8532C18.7238 54.9214 18.8623 55.0211 18.9761 55.1458C19.0898 55.2706 19.1763 55.4177 19.23 55.5777C19.2836 55.7378 19.3034 55.9073 19.2878 56.0754L15.0308 102.203C14.4575 108.417 22.5732 111.267 26.0107 106.059L57.6342 58.1446C58.5945 56.6892 57.551 54.7498 55.8072 54.7498Z" fill="url(#paint0_linear_853_1612)" />
                  <path d="M55.8074 54.75H40.718C40.5492 54.75 40.3822 54.7148 40.2278 54.6467C40.0733 54.5785 39.9348 54.4788 39.8211 54.3541C39.7073 54.2293 39.6208 54.0822 39.5671 53.9222C39.5135 53.7621 39.4938 53.5926 39.5093 53.4245L43.7663 7.29687C43.9732 5.05837 43.0488 3.25981 41.6247 2.11377L25.9147 31.9678C24.032 35.5455 23.3433 39.6318 23.9494 43.629C24.5555 47.6263 26.4246 51.3247 29.2833 54.1836C32.0454 56.9455 33.8861 60.4938 34.5533 64.3425C35.2205 68.1912 34.6816 72.152 33.0103 75.6825L17.7938 107.829C20.3332 109.397 23.9845 109.129 26.011 106.058L57.6345 58.1443C58.5947 56.6894 57.5513 54.75 55.8074 54.75Z" fill="url(#paint1_linear_853_1612)" />
                  <defs>
                    <linearGradient id="paint0_linear_853_1612" x1="10.853" y1="41.9514" x2="39.6971" y2="61.8574" gradientUnits="userSpaceOnUse">
                      <stop stop-color="#FEF0AE" />
                      <stop offset="1" stop-color="#FBC56D" />
                    </linearGradient>
                    <linearGradient id="paint1_linear_853_1612" x1="38.6277" y1="56.2528" x2="16.2836" y2="53.8149" gradientUnits="userSpaceOnUse">
                      <stop stop-color="#DC8758" stop-opacity="0" />
                      <stop offset="0.215" stop-color="#DD8654" stop-opacity="0.215" />
                      <stop offset="0.429" stop-color="#E28448" stop-opacity="0.429" />
                      <stop offset="0.642" stop-color="#EA8034" stop-opacity="0.642" />
                      <stop offset="0.854" stop-color="#F47B18" stop-opacity="0.854" />
                      <stop offset="1" stop-color="#FE7701" />
                    </linearGradient>
                  </defs>
                </svg>

              </div>
              <div className='flex flex-col justify-between items-start'>
                <h2 className="text-2xl md:text-3xl font-bold mb-1">One App.</h2>
                <h3 className="text-2xl md:text-3xl font-bold text-gray-300">Every Forecast.</h3>
              </div>

            </div>
            <div className={`absolute inset-0 bg-gradient-to-r from-yellow-400/10 to-orange-500/10 transition-opacity duration-300 ${hoveredCard === 'brand' ? 'opacity-100' : 'opacity-0'}`}></div>
          </div>

          {/* Forecast Card */}
          <div
            className="lg:col-span-4 md:col-span-1 bg-[#FF6B2C] rounded-2xl p-6 flex flex-row justify-between items-center gap-8 relative overflow-hidden group cursor-pointer"
          >
            <div>
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
                <div className="text-orange-100 bg-[#FF4D00] px-4 py-5 rounded-md">Sunrise</div>
                <div className="text-orange-100 bg-[#FF4D00] px-4 py-5 rounded-md">Sunset</div>
                <div className="text-orange-100 bg-[#FF4D00] px-4 py-5 rounded-md">Astro</div>
              </div>
              <div className="space-y-2">

                <div className="text-orange-100 bg-[#FF4D00] px-4 py-5 rounded-md">Tides</div>
                <div className="text-orange-100 bg-[#FF4D00] px-4 py-5 rounded-md">Cloud Cover</div>
                <div className="text-orange-100 bg-[#FF4D00] px-4 py-5 rounded-md">Light Pollution</div>
              </div>
            </div>
            <div className={`absolute inset-0 bg-white/10 transition-opacity duration-300 ${hoveredCard === 'forecast' ? 'opacity-100' : 'opacity-0'}`}></div>
          </div>

          {/* Device Showcase */}
          <div
            className="lg:col-span-3 md:col-span-2  rounded-2xl p-6 md:p-8  relative overflow-hidden group cursor-pointer"
          >
            <div
              className="absolute inset-0 z-0 bg-cover bg-center"
              style={{ backgroundImage: "url('/BentoImg1.png')" }}
              aria-hidden="true"
            />
            <div className="relative z-10">
              <h3 className="text-xl font-bold mb-2">Ready. Set. Shoot.</h3>
              <p className="text-gray-400 text-sm">No more switching tabs or second-guessing skies. Everything you need to plan the perfect shot is here.</p>
            </div>
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
      </div>
    </div>
  );
};

export default BentoGrid;
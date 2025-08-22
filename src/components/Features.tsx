// import { Camera, CloudSun, MapPin, Moon, Smartphone, Bell } from "lucide-react";

// const features = [
//   {
//     icon: <Camera size={34} />,
//     title: "Built for Photographers",
//     description:
//       "A purpose-built app for landscape, seascape, and astrophotographers. No more guesswork or switching apps. Get accurate light, weather, and sky insights all in one place.",
//   },
//   {
//     icon: <CloudSun size={34} />,
//     title: "Quality-First Forecasts",
//     description:
//       "Know exactly when and where to shoot. Get color quality forecasts for sunrise and sunset, plus moon phases, Milky Way core position and hourly cloud cover for astro.",
//   },
//   {
//     icon: <MapPin size={34} />,
//     title: "Save Locations",
//     description:
//       "Premium users can save their favourite sunrise, sunset, and astro locations, easily comparing real-time conditions to pick the perfect spot every time.",
//   },
//   {
//     icon: <Moon size={34} />,
//     title: "Deep Astro Insights",
//     description:
//       "Track the Milky Way core, moon rise/set, twilight phases, and live aurora alerts. Everything you need for astro/night photography in one place.",
//   },
//   {
//     icon: <Smartphone size={34} />,
//     title: "Fast, Mobile-First UI",
//     description:
//       "Designed to be quick, clean and intuitive – so when you're out shooting, everything you need is right at your fingertips, exactly when you need it.",
//   },
//   {
//     icon: <Bell size={34} />,
//     title: "Alerts That Matter",
//     description:
//       "Premium users get notified when conditions align for the perfect shot. Set personalised thresholds for sunrise, sunset, clear skies, and aurora with clutter-free alerts.",
//   },
// ];

// const Features = () => {
//   return (
//     <section
//       className="w-full bg-black text-white py-20 md:py-32 px-4 md:px-10 lg:px-24"
//       id="features"
//     >
//       <div className="max-w-7xl mx-auto text-center">
//         <h2 className="text-2xl sm:text-3xl md:text-4xl mb-2">
//           Every <span className="text-orange-500">Great Shot</span> Starts Here
//         </h2>
//         <p className="text-base syne text-gray-400 mb-20 mx-auto">
//           Skip the tabs and trust one fast, focused app designed to back every shoot with real insight.
//         </p>

//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
//           {features.map((feature, index) => (
//             <div
//               key={index}
//               className="group relative overflow-hidden p-8 rounded-[10px] border-2 border-[#222222] hover:border-[#1C0041] transition-all duration-[2500ms] ease-[cubic-bezier(0.23,1,0.32,1)]"
//             >
//               {/* Background layers */}
//               <div className="absolute inset-0 bg-gradient-to-t from-[#000000] to-[#0F0F0F] z-0" />
//               <div className="absolute inset-0 bg-gradient-to-t from-[#1C0041] to-[#000000] z-0 opacity-0 transition-opacity duration-[2500ms] ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:opacity-100" />

//               {/* Content */}
//               <div className="relative z-10">
//                 <div className="mb-8 text-white">{feature.icon}</div>
//                 <h3 className="text-2xl mb-4 text-start text-[#C1C1C1] transition-all duration-[1800ms] ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:text-[#B57DFF]">
//                   {feature.title}
//                 </h3>
//                 <p className="text-base text-[#7E7E7E] leading-relaxed text-start">
//                   {feature.description}
//                 </p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>

//     </section>
//   );
// };

// export default Features;

const Features = () => {
  const features = [
    {
      number: "1",
      title: "Built for Photographers",
      description: "A purpose-built app for landscape, seascape, and astrophotographers. Go from guesswork to enriching apps - the moments that matter most for creating magic in one place."
    },
    {
      number: "2",
      title: "Quality-First Forecasts",
      description: "Know exactly what and where to shoot. Get color-quality forecasts for sunrise and sunset, plus moon phases, Milky Way core position and hourly cloud cover for astro."
    },
    {
      number: "3",
      title: "Save Locations",
      description: "Premium users can save their favourite sunrise, sunset, and astro locations, easily comparing real-time conditions to pick the perfect spot every time."
    },
    {
      number: "4",
      title: "Deep Astro Insights",
      description: "Pinpoint the Milky Way core, moon heights, twilight phases, and live aurora alerts. Everything you need for astrophotography in one place."
    },
    {
      number: "5",
      title: "Fast, Mobile-First UI",
      description: "Designed to be quick, clean and intuitive - so when you're out shooting, everything you need is right at your fingertips exactly when you need it."
    },
    {
      number: "6",
      title: "Alerts That Matters",
      description: "Premium users get notified when conditions align for the perfect shot. Set personalised thresholds for sunrise, sunset, clear skies, and aurora with clutter-free alerts."
    }
  ];

  return (
    <section className="bg-black text-white py-8 md:py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="md:text-center mb-20">
          <h2 className="text-4xl font-light mb-6">
            Every <span className="text-orange-500">Great Shot</span> Starts Here
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Skip the hills and trial and feel focused app designed to back every shoot with real insight.
          </p>
        </div>

        {/* Features List */}
        <div className="space-y-16">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col md:flex-row justify-start md:justify-between items-start md:items-center gap-5">
              <div className="flex flex-row items-center justify-start md:justify-between gap-4 md:gap-10">
                {/* Number */}
                <div className="flex flex-row items-start md:items-center justify-start md:justify-between gap-10">
                  <span className="text-orange-500 text-2xl font-normal">
                    {feature.number}
                  </span>
                </div>
                {/* Title */}
                <div className="md:col-span-4 text-center md:text-left">
                  <h3 className="text-2xl font-normal text-white">
                    {feature.title}
                  </h3>
                </div>
              </div>

              {/* Description */}
              <div className="md:col-span-7 text-start max-w-2xl">
                <p className="text-gray-400 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
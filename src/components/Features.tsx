// import { Camera, CloudSun, MapPin, Moon, Smartphone, Bell } from "lucide-react";
// import { Camera } from "lucide-react";
import Carousel from "./ui/Carousel";
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
const myicon = <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M13.0144 9.53405L17.3264 2.14205C19.1949 2.63485 20.8532 3.53832 22.3012 4.85245C23.7492 6.16659 24.8013 7.72712 25.4576 9.53405H13.0144ZM9.5956 12.6141L5.376 5.22205C6.4848 4.13379 7.77347 3.27139 9.24201 2.63485C10.7106 1.99832 12.2965 1.68005 14 1.68005C14.2669 1.68005 14.5749 1.69566 14.924 1.72687C15.2731 1.75808 15.5913 1.79381 15.8788 1.83405L9.5956 12.6141ZM2.08041 17.0801C1.95721 16.5873 1.85947 16.0842 1.78719 15.5709C1.71491 15.0575 1.67919 14.5339 1.68001 14.0001C1.68001 12.5422 1.91614 11.1665 2.38841 9.87285C2.86067 8.57925 3.528 7.39859 4.3904 6.33085L10.612 17.0801H2.08041ZM10.7044 25.8581C8.83587 25.3653 7.17267 24.4618 5.7148 23.1477C4.25694 21.8335 3.19947 20.273 2.54241 18.4661H14.9548L10.7044 25.8581ZM14 26.3201C13.692 26.3201 13.3787 26.2995 13.06 26.2585C12.7413 26.2174 12.4386 26.1763 12.152 26.1353L18.4044 15.3861L22.624 22.7781C21.5152 23.8663 20.2269 24.7287 18.7592 25.3653C17.2915 26.0018 15.7051 26.3201 14 26.3201ZM23.6096 21.6693L17.388 10.9201H25.9196C26.0428 11.4129 26.1405 11.9159 26.2128 12.4293C26.2851 12.9426 26.3208 13.4662 26.32 14.0001C26.32 15.4374 26.0687 16.8131 25.566 18.1273C25.0633 19.4414 24.4112 20.6221 23.6096 21.6693Z" fill="#9081FF" />
</svg>
const Features = () => {
  const features = [
    {
      id: 1,
      icon: myicon,
      title: "Built for Photographers",
      description: "A purpose-built app for landscape, seascape, and astrophotographers. Go from guesswork to enriching apps - the moments that matter most for creating magic in one place."
    },
    {
      id: 2,
      icon: myicon,
      title: "Quality-First Forecasts",
      description: "Know exactly what and where to shoot. Get color-quality forecasts for sunrise and sunset, plus moon phases, Milky Way core position and hourly cloud cover for astro."
    },
    {
      id: 3,
      icon: myicon,
      title: "Save Locations",
      description: "Premium users can save their favourite sunrise, sunset, and astro locations, easily comparing real-time conditions to pick the perfect spot every time."
    },
    {
      id: 4,
      icon: myicon,
      title: "Deep Astro Insights",
      description: "Pinpoint the Milky Way core, moon heights, twilight phases, and live aurora alerts. Everything you need for astrophotography in one place."
    },
    {
      id: 5,
      icon: myicon,
      title: "Fast, Mobile-First UI",
      description: "Designed to be quick, clean and intuitive - so when you're out shooting, everything you need is right at your fingertips exactly when you need it."
    },
    {
      id: 6,
      icon: myicon,
      title: "Alerts That Matters",
      description: "Premium users get notified when conditions align for the perfect shot. Set personalised thresholds for sunrise, sunset, clear skies, and aurora with clutter-free alerts."
    }
  ];

  return (
    <section className="bg-gradient-to-r from-[#5A00FF] to-[#7F39FF] text-white py-20 md:py-32 px-4 rounded-t-2xl">
      <div className="max-w-6xl mx-auto flex flex-col justify-center items-center">
        {/* Header */}
        <div className="md:text-center mb-24 md:mb-32">
          <h2 className="text-3xl md:text-4xl mb-6">
            Every <span className="text-[#FF6B2C]">Great Shot</span> Starts Here
          </h2>
          <p className=" text-[#CFCFCF] text-lg max-w-4xl mx-auto">
            Skip the hills and trial and feel focused app designed to back every shoot with real insight.
          </p>
        </div>

        {/* Features List */}
        <div className="hidden md:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {features.map((feature, index) => (
            <>
              <div key={index} className="cursor-target bg-gradient-to-b from-[#0D0D0D] to-[#111111] border border-[#3A0CA3] rounded-2xl p-6 max-w-sm shadow-lg flex flex-col items-start">
                {/* Number */}
                <div className="w-10 h-10 flex items-center justify-center  mb-4">
                  <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13.0144 9.53405L17.3264 2.14205C19.1949 2.63485 20.8532 3.53832 22.3012 4.85245C23.7492 6.16659 24.8013 7.72712 25.4576 9.53405H13.0144ZM9.5956 12.6141L5.376 5.22205C6.4848 4.13379 7.77347 3.27139 9.24201 2.63485C10.7106 1.99832 12.2965 1.68005 14 1.68005C14.2669 1.68005 14.5749 1.69566 14.924 1.72687C15.2731 1.75808 15.5913 1.79381 15.8788 1.83405L9.5956 12.6141ZM2.08041 17.0801C1.95721 16.5873 1.85947 16.0842 1.78719 15.5709C1.71491 15.0575 1.67919 14.5339 1.68001 14.0001C1.68001 12.5422 1.91614 11.1665 2.38841 9.87285C2.86067 8.57925 3.528 7.39859 4.3904 6.33085L10.612 17.0801H2.08041ZM10.7044 25.8581C8.83587 25.3653 7.17267 24.4618 5.7148 23.1477C4.25694 21.8335 3.19947 20.273 2.54241 18.4661H14.9548L10.7044 25.8581ZM14 26.3201C13.692 26.3201 13.3787 26.2995 13.06 26.2585C12.7413 26.2174 12.4386 26.1763 12.152 26.1353L18.4044 15.3861L22.624 22.7781C21.5152 23.8663 20.2269 24.7287 18.7592 25.3653C17.2915 26.0018 15.7051 26.3201 14 26.3201ZM23.6096 21.6693L17.388 10.9201H25.9196C26.0428 11.4129 26.1405 11.9159 26.2128 12.4293C26.2851 12.9426 26.3208 13.4662 26.32 14.0001C26.32 15.4374 26.0687 16.8131 25.566 18.1273C25.0633 19.4414 24.4112 20.6221 23.6096 21.6693Z" fill="#9081FF" />
                  </svg>

                </div>

                {/* Title */}
                <h3 className="text-white text-2xl font-semibold leading-snug">
                  {feature.title}
                </h3>


                {/* Description */}
                <p className="text-[#CFCFCF] mt-4 leading-relaxed text-[15px]">
                  {feature.description}
                </p>
              </div>
            </>
          ))}
        </div>
        <div className="block md:hidden">
          <Carousel
            items={features}
            baseWidth={300}
            autoplay={true}
            autoplayDelay={3000}
            pauseOnHover={true}
            loop={true}
            round={false}
          />
        </div>

      </div>
    </section>
  );
};

export default Features;
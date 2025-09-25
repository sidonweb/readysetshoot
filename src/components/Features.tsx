// import { Camera, CloudSun, MapPin, Moon, Smartphone, Bell } from "lucide-react";
// import { Camera } from "lucide-react";
// import Carousel from "./ui/Carousel";
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

import AnimatedBox from "./ui/AnimatedBox"

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
      id: 1,
      icon: <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M13.0144 9.53405L17.3264 2.14205C19.1949 2.63485 20.8532 3.53832 22.3012 4.85245C23.7492 6.16659 24.8013 7.72712 25.4576 9.53405H13.0144ZM9.5956 12.6141L5.376 5.22205C6.4848 4.13379 7.77347 3.27139 9.24201 2.63485C10.7106 1.99832 12.2965 1.68005 14 1.68005C14.2669 1.68005 14.5749 1.69566 14.924 1.72687C15.2731 1.75808 15.5913 1.79381 15.8788 1.83405L9.5956 12.6141ZM2.08041 17.0801C1.95721 16.5873 1.85947 16.0842 1.78719 15.5709C1.71491 15.0575 1.67919 14.5339 1.68001 14.0001C1.68001 12.5422 1.91614 11.1665 2.38841 9.87285C2.86067 8.57925 3.528 7.39859 4.3904 6.33085L10.612 17.0801H2.08041ZM10.7044 25.8581C8.83587 25.3653 7.17267 24.4618 5.7148 23.1477C4.25694 21.8335 3.19947 20.273 2.54241 18.4661H14.9548L10.7044 25.8581ZM14 26.3201C13.692 26.3201 13.3787 26.2995 13.06 26.2585C12.7413 26.2174 12.4386 26.1763 12.152 26.1353L18.4044 15.3861L22.624 22.7781C21.5152 23.8663 20.2269 24.7287 18.7592 25.3653C17.2915 26.0018 15.7051 26.3201 14 26.3201ZM23.6096 21.6693L17.388 10.9201H25.9196C26.0428 11.4129 26.1405 11.9159 26.2128 12.4293C26.2851 12.9426 26.3208 13.4662 26.32 14.0001C26.32 15.4374 26.0687 16.8131 25.566 18.1273C25.0633 19.4414 24.4112 20.6221 23.6096 21.6693Z" fill="#FF6B2C" />
      </svg>,
      title: "Built for Photographers",
      description: "A purpose-built app for landscape, seascape, and astrophotographers. Go from guesswork to enriching apps - the moments that matter most for creating magic in one place."
    },
    {
      id: 2,
      icon: <svg width="26" height="19" viewBox="0 0 26 19" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M14.0964 4.88584C17.9612 4.88584 20.1537 7.30786 20.4727 10.2335H20.5703C23.0574 10.2335 25.0737 12.1375 25.0737 14.4867C25.0737 16.836 23.0574 18.74 20.5697 18.74H7.62315C5.13606 18.74 3.11979 16.836 3.11979 14.4867C3.11979 12.1375 5.13606 10.2335 7.62315 10.2335H7.72073C8.04153 7.28823 10.2316 4.88584 14.0964 4.88584ZM6.27714 0.261236C7.24685 0.310901 8.18851 0.575395 9.03746 1.0397C10.2756 1.7134 11.228 2.77349 11.7319 4.03865C9.28263 4.69931 7.53777 6.39657 6.8364 8.68693L6.78029 8.87866L6.71016 9.15355L6.45828 9.19801C5.0823 9.47325 3.86227 10.2202 3.03258 11.2955L2.84474 11.1962C2.04744 10.7622 1.36287 10.1647 0.841281 9.44749C0.761822 9.33807 0.709955 9.21284 0.689679 9.08144C0.669403 8.95004 0.681258 8.81599 0.72433 8.68961C0.767403 8.56324 0.840544 8.44792 0.938115 8.35253C1.03569 8.25715 1.15508 8.18425 1.2871 8.13946C3.29056 7.46032 4.37005 6.69572 4.98725 5.57999C5.66116 4.36147 5.78619 3.06903 5.33854 1.33307C5.30466 1.20163 5.30372 1.0645 5.33581 0.932656C5.36789 0.800809 5.4321 0.677897 5.52331 0.573744C5.61451 0.469591 5.73019 0.387086 5.86108 0.332823C5.99197 0.27856 6.13446 0.254045 6.27714 0.261236Z" fill="#FF6B2C" />
      </svg>
      ,
      title: "Quality-First Forecasts",
      description: "Know exactly what and where to shoot. Get color-quality forecasts for sunrise and sunset, plus moon phases, Milky Way core position and hourly cloud cover for astro."
    },
    {
      id: 3,
      icon: <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M23.9752 0.687207L24.1037 0.679932L24.2613 0.689632L24.3705 0.709034L24.5196 0.751475L24.6494 0.807254L24.7706 0.876373L24.8798 0.957617L24.9792 1.04856L25.0422 1.1201L25.1417 1.26077L25.2047 1.37718C25.2613 1.49844 25.2977 1.62616 25.3139 1.76036L25.3199 1.88889C25.3199 1.98024 25.3102 2.06917 25.2908 2.15566L25.2484 2.30481L17.3277 24.225C17.1775 24.5518 16.9367 24.8287 16.6339 25.0228C16.331 25.2169 15.9789 25.32 15.6191 25.3199C15.2952 25.3206 14.9767 25.2376 14.6943 25.0789C14.412 24.9201 14.1754 24.6912 14.0076 24.4141L13.9288 24.2601L9.86415 16.1333L1.77612 12.0881C1.47685 11.9512 1.21877 11.7381 1.02767 11.4702C0.836578 11.2023 0.719176 10.8889 0.687207 10.5614L0.679932 10.3807C0.679932 9.70166 1.04492 9.08081 1.69973 8.71946L1.86949 8.63458L23.7169 0.745412L23.8454 0.709034L23.9752 0.687207Z" fill="#FF6B2C" />
      </svg>
      ,
      title: "Bookmark The Locations",
      description: "Premium users can save their favourite sunrise, sunset, and astro locations, easily comparing real-time conditions to pick the perfect spot every time."
    },
    {
      id: 4,
      icon: <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M25.0016 1.00565C24.7916 0.797098 24.5076 0.680054 24.2117 0.680054C23.9157 0.680054 23.6318 0.797098 23.4218 1.00565L1.01435 23.4141C0.805479 23.6242 0.688232 23.9083 0.688232 24.2045C0.688232 24.5008 0.805479 24.7849 1.01435 24.995C1.2243 25.2032 1.50803 25.3201 1.80373 25.3201C2.09943 25.3201 2.38316 25.2032 2.59311 24.995L6.48185 21.0727C7.12229 21.4498 7.79451 21.7561 8.49851 21.9915L17.3509 13.1402C17.5102 12.9918 17.7209 12.911 17.9386 12.915C18.1563 12.9189 18.3639 13.0072 18.5178 13.1612C18.6717 13.3152 18.7598 13.5229 18.7635 13.7406C18.7673 13.9583 18.6863 14.169 18.5378 14.3282L10.4816 22.4629C10.9468 22.5257 11.4137 22.5554 11.8823 22.5519C20.0767 22.5415 25.187 13.665 21.0804 6.57372L21.0479 6.5182L24.9691 2.58546C25.1822 2.37992 25.3053 2.09844 25.3116 1.80247C25.3179 1.50649 25.2057 1.22004 25.0016 1.00565ZM4.81091 8.84914C4.88837 8.76872 4.98108 8.70455 5.08363 8.66037C5.18618 8.61619 5.29651 8.5929 5.40817 8.59185C5.51982 8.59081 5.63057 8.61203 5.73393 8.65427C5.83729 8.69652 5.93119 8.75895 6.01014 8.8379C6.0891 8.91686 6.15152 9.01076 6.19377 9.11412C6.23602 9.21748 6.25724 9.32822 6.25619 9.43988C6.25514 9.55153 6.23185 9.66186 6.18768 9.76441C6.1435 9.86696 6.07932 9.95967 5.9989 10.0371L1.51721 14.5188C1.86292 15.8095 2.45273 17.0226 3.2531 18.0933L18.1009 3.2465C11.435 -1.50548 2.12482 2.73841 1.34121 10.8857C1.30978 11.2147 1.29372 11.5443 1.29302 11.8747V12.4006L4.81091 8.84914Z" fill="#FF6B2C" />
      </svg>
      ,
      title: "Deep Astro Insights",
      description: "Pinpoint the Milky Way core, moon heights, twilight phases, and live aurora alerts. Everything you need for astrophotography in one place."
    },
    {
      id: 5,
      icon: <svg width="26" height="20" viewBox="0 0 26 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0.550781 4.44665C0.550781 3.39462 0.96066 2.38568 1.69025 1.64179C2.41984 0.897896 3.40937 0.47998 4.44117 0.47998H21.5589C22.5907 0.47998 23.5802 0.897896 24.3098 1.64179C25.0394 2.38568 25.4492 3.39462 25.4492 4.44665V15.5533C25.4492 16.6053 25.0394 17.6143 24.3098 18.3582C23.5802 19.1021 22.5907 19.52 21.5589 19.52H4.44117C3.40937 19.52 2.41984 19.1021 1.69025 18.3582C0.96066 17.6143 0.550781 16.6053 0.550781 15.5533V4.44665ZM12.2219 3.65331H4.44117C4.23481 3.65331 4.0369 3.7369 3.89098 3.88568C3.74506 4.03445 3.66309 4.23624 3.66309 4.44665C3.66309 4.65705 3.74506 4.85884 3.89098 5.00762C4.0369 5.1564 4.23481 5.23998 4.44117 5.23998H12.2219C12.4283 5.23998 12.6262 5.1564 12.7721 5.00762C12.918 4.85884 13 4.65705 13 4.44665C13 4.23624 12.918 4.03445 12.7721 3.88568C12.6262 3.7369 12.4283 3.65331 12.2219 3.65331ZM16.8904 6.82665H4.44117C4.23481 6.82665 4.0369 6.91023 3.89098 7.05901C3.74506 7.20779 3.66309 7.40957 3.66309 7.61998C3.66309 7.83039 3.74506 8.03217 3.89098 8.18095C4.0369 8.32973 4.23481 8.41331 4.44117 8.41331H16.8904C17.0968 8.41331 17.2947 8.32973 17.4406 8.18095C17.5865 8.03217 17.6685 7.83039 17.6685 7.61998C17.6685 7.40957 17.5865 7.20779 17.4406 7.05901C17.2947 6.91023 17.0968 6.82665 16.8904 6.82665ZM5.21924 11.5866C4.80653 11.5866 4.41071 11.7538 4.11888 12.0514C3.82704 12.3489 3.66309 12.7525 3.66309 13.1733V14.76C3.66309 15.1808 3.82704 15.5844 4.11888 15.8819C4.41071 16.1795 4.80653 16.3466 5.21924 16.3466H11.4439C11.8566 16.3466 12.2524 16.1795 12.5442 15.8819C12.8361 15.5844 13 15.1808 13 14.76V13.1733C13 12.7525 12.8361 12.3489 12.5442 12.0514C12.2524 11.7538 11.8566 11.5866 11.4439 11.5866H5.21924Z" fill="#FF6B2C" />
      </svg>
      ,
      title: "Fast, Mobile-First UI",
      description: "Designed to be quick, clean and intuitive - so when you're out shooting, everything you need is right at your fingertips exactly when you need it."
    },
    {
      id: 6,
      icon: <svg width="20" height="24" viewBox="0 0 20 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M9.99869 4.90161C14.6651 4.90161 18.4479 8.68441 18.4479 13.3508V19.5222C18.4479 19.7469 18.3586 19.9625 18.1996 20.1215C18.0407 20.2804 17.8251 20.3697 17.6003 20.3697H2.39707C2.17228 20.3697 1.9567 20.2804 1.79775 20.1215C1.6388 19.9625 1.5495 19.7469 1.5495 19.5222V13.3508C1.5495 8.68441 5.3323 4.90161 9.99869 4.90161ZM9.25707 0.23999H10.7403C10.7965 0.23999 10.8504 0.262315 10.8901 0.302052C10.9299 0.341789 10.9522 0.395685 10.9522 0.451882V2.99458C10.9522 3.05078 10.9299 3.10468 10.8901 3.14441C10.8504 3.18415 10.7965 3.20648 10.7403 3.20648H9.25707C9.20087 3.20648 9.14698 3.18415 9.10724 3.14441C9.0675 3.10468 9.04518 3.05078 9.04518 2.99458V0.451882C9.04518 0.395685 9.0675 0.341789 9.10724 0.302052C9.14698 0.262315 9.20087 0.23999 9.25707 0.23999ZM1.13234 3.51531C1.15202 3.49561 1.17539 3.47998 1.20111 3.46932C1.22684 3.45865 1.25441 3.45316 1.28225 3.45316C1.3101 3.45316 1.33767 3.45865 1.3634 3.46932C1.38912 3.47998 1.41249 3.49561 1.43217 3.51531L3.23007 5.31321C3.26978 5.35295 3.29208 5.40682 3.29208 5.46299C3.29208 5.51917 3.26978 5.57304 3.23007 5.61277L2.18121 6.66164C2.14147 6.70135 2.0876 6.72365 2.03142 6.72365C1.97525 6.72365 1.92138 6.70135 1.88164 6.66164L0.0837411 4.86374C0.0440337 4.824 0.0217285 4.77013 0.0217285 4.71395C0.0217285 4.65778 0.0440337 4.60391 0.0837411 4.56417L1.13261 3.51531H1.13234ZM18.8677 3.51531L19.9166 4.56417C19.9562 4.6039 19.9784 4.65771 19.9784 4.71382C19.9784 4.76993 19.9562 4.82375 19.9166 4.86347L18.1187 6.6619C18.099 6.6816 18.0756 6.69723 18.0499 6.7079C18.0242 6.71856 17.9966 6.72405 17.9687 6.72405C17.9409 6.72405 17.9133 6.71856 17.8876 6.7079C17.8619 6.69723 17.8385 6.6816 17.8188 6.6619L16.77 5.61304C16.7503 5.59336 16.7346 5.56999 16.724 5.54427C16.7133 5.51854 16.7078 5.49097 16.7078 5.46313C16.7078 5.43528 16.7133 5.40771 16.724 5.38198C16.7346 5.35626 16.7503 5.33289 16.77 5.31321L18.5681 3.51531C18.6079 3.4756 18.6617 3.4533 18.7179 3.4533C18.7741 3.4533 18.828 3.4756 18.8677 3.51531ZM1.52302 22.0649H18.4744C18.6992 22.0649 18.9147 22.1542 19.0737 22.3131C19.2326 22.472 19.3219 22.6876 19.3219 22.9124V23.5481C19.3219 23.6043 19.2996 23.6582 19.2599 23.6979C19.2201 23.7377 19.1662 23.76 19.11 23.76H0.887341C0.831144 23.76 0.777248 23.7377 0.737511 23.6979C0.697773 23.6582 0.675449 23.6043 0.675449 23.5481V22.9124C0.675449 22.6876 0.764746 22.472 0.923696 22.3131C1.08265 22.1542 1.29823 22.0649 1.52302 22.0649ZM5.44302 13.6686V20.3697H7.13815V13.6686H5.44302Z" fill="#FF6B2C" />
      </svg>
      ,
      title: "Alerts That Matters",
      description: "Premium users get notified when conditions align for the perfect shot. Set personalised thresholds for sunrise, sunset, clear skies, and aurora with clutter-free alerts."
    }
  ];



  return (
    <section id="features" className="bg-gradient-to-r from-[#5A00FF] to-[#7F39FF] text-white py-20 md:py-32 px-4">
      <div className="max-w-6xl mx-auto flex flex-col justify-center items-center">
        {/* Header */}
        <AnimatedBox className="md:text-center mb-24 md:mb-32">
          <h2 className="text-3xl md:text-4xl leading-tight mb-6">
            Every <span className="text-[#FF6B2C]">Great Shot</span> Starts Here
          </h2>
          <p className=" text-[#CFCFCF] text-lg max-w-4xl mx-auto">
            Skip the hills and trial and feel focused app designed to back every shoot with real insight.
          </p>
        </AnimatedBox>

        {/* Desktop Features Grid */}
        <AnimatedBox className="hidden md:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {features.map((feature, index) => (
            <div key={index} className="cursor-target bg-gradient-to-b from-[#0D0D0D] to-[#111111] border border-[#8A4AFF] rounded-2xl p-6 max-w-sm shadow-lg flex flex-col items-start">
              <div className="w-10 h-10 flex items-center justify-center mb-4">
                {feature.icon}
              </div>
              <h3 className="text-white text-2xl font-semibold leading-snug">
                {feature.title}
              </h3>
              <p className="text-[#CFCFCF] mt-4 leading-relaxed text-[15px]">
                {feature.description}
              </p>
            </div>
          ))}
        </AnimatedBox>

        {/* Mobile Horizontal Scroll */}
        <div className="block md:hidden w-11/12">
          <div className="flex overflow-x-auto pb-6 -mx-4 px-4 snap-x snap-mandatory hide-scrollbar">
            {features.map((feature, index) => (
              <div key={index} className="flex-shrink-0 w-[75vw] max-w-sm mr-3 snap-start">
                <div className="bg-gradient-to-b from-[#0D0D0D] to-[#111111] border border-[#3A0CA3] rounded-2xl p-6 h-full shadow-lg flex flex-col items-start">
                  <div className="w-10 h-10 flex items-center justify-center mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-white text-2xl font-semibold leading-snug">
                    {feature.title}
                  </h3>
                  <p className="text-[#CFCFCF] mt-4 leading-relaxed text-[15px]">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .hide-scrollbar {
          -ms-overflow-style: none;  /* IE and Edge */
          scrollbar-width: none;  /* Firefox */
        }
        .hide-scrollbar::-webkit-scrollbar {
          display: none;  /* Chrome, Safari and Opera */
        }
      `}</style>
    </section>
  );


};

export default Features;
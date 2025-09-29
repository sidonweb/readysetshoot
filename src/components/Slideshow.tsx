// import { useState, useEffect } from 'react';
// import { ChevronLeft, ChevronRight } from 'lucide-react';
// import CircularGallery from './ui/CircularGallery';

import React, { useState, useEffect } from "react";
import AnimatedBox from "./ui/AnimatedBox";

const images = [
  { src: "/gallery/20250215 Carinae v2.jpg", alt: "Carinae Nebula", location: "Deep Space" },
  { src: "/gallery/Armidale NSW AU.jpg", alt: "Armidale", location: "NSW, Australia" },
  { src: "/gallery/Gardens By The Bay SG.jpg", alt: "Gardens By The Bay", location: "Singapore" },
  { src: "/gallery/Mt Cook NZ.jpg", alt: "Mt Cook", location: "New Zealand" },
  { src: "/gallery/Avalon Beach NSW AU.jpg", alt: "Avalon Beach", location: "NSW, Australia" },
  { src: "/gallery/Bronte Beach NSW AU.jpg", alt: "Bronte Beach", location: "NSW, Australia" },
  { src: "/gallery/Cathedral Rocks NSW AU.jpg", alt: "Cathedral Rocks", location: "NSW, Australia" },
  { src: "/gallery/Comet C_2024 G3.jpg", alt: "Comet C/2024 G3", location: "Night Sky" },
  { src: "/gallery/Gardens By The Bay SG.jpg", alt: "Gardens By The Bay", location: "Singapore" },
  { src: "/gallery/IC4604 - Rho.jpg", alt: "IC4604 - Rho", location: "Deep Space" },
  { src: "/gallery/Maroubra Mahon Pool NSW AU.jpg", alt: "Maroubra Mahon Pool", location: "NSW, Australia" },
  { src: "/gallery/Milford Sound NZ.jpg", alt: "Milford Sound", location: "New Zealand" },
  { src: "/gallery/Mitchell Ridge Lookout NSW AU.jpg", alt: "Mitchell Ridge Lookout", location: "NSW, Australia" },
  { src: "/gallery/Mona Vale Ocean Pool NSW AU.jpg", alt: "Mona Vale Ocean Pool", location: "NSW, Australia" },
  { src: "/gallery/Mt Cook NZ.jpg", alt: "Mt Cook", location: "New Zealand" },
  { src: "/gallery/Narrebeen Ocean Pool NSW AU.jpg", alt: "Narrebeen Ocean Pool", location: "NSW, Australia" },
  { src: "/gallery/NGC6188 - The Dragons of Ara.jpg", alt: "NGC6188 - The Dragons of Ara", location: "Deep Space" },
  { src: "/gallery/North Curl Curl NSW AU.jpg", alt: "North Curl Curl", location: "NSW, Australia" },
  { src: "/gallery/South Island NZ.jpg", alt: "South Island", location: "New Zealand" },
  { src: "/gallery/Wanaka Tree NZ.jpg", alt: "Wanaka Tree", location: "New Zealand" }
];


const Slideshow: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [displayedImages, setDisplayedImages] = useState(images.slice(0, 5));
  const [isMobile, setIsMobile] = useState(false);

  // Check if device is mobile
  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkIsMobile();
    window.addEventListener('resize', checkIsMobile);
    
    return () => {
      window.removeEventListener('resize', checkIsMobile);
    };
  }, []);

  // Update displayed images based on screen size
  useEffect(() => {
    if (isMobile) {
      setDisplayedImages(images.slice(0, 3));
    } else {
      setDisplayedImages(images.slice(0, 5));
    }
  }, [isMobile]);

  // Prevent background scrolling when modal is open
  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isModalOpen]);

  const openModal = (index: number | null = null) => {
    if (index !== null) {
      setActiveIndex(index);
    }
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setActiveIndex(null);
  };

  const navigateImage = (direction: 'prev' | 'next') => {
    if (activeIndex === null) return;
    
    if (direction === 'next') {
      setActiveIndex((activeIndex + 1) % images.length);
    } else {
      setActiveIndex((activeIndex - 1 + images.length) % images.length);
    }
  };

  return (
    <div className="max-w-7xl mx-auto">
      {/* Grid with limited number of images + gallery card */}
      <AnimatedBox className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
        {/* Display limited number of images */}
        {displayedImages.map((img, idx) => (
          <div
            key={idx}
            onClick={() => openModal(idx)}
            className="bg-gradient-to-b from-[#000000] to-[#111111] rounded-2xl border-[2px] border-[#222222] text-gray-800 hover:shadow-xl transition-all duration-200 p-3 flex flex-col items-center cursor-target"
          >
            <div className="overflow-hidden w-full">
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-64 object-cover rounded-2xl border border-[#222222] "
              />
              <div className="text-start pt-4">
                <p className="text-[#F5F5F5] text-lg leading-relaxed unbounded">
                  {img.alt}
                </p>
                <p className="text-[#F5F5F5] text-sm leading-relaxed font-light">
                  {img.location}
                </p>
              </div>
            </div>
          </div>
        ))}
        
        {/* Gallery card */}
        <div
          onClick={() => openModal(0)}
          className="bg-gradient-to-b from-[#000000] to-[#111111] rounded-2xl border-[2px] border-[#222222] text-gray-800 hover:shadow-xl transition-all duration-200 p-3 flex flex-col items-center justify-center cursor-target min-h-[300px]"
        >
          <div className="flex flex-col justify-center items-center rounded-2xl  border-2 border-dashed border-[#222222] w-full h-full">
            <svg width="121" height="121" viewBox="0 0 121 121" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M110.25 66.94C110.25 85.79 110.25 95.22 104.39 101.08C98.53 106.94 89.105 106.94 70.25 106.94H50.25C31.395 106.94 21.965 106.94 16.11 101.08C10.255 95.22 10.25 85.795 10.25 66.94C10.25 48.085 10.25 38.65 16.11 32.795C21.97 26.94 31.395 26.94 50.25 26.94H70.25C89.105 26.94 98.535 26.94 104.39 32.795C107.71 36.115 109.15 40.575 109.77 47.25" stroke="#F5F5F5" stroke-width="3" stroke-linecap="round"/>
              <path d="M20.1899 29.75C20.7499 25.095 21.9249 21.88 24.3749 19.435C29.0749 14.75 36.6449 14.75 51.7849 14.75H67.8399C82.9799 14.75 90.5449 14.75 95.2499 19.435C97.6999 21.88 98.8749 25.095 99.4349 29.75" stroke="#F5F5F5" stroke-width="3"/>
              <path d="M87.75 56.94C91.8921 56.94 95.25 53.5821 95.25 49.44C95.25 45.2979 91.8921 41.94 87.75 41.94C83.6079 41.94 80.25 45.2979 80.25 49.44C80.25 53.5821 83.6079 56.94 87.75 56.94Z" stroke="#F5F5F5" stroke-width="3"/>
              <path d="M10.25 69.44L19.01 61.775C21.2057 59.8553 24.0487 58.8417 26.9636 58.9391C29.8785 59.0366 32.6475 60.238 34.71 62.3L56.16 83.75C57.8252 85.4134 60.0237 86.4362 62.3687 86.6383C64.7136 86.8405 67.0548 86.209 68.98 84.855L70.475 83.805C73.2535 81.8546 76.6115 80.9044 80 81.1096C83.3885 81.3149 86.6072 82.6635 89.13 84.935L105.25 99.435" stroke="#F5F5F5" stroke-width="3" stroke-linecap="round"/>
            </svg>

            <p className="text-[#F5F5F5] text-xl mt-4 unbounded">
              View All Photos
            </p>
          </div>
        </div>
      </AnimatedBox>

      {/* Modal for detailed view */}
      {isModalOpen && (
        <div className="fixed inset-0 backdrop-blur-xs bg-black/30 flex items-center justify-center z-50 p-4 md:p-8" onClick={closeModal}>
        <div className="relative w-full max-w-4xl h-[80vh] md:h-[70vh]" onClick={(e) => e.stopPropagation()}>
          {/* Close button */}
      <button 
        className="cursor-target absolute top-4 md:top-6 right-4 md:right-6 text-white text-3xl backdrop-blur-xs bg-black/20 rounded-full w-7 h-7 md:w-10 md:h-10 flex items-center justify-center hover:bg-opacity-70 transition-colors z-10"
        onClick={closeModal}
      >
      &times;
    </button>
    
    {/* Navigation buttons */}
    <button 
      className="rounded-full cursor-target absolute left-4 md:left-6 top-1/2 transform -translate-y-1/2 text-white text-2xl backdrop-blur-xs bg-black/20 w-7 h-7 md:w-10 md:h-10 flex items-center justify-center hover:bg-opacity-70 transition-colors z-10"
      onClick={() => navigateImage('prev')}
    >
      <svg width="13" height="11" viewBox="0 0 13 11" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M1.93051 4.95007H12.4348C12.5847 4.95007 12.7285 5.00801 12.8345 5.11114C12.9405 5.21427 13 5.35415 13 5.5C13 5.64585 12.9405 5.78573 12.8345 5.88886C12.7285 5.99199 12.5847 6.04993 12.4348 6.04993H1.93051L6.05289 10.06C6.15901 10.1633 6.21863 10.3033 6.21863 10.4494C6.21863 10.5954 6.15901 10.7355 6.05289 10.8387C5.94676 10.942 5.80283 11 5.65275 11C5.50266 11 5.35873 10.942 5.2526 10.8387L0.166041 5.88935C0.113409 5.83827 0.0716505 5.77758 0.0431585 5.71077C0.0146666 5.64396 9.53674e-07 5.57233 9.53674e-07 5.5C9.53674e-07 5.42767 0.0146666 5.35604 0.0431585 5.28923C0.0716505 5.22242 0.113409 5.16173 0.166041 5.11065L5.2526 0.161274C5.35873 0.058012 5.50266 0 5.65275 0C5.80283 0 5.94676 0.058012 6.05289 0.161274C6.15901 0.264537 6.21863 0.40459 6.21863 0.550625C6.21863 0.69666 6.15901 0.836714 6.05289 0.939976L1.93051 4.95007Z" fill="white"/>
      </svg>
    </button>
    <button 
      className="rounded-full cursor-target absolute right-4 md:right-6 top-1/2 transform -translate-y-1/2 text-white text-2xl backdrop-blur-xs bg-black/20 w-7 h-7 md:w-10 md:h-10 flex items-center justify-center hover:bg-opacity-70 transition-colors z-10"
      onClick={() => navigateImage('next')}
    >
      <svg width="13" height="11" viewBox="0 0 13 11" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M11.0695 4.95007H0.565174C0.41528 4.95007 0.271526 5.00801 0.165536 5.11114C0.059545 5.21427 0 5.35415 0 5.5C0 5.64585 0.059545 5.78573 0.165536 5.88886C0.271526 5.99199 0.41528 6.04993 0.565174 6.04993H11.0695L6.94711 10.06C6.84099 10.1633 6.78137 10.3033 6.78137 10.4494C6.78137 10.5954 6.84099 10.7355 6.94711 10.8387C7.05324 10.942 7.19717 11 7.34726 11C7.49734 11 7.64127 10.942 7.7474 10.8387L12.834 5.88935C12.8866 5.83827 12.9284 5.77758 12.9568 5.71077C12.9853 5.64396 13 5.57233 13 5.5C13 5.42767 12.9853 5.35604 12.9568 5.28923C12.9284 5.22242 12.8866 5.16173 12.834 5.11065L7.7474 0.161274C7.64127 0.058012 7.49734 0 7.34726 0C7.19717 0 7.05324 0.058012 6.94711 0.161274C6.84099 0.264537 6.78137 0.40459 6.78137 0.550625C6.78137 0.69666 6.84099 0.836714 6.94711 0.939976L11.0695 4.95007Z" fill="white"/>
      </svg>
    </button>

    <p className="absolute left-4 md:left-6 top-6 md:top-8 transform -translate-y-1/2  text-[#F5F5F5] text-xs leading-relaxed font-light z-10">
          {"#"}{(activeIndex !== null ? activeIndex : 0) + 1} of {images.length}
        </p>
    
    {/* Image as background with text overlay */}
    <div className="relative w-full h-full rounded-2xl overflow-hidden bg-black flex items-center justify-center">
  <div className="relative w-full h-full">
    <img
      src={activeIndex !== null ? images[activeIndex].src : images[0].src}
      alt={activeIndex !== null ? images[activeIndex].alt : images[0].alt}
      className="absolute inset-0 w-full h-full object-cover object-center"
    />
  </div>

  {/* Bottom vignette */}
  <div className="absolute top-0 left-0 right-0 h-18 bg-gradient-to-b from-black/30 to-transparent z-[1]" />
  <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/30 to-transparent z-[1]" />

  {/* Text overlay */}
  <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6 text-white z-[2]">
    <p className="text-[#F5F5F5] text-lg md:text-2xl leading-relaxed unbounded">
      {activeIndex !== null ? images[activeIndex].alt : images[0].alt}
    </p>
    <p className="text-[#F5F5F5] text-xs md:text-sm leading-relaxed font-light">
      {activeIndex !== null ? images[activeIndex].location : images[0].location}
    </p>
  </div>
</div>

  </div>
</div>
      )}
    </div>
  );
};

export default Slideshow;





// Backup



  // Sample high-quality photography images - replace with your actual images
  // const images = [
  //   {
  //     url: '/Carousel1.png',
  //     title: 'Misty Beach',
  //   },
  //   {
  //     url: '/Carousel2.png',
  //     title: 'Waves hitting rocky beach',
  //   },
  //   {
  //     url: '/Carousel3.png',
  //     title: 'Comet over the horizon',
  //   },
  //   {
  //     url: '/Carousel4.png',
  //     title: 'Nebula in the night sky',
  //   }
  // ];

  // const [currentIndex, setCurrentIndex] = useState(0);
  // // const [isPlaying, setIsPlaying] = useState(true);
  // const [showControls, setShowControls] = useState(true);
  // const [imageLoaded, setImageLoaded] = useState(false);

  // // Auto-play functionality
  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setCurrentIndex((prev) => (prev + 1) % images.length);
  //   }, 5000); // Change slide every 5 seconds

  //   return () => clearInterval(interval);
  // }, [images.length]);

  // // Hide controls after 3 seconds of inactivity
  // useEffect(() => {
  //   const timeout = setTimeout(() => {
  //     setShowControls(false);
  //   }, 3000);

  //   return () => clearTimeout(timeout);
  // }, [showControls]);

  // const nextSlide = () => {
  //   setCurrentIndex((prev) => (prev + 1) % images.length);
  //   setImageLoaded(false);
  // };

  // const prevSlide = () => {
  //   setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  //   setImageLoaded(false);
  // };

  // const handleMouseMove = () => {
  //   setShowControls(true);
  // };

  // const handleImageLoad = () => {
  //   setImageLoaded(true);
  // };





// <div style={{ height: '700px', position: 'relative' }}>
    //   <CircularGallery bend={3} textColor="#ffffff" borderRadius={0.05} scrollEase={0.02} />
    // </div>
    // <div 
    //   className="relative w-full h-screen bg-black overflow-hidden"
    //   onMouseMove={handleMouseMove}
    // >
    //   {/* Main Image */}
    //   <div className="relative w-full h-full">
    //     <img
    //       src={images[currentIndex].url}
    //       alt={images[currentIndex].title}
    //       className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${
    //         imageLoaded ? 'opacity-100' : 'opacity-0'
    //       }`}
    //       onLoad={handleImageLoad}
    //     />

    //     {/* Loading overlay */}
    //     {!imageLoaded && (
    //       <div className="absolute inset-0 bg-black flex items-center justify-center">
    //         <div className="w-8 h-8 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
    //       </div>
    //     )}

    //     {/* Gradient overlays for better text readability */}
    //     <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/20"></div>
    //   </div>

    //   {/* Navigation Controls */}
    //   <div className={`absolute inset-0 transition-opacity duration-300 ${
    //     showControls ? 'opacity-100' : 'opacity-0'
    //   }`}>

    //     {/* Previous Button */}
    //     <button
    //       onClick={prevSlide}
    //       className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/10 hover:bg-black/30 text-white p-3 rounded-full transition-all duration-200 backdrop-blur-sm cursor-pointer z-10"
    //     >
    //       <ChevronLeft className="w-3 h-3" />
    //     </button>

    //     {/* Next Button */}
    //     <button
    //       onClick={nextSlide}
    //       className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/10 hover:bg-black/30 text-white p-3 rounded-full transition-all duration-200 backdrop-blur-sm cursor-pointer z-10"
    //     >
    //       <ChevronRight className="w-3 h-3" />
    //     </button>



    //     {/* Bottom Controls */}
    //     <div className="absolute bottom-4 left-4 right-4 z-10">
    //       {/* Slide Counter */}
    //       <div className="text-center mt-3">
    //         <span className="text-white/80 text-sm">
    //           {currentIndex + 1} / {images.length}
    //         </span>
    //       </div>
    //     </div>
    //   </div>
    // </div>
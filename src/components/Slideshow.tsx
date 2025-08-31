// import { useState, useEffect } from 'react';
// import { ChevronLeft, ChevronRight } from 'lucide-react';
// import CircularGallery from './ui/CircularGallery';

import { ChevronLeft, ChevronRight } from "lucide-react";
import React, { useState, useEffect } from "react";

const images = [
  { src: "https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(70).webp", alt: "Mountain & Clouds", location: "Dolomites, Italy" },
  { src: "https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(72).webp", alt: "Milky Way", location: "Dolomites, Italy" },
  { src: "https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(73).webp", alt: "Aesthetic Caption", location: "Dolomites, Italy" },
  { src: "https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(74).webp", alt: "Nature 74", location: "Dolomites, Italy" },
  { src: "https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(75).webp", alt: "Nature 75", location: "Dolomites, Italy" },
  { src: "https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(76).webp", alt: "Nature 76", location: "Dolomites, Italy" },
  { src: "https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(77).webp", alt: "Nature 77", location: "Dolomites, Italy" },
  { src: "https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(78).webp", alt: "Nature 78", location: "Dolomites, Italy" },
  { src: "https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(79).webp", alt: "Nature 79", location: "Dolomites, Italy" },
  { src: "https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(80).webp", alt: "Nature 80", location: "Dolomites, Italy" },
  { src: "https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(81).webp", alt: "Nature 81", location: "Dolomites, Italy" },
  { src: "https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(82).webp", alt: "Nature 82", location: "Dolomites, Italy" },
  { src: "https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(71).webp", alt: "Nature 71", location: "Dolomites, Italy" },
  { src: "https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(83).webp", alt: "Nature 83", location: "Dolomites, Italy" },
  { src: "https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(84).webp", alt: "Nature 84", location: "Dolomites, Italy" },
  { src: "https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(85).webp", alt: "Nature 85", location: "Dolomites, Italy" },
  { src: "https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(86).webp", alt: "Nature 86", location: "Dolomites, Italy" },
  { src: "https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(87).webp", alt: "Nature 87", location: "Dolomites, Italy" }
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
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
        {/* Display limited number of images */}
        {displayedImages.map((img, idx) => (
          <div
            key={idx}
            onClick={() => openModal(idx)}
            className="bg-white rounded-lg shadow-lg text-gray-800 hover:shadow-xl transition-all duration-200 p-3 flex flex-col items-center cursor-target"
          >
            <div className="overflow-hidden w-full">
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-64 object-cover "
              />
              <div className="text-start py-4">
                <p className="text-[#FF6B2C] text-base leading-relaxed">
                  {img.alt}
                </p>
                <p className="text-[#7E7E7E] text-base leading-relaxed">
                  {img.location}
                </p>
              </div>
            </div>
          </div>
        ))}
        
        {/* Gallery card */}
        <div
          onClick={() => openModal(0)}
          className="bg-white rounded-lg shadow-lg text-gray-800 hover:shadow-xl transition-all duration-200 p-3 flex flex-col items-center justify-center cursor-target min-h-[300px]"
        >
          <div className="flex flex-col justify-center items-center  border-2 border-dashed border-gray-300 w-full h-full">
            <svg className="w-16 h-16 mx-auto text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <p className="text-[#FF6B2C] text-xl font-semibold mt-4">
              View All Photos
            </p>
            <p className="text-[#7E7E7E] text-base mt-2">
              {images.length} images in gallery
            </p>
          </div>
        </div>
      </div>

      {/* Modal for detailed view */}
      {isModalOpen && (
        <div className="fixed inset-0 backdrop-blur-xs bg-black/30 flex items-center justify-center z-50 p-4" onClick={closeModal}>
          <div className="relative max-w-4xl w-full max-h-4xl" onClick={(e) => e.stopPropagation()}>
            {/* Close button */}
            <button 
              className="cursor-target absolute top-4 right-4 text-white text-3xl bg-[#FF6B2C] w-7 h-7 md:w-10 md:h-10 flex items-center justify-center hover:bg-opacity-70 transition-colors z-10"
              onClick={closeModal}
            >
              &times;
            </button>
            
            {/* Navigation buttons */}
            <button 
              className="cursor-target absolute right-12 md:right-16 bottom-1 md:bottom-5 transform -translate-y-1/2 text-white text-2xl bg-gradient-to-r from-[#5A00FF] to-[#7F39FF] w-7 h-7 md:w-10 md:h-10 flex items-center justify-center hover:bg-opacity-70 transition-colors z-10"
              onClick={() => navigateImage('prev')}
            >
              <ChevronLeft />
            </button>
            <button 
              className="cursor-target absolute right-4 bottom-1 md:bottom-5 transform -translate-y-1/2 text-white text-2xl bg-gradient-to-r from-[#5A00FF] to-[#7F39FF]  w-7 h-7 md:w-10 md:h-10 flex items-center justify-center hover:bg-opacity-70 transition-colors z-10"
              onClick={() => navigateImage('next')}
            >
              <ChevronRight />
            </button>
            
            {/* Image and info */}
            <div className="bg-white rounded-2xl overflow-hidden">
              <img
                src={activeIndex !== null ? images[activeIndex].src : images[0].src}
                alt={activeIndex !== null ? images[activeIndex].alt : images[0].alt}
                className="w-full h-full object-contain"
              />
              <div className="p-4">
                <p className="text-[#FF6B2C] text-xl font-semibold">
                  {activeIndex !== null ? images[activeIndex].alt : images[0].alt}
                </p>
                <p className="text-[#7E7E7E] text-lg">
                  {activeIndex !== null ? images[activeIndex].location : images[0].location}
                </p>
                <p className="text-gray-600 mt-2">
                  {(activeIndex !== null ? activeIndex : 0) + 1} of {images.length}
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
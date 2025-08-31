// import { useState, useEffect } from 'react';
// import { ChevronLeft, ChevronRight } from 'lucide-react';
import CircularGallery from './ui/CircularGallery';

const Slideshow = () => {
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

  return (
    <div style={{ height: '600px', position: 'relative' }}>
      <CircularGallery bend={3} textColor="#ffffff" borderRadius={0.05} scrollEase={0.02} />
    </div>
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
  );
};

export default Slideshow;
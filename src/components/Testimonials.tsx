import React, { useState, useRef, useEffect } from 'react';
import { Star } from 'lucide-react';

// Placeholder components - replace with your actual imports
const AnimateCount = ({ from, to, className }: any) => {
    const [count, setCount] = useState(from);
    
    useEffect(() => {
        const timer = setTimeout(() => setCount(to), 100);
        return () => clearTimeout(timer);
    }, [to]);
    
    return <span className={className}>{count}</span>;
};

const AnimatedBox = ({ children, className }: any) => {
    return <div className={className}>{children}</div>;
};

interface Testimonial {
    id: number;
    text: string;
    author: string;
    location: string;
    rating: number;
}

const testimonials: Testimonial[] = [
    { id: 1, text: "Honestly one of the cleanest and most useful apps I've tried. It's become part of my routine before every sunrise.", author: "Sienna", location: "Australia", rating: 5 },
    { id: 2, text: "I was skeptical at first but wow. The forecast nailed it and I finally got the shot I've been chasing for months.", author: "Liam", location: "New Zealand", rating: 5 },
    { id: 3, text: "Everything I care about shows up first. You can tell the design was really thought through.", author: "Armaan", location: "India", rating: 5 },
    { id: 4, text: "The way it combines tide and light is just smart. It saves me so much time checking different places.", author: "Mark", location: "Australia", rating: 5 },
    { id: 5, text: "Feels like it was built by someone who actually understands what landscape shooters need.", author: "Zoë", location: "USA", rating: 5 },
    { id: 6, text: "Honestly? It's saved me a few wasted trips. I wish I had this years ago.", author: "Skyler", location: "Switzerland", rating: 5 }
];

const cardWidth = 336; // 320px width + 16px margin
const totalWidth = testimonials.length * cardWidth;
const tripleTestimonials = [...testimonials, ...testimonials, ...testimonials];

// Helper component for star rendering
const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
        <Star
            key={index}
            className={`w-4 h-4 ${index < rating
                ? 'fill-[#FFB62E] text-[#FFB62E]'
                : 'fill-gray-600 text-gray-600'
                }`}
        />
    ));
};

// --- Testimonial Card Component (Reusable) ---
const TestimonialCard: React.FC<{ testimonial: Testimonial, onMouseEnter?: () => void, onMouseLeave?: () => void }> = ({ testimonial, onMouseEnter, onMouseLeave }) => (
    <div
        className="flex cursor-target flex-col justify-between w-72 sm:w-80 bg-[#0E0F11] rounded-2xl p-5 sm:p-6 mx-2 sm:m-4 border border-[#1B1D1F] transition-transform duration-300 hover:border-[#5A00FF] select-none touch-manipulation"
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        style={{
            WebkitTouchCallout: 'none',
            WebkitUserSelect: 'none', 
            userSelect: 'none'
        }}
    >
        <div className="flex items-center mb-4">
            {renderStars(testimonial.rating)}
        </div>
        <p className="text-[#F1F1F1] text-sm sm:text-base leading-relaxed mb-6 min-h-[4.5rem]">
            {testimonial.text}
        </p>
        <div className="text-right">
            <p className="text-gray-500 text-xs">
                — {testimonial.author}, {testimonial.location}
            </p>
        </div>
    </div>
);


// =======================================================
//                   DESKTOP CAROUSEL
// (Mouse/Hover based, uses onMouseDown/Up, onMouseEnter/Leave)
// =======================================================
const DesktopCarousel: React.FC = () => {
    const [isInteractionPaused, setIsInteractionPaused] = useState(false);
    const [isDragging, setIsDragging] = useState(false); 
    const [dragStartX, setDragStartX] = useState(0);
    const [scrollLeft, setScrollLeft] = useState(0);
    const [currentTranslateX, setCurrentTranslateX] = useState(0);
    // @ts-ignore
    const animationRef = useRef<number>();
    const startTimeRef = useRef<number>(0);
    const pausedAtRef = useRef<number>(0);

    // Animation loop
    useEffect(() => {
        if (!isInteractionPaused) {
            const animate = (timestamp: number) => {
                if (!startTimeRef.current) startTimeRef.current = timestamp - pausedAtRef.current;
                
                const elapsed = timestamp - startTimeRef.current;
                const progress = (elapsed / 45000) % 1; 
                const translateX = -progress * totalWidth;
                
                setCurrentTranslateX(translateX);
                animationRef.current = requestAnimationFrame(animate);
            };
            animationRef.current = requestAnimationFrame(animate);
        } else {
            if (animationRef.current) cancelAnimationFrame(animationRef.current);
        }
        return () => {
            if (animationRef.current) cancelAnimationFrame(animationRef.current);
        };
    }, [isInteractionPaused]);

    // Store paused position
    useEffect(() => {
        if (isInteractionPaused) {
            pausedAtRef.current = -currentTranslateX / totalWidth * 45000;
            startTimeRef.current = 0;
        }
    }, [isInteractionPaused, currentTranslateX]);

    // Handlers
    const handleMouseDown = (e: React.MouseEvent) => {
        setIsDragging(true);
        setIsInteractionPaused(true); 
        setDragStartX(e.pageX);
        setScrollLeft(currentTranslateX);
        e.preventDefault();
    };

    const handleMouseMove = (e: React.MouseEvent) => {
        if (!isDragging) return; 
        e.preventDefault();
        const x = e.pageX;
        const walk = x - dragStartX;
        let newTranslateX = scrollLeft + walk;
        
        if (newTranslateX > 0) newTranslateX = newTranslateX - totalWidth;
        else if (newTranslateX < -totalWidth * 2) newTranslateX = newTranslateX + totalWidth;
        
        setCurrentTranslateX(newTranslateX);
    };

    const handleMouseUp = () => {
        if (isDragging) {
            setIsDragging(false);
            setIsInteractionPaused(false); 
            
            let normalized = currentTranslateX % totalWidth;
            if (normalized > 0) normalized -= totalWidth;
            setCurrentTranslateX(normalized);
            pausedAtRef.current = -normalized / totalWidth * 45000;
        }
    };

    const handleMouseLeave = () => {
        if (isDragging) handleMouseUp();
    };
    
    // Hover handlers for cards
    const handleCardMouseEnter = () => setIsInteractionPaused(true);
    const handleCardMouseLeave = () => setIsInteractionPaused(false);

    return (
        <div 
            className="overflow-hidden"
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseLeave}
            style={{ 
                cursor: isDragging ? 'grabbing' : 'grab',
            }}
        >
            <div
                className="flex"
                style={{
                    transform: `translateX(${currentTranslateX}px)`,
                    transition: isDragging ? 'none' : 'transform 0.3s ease-out', 
                    width: `${tripleTestimonials.length * cardWidth}px`,
                    willChange: 'transform',
                }}
            >
                {tripleTestimonials.map((testimonial, index) => (
                    <TestimonialCard
                        key={`${testimonial.id}-${index}`}
                        testimonial={testimonial}
                        onMouseEnter={handleCardMouseEnter}
                        onMouseLeave={handleCardMouseLeave}
                    />
                ))}
            </div>
        </div>
    );
};


// =======================================================
//                   MOBILE CAROUSEL
// (Touch/Swipe based, ignores hover events)
// =======================================================
const MobileCarousel: React.FC = () => {
    const [isInteractionPaused, setIsInteractionPaused] = useState(false);
    const [isDragging, setIsDragging] = useState(false); 
    const [dragStartX, setDragStartX] = useState(0);
    const [scrollLeft, setScrollLeft] = useState(0);
    const [currentTranslateX, setCurrentTranslateX] = useState(0);
    // @ts-ignore
    const animationRef = useRef<number>();
    const startTimeRef = useRef<number>(0);
    const pausedAtRef = useRef<number>(0);

    // Animation loop (same as desktop)
    useEffect(() => {
        if (!isInteractionPaused) {
            const animate = (timestamp: number) => {
                if (!startTimeRef.current) startTimeRef.current = timestamp - pausedAtRef.current;
                
                const elapsed = timestamp - startTimeRef.current;
                const progress = (elapsed / 45000) % 1; 
                const translateX = -progress * totalWidth;
                
                setCurrentTranslateX(translateX);
                animationRef.current = requestAnimationFrame(animate);
            };
            animationRef.current = requestAnimationFrame(animate);
        } else {
            if (animationRef.current) cancelAnimationFrame(animationRef.current);
        }
        return () => {
            if (animationRef.current) cancelAnimationFrame(animationRef.current);
        };
    }, [isInteractionPaused]);

    // Store paused position (same as desktop)
    useEffect(() => {
        if (isInteractionPaused) {
            pausedAtRef.current = -currentTranslateX / totalWidth * 45000;
            startTimeRef.current = 0;
        }
    }, [isInteractionPaused, currentTranslateX]);

    // Handlers
    const handleTouchStart = (e: React.TouchEvent) => {
        setIsInteractionPaused(true); 
        setIsDragging(true); 
        setDragStartX(e.touches[0].pageX);
        setScrollLeft(currentTranslateX);
    };

    const handleTouchMove = (e: React.TouchEvent) => {
        if (!isDragging) return;
        
        const x = e.touches[0].pageX;
        const walk = x - dragStartX;
        
        let newTranslateX = scrollLeft + walk;
        
        if (newTranslateX > 0) newTranslateX = newTranslateX - totalWidth;
        else if (newTranslateX < -totalWidth * 2) newTranslateX = newTranslateX + totalWidth;
        
        setCurrentTranslateX(newTranslateX);
    };

    const handleTouchEnd = () => {
        if (isDragging) {
            setIsDragging(false);
            setIsInteractionPaused(false); // ALWAYS RESUME
            
            let normalized = currentTranslateX % totalWidth;
            if (normalized > 0) normalized -= totalWidth;
            setCurrentTranslateX(normalized);
            pausedAtRef.current = -normalized / totalWidth * 45000;
        }
    };

    return (
        <div 
            className="overflow-hidden touch-pan-x"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            style={{ 
                cursor: 'default', // No grab cursor on touch devices
            }}
        >
            <div
                className="flex"
                style={{
                    transform: `translateX(${currentTranslateX}px)`,
                    transition: isDragging ? 'none' : 'transform 0.3s ease-out', 
                    width: `${tripleTestimonials.length * cardWidth}px`,
                    willChange: 'transform',
                }}
            >
                {/* Cards in the Mobile Carousel do NOT have hover handlers */}
                {tripleTestimonials.map((testimonial, index) => (
                    <TestimonialCard
                        key={`${testimonial.id}-${index}`}
                        testimonial={testimonial}
                    />
                ))}
            </div>
        </div>
    );
};


// =======================================================
//                   MAIN COMPONENT
// =======================================================
const Testimonials: React.FC = () => {
    const [isTouchDevice, setIsTouchDevice] = useState(false);

    // Detect touch device
    useEffect(() => {
        setIsTouchDevice('ontouchstart' in window || navigator.maxTouchPoints > 0);
    }, []);

    // We'll use the touch device detection to conditionally render the carousels
    const CarouselComponent = isTouchDevice ? MobileCarousel : DesktopCarousel;

    return (
        <section id='testimonials' className="bg-black py-16 sm:py-20 md:py-32 px-4 overflow-hidden">
            <div className="max-w-7xl mx-auto">
                
                {/* Header */}
                <AnimatedBox className="text-center mb-12 sm:mb-16 md:mb-32">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl text-white mb-4 unbounded">
                        Why <span className="text-[#FF6B2C]">They Use</span> ReadySetShoot
                    </h2>
                    <AnimatedBox>
                        <p className="text-[#CFCFCF] text-sm sm:text-base md:text-lg max-w-4xl mx-auto px-4">
                            Real feedback from the photographers who rely on us to get the shot.
                        </p>
                    </AnimatedBox>
                </AnimatedBox>

                {/* Scrolling Testimonials */}
                <AnimatedBox className="relative">
                    <div className="absolute left-0 top-0 bottom-0 w-8 sm:w-10 md:w-22 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none"></div>
                    <div className="absolute right-0 top-0 bottom-0 w-8 sm:w-10 md:w-22 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none"></div>

                    {/* Conditional Rendering of the Carousel */}
                    <CarouselComponent />
                </AnimatedBox>

                {/* Footer */}
                <AnimatedBox className="text-center mt-8 sm:mt-12 px-4">
                    <div className="inline-flex items-center bg-[#0E0F11] rounded-md px-4 sm:px-6 py-3 border border-[#1B1D1F]">
                        <svg viewBox="0 0 28 28" fill="none" className='mr-2 sm:mr-3 h-8 w-8 sm:h-10 sm:w-10 md:h-5 md:w-5' xmlns="http://www.w3.org/2000/svg">
                            <rect width="28" height="28" rx="14" fill="#FF4500" />
                            <path d="M9.42326 20.4488L10.6277 15.3106L6.58826 11.8546L11.9247 11.3974L14 6.55176L16.0753 11.3974L21.4118 11.8546L17.3724 15.3106L18.5768 20.4488L14 17.7243L9.42326 20.4488Z" fill="white" fillRule="evenodd" clipRule="evenodd"/>
                        </svg>

                        <span className="text-gray-300 text-xs sm:text-sm text-left md:text-center">
                            Trusted by Landscape & Astro Photographers in{" "}
                            <span
                                className="text-orange-500 tabular-nums inline-block"
                                style={{ minWidth: "3ch" }}
                            >
                                <AnimateCount
                                    from={0}
                                    to={24}
                                    separator=""
                                    direction="up"
                                    duration={1}
                                    className="count-up-text"
                                />
                                + Countries
                            </span>
                        </span>
                    </div>
                </AnimatedBox>
            </div>
        </section>
    );
};

export default Testimonials;
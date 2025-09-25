import React, { useState } from 'react';
import { Star } from 'lucide-react';
import AnimateCount from './ui/AnimateCount';
import AnimatedBox from './ui/AnimatedBox';

interface Testimonial {
    id: number;
    text: string;
    author: string;
    location: string;
    rating: number;
}

const Testimonials: React.FC = () => {
    const [isPaused, setIsPaused] = useState(false);

    const testimonials: Testimonial[] = [
        {
            id: 1,
            text: "Honestly one of the cleanest and most useful apps I've tried. It's become part of my routine before every sunrise.",
            author: "Sienna",
            location: "Australia",
            rating: 5
        },
        {
            id: 2,
            text: "I was skeptical at first but wow. The forecast nailed it and I finally got the shot I've been chasing for months.",
            author: "Liam",
            location: "New Zealand",
            rating: 5
        },
        {
            id: 3,
            text: "Everything I care about shows up first. You can tell the design was really thought through.",
            author: "Armaan",
            location: "India",
            rating: 5
        },
        {
            id: 4,
            text: "The way it combines tide and light is just smart. It saves me so much time checking different places.",
            author: "Mark",
            location: "Australia",
            rating: 5
        },
        {
            id: 5,
            text: "Feels like it was built by someone who actually understands what landscape shooters need.",
            author: "Zoë",
            location: "USA",
            rating: 5
        },
        {
            id: 6,
            text: "Honestly? It's saved me a few wasted trips. I wish I had this years ago.",
            author: "Skyler",
            location: "Switzerland",
            rating: 5
        }
    ];

    // Triple the testimonials for seamless infinite scroll
    const tripleTestimonials = [...testimonials, ...testimonials, ...testimonials];

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

    const TestimonialCard: React.FC<{ testimonial: Testimonial }> = ({ testimonial }) => (
        <div
            className="cursor-target flex flex-col justify-between w-80 bg-[#0E0F11] rounded-2xl p-6 m-4 border border-[#1B1D1F] transition-transform duration-300 hover:border-[#5A00FF]"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
        >
            <div className="flex items-center mb-4">
                {renderStars(testimonial.rating)}
            </div>
            <p className="text-[#F1F1F1] text-normal leading-relaxed mb-6 min-h-[4.5rem]">
                {testimonial.text}
            </p>
            <div className="text-right">
                <p className="text-gray-500 text-xs">
                    — {testimonial.author}, {testimonial.location}
                </p>
            </div>
        </div>
    );


    return (
        <section id='testimonials' className="bg-black py-20 md:py-32 px-4 overflow-hidden">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <AnimatedBox className="md:text-center mb-20 md:mb-32">
                    <h2 className="text-3xl md:text-4xl text-white mb-4 unbounded">
                        Why <span className="text-[#FF6B2C]">They Use</span> ReadySetShoot
                    </h2>
                    <AnimatedBox>
                        <p className="text-[#CFCFCF] md:text-lg max-w-4xl mx-auto">
                            Real feedback from the photographers who rely on us to get the shot.
                        </p>
                    </AnimatedBox>
                </AnimatedBox>

                {/* Scrolling Testimonials */}
                <AnimatedBox className="relative">
                    <div className="absolute left-0 top-0 bottom-0 w-10 md:w-22 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none"></div>
                    <div className="absolute right-0 top-0 bottom-0 w-10 md:w-22 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none"></div>

                    {/* Scrolling container */}
                    <div className="overflow-hidden">
                        <div
                            className={`flex testimonial-scroll ${isPaused ? 'paused' : ''}`}
                        >
                            {tripleTestimonials.map((testimonial, index) => (
                                <TestimonialCard
                                    key={`${testimonial.id}-${Math.floor(index / testimonials.length)}-${index % testimonials.length}`}
                                    testimonial={testimonial}
                                />
                            ))}
                        </div>
                    </div>
                </AnimatedBox>

                {/* Footer */}
                <AnimatedBox className="text-center mt-12">
                    <div className="inline-flex items-center bg-[#0E0F11] rounded-md px-6 py-3 border border-[#1B1D1F]">
                        <svg viewBox="0 0 28 28" fill="none" className='mr-3 h-10 w-10 md:h-5 md:w-5' xmlns="http://www.w3.org/2000/svg">
                            <rect width="28" height="28" rx="14" fill="#FF4500" />
                            <path d="M9.42326 20.4488L10.6277 15.3106L6.58826 11.8546L11.9247 11.3974L14 6.55176L16.0753 11.3974L21.4118 11.8546L17.3724 15.3106L18.5768 20.4488L14 17.7243L9.42326 20.4488Z" fill="white" />
                        </svg>

                        <span className="text-gray-300 text-sm text-left md:text-center">
                            Trusted by Landscape & Astro Photographers in{" "}
                            <span
                                className="text-orange-500 tabular-nums"
                                style={{ minWidth: "3ch", display: "inline-block" }}
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

            <style>{`
                @keyframes testimonialScroll {
                    0% {
                        transform: translateX(0);
                    }
                    100% {
                        transform: translateX(-${testimonials.length * 336}px);
                    }
                }

                .testimonial-scroll {
                    animation: testimonialScroll 45s linear infinite;
                    width: ${tripleTestimonials.length * 336}px;
                }

                .testimonial-scroll.paused {
                    animation-play-state: paused;
                }

                .testimonial-scroll:hover {
                    animation-play-state: paused;
                }

                /* Smooth performance optimizations */
                .testimonial-scroll {
                    will-change: transform;
                    backface-visibility: hidden;
                    perspective: 1000px;
                }

                /* Ensure seamless loop by making sure we have exact positioning */
                .testimonial-scroll > div:nth-child(${testimonials.length + 1}) {
                    animation-delay: 0s;
                }
            `}</style>
        </section>
    );
};

export default Testimonials;
import { useEffect, useState, useRef } from "react";
import { motion, type PanInfo, useMotionValue, useTransform } from "motion/react";
import React, { type JSX } from "react";

// replace icons with your own if needed
// import {
//   FiCircle,
//   FiCode,
//   FiFileText,
//   FiLayers,
//   FiLayout,
// } from "react-icons/fi";

const myicon = <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M13.0144 9.53405L17.3264 2.14205C19.1949 2.63485 20.8532 3.53832 22.3012 4.85245C23.7492 6.16659 24.8013 7.72712 25.4576 9.53405H13.0144ZM9.5956 12.6141L5.376 5.22205C6.4848 4.13379 7.77347 3.27139 9.24201 2.63485C10.7106 1.99832 12.2965 1.68005 14 1.68005C14.2669 1.68005 14.5749 1.69566 14.924 1.72687C15.2731 1.75808 15.5913 1.79381 15.8788 1.83405L9.5956 12.6141ZM2.08041 17.0801C1.95721 16.5873 1.85947 16.0842 1.78719 15.5709C1.71491 15.0575 1.67919 14.5339 1.68001 14.0001C1.68001 12.5422 1.91614 11.1665 2.38841 9.87285C2.86067 8.57925 3.528 7.39859 4.3904 6.33085L10.612 17.0801H2.08041ZM10.7044 25.8581C8.83587 25.3653 7.17267 24.4618 5.7148 23.1477C4.25694 21.8335 3.19947 20.273 2.54241 18.4661H14.9548L10.7044 25.8581ZM14 26.3201C13.692 26.3201 13.3787 26.2995 13.06 26.2585C12.7413 26.2174 12.4386 26.1763 12.152 26.1353L18.4044 15.3861L22.624 22.7781C21.5152 23.8663 20.2269 24.7287 18.7592 25.3653C17.2915 26.0018 15.7051 26.3201 14 26.3201ZM23.6096 21.6693L17.388 10.9201H25.9196C26.0428 11.4129 26.1405 11.9159 26.2128 12.4293C26.2851 12.9426 26.3208 13.4662 26.32 14.0001C26.32 15.4374 26.0687 16.8131 25.566 18.1273C25.0633 19.4414 24.4112 20.6221 23.6096 21.6693Z" fill="#9081FF" />
</svg>

export interface CarouselItem {
    title: string;
    description: string;
    id: number;
    icon: React.ReactNode;
}

export interface CarouselProps {
    items?: CarouselItem[];
    baseWidth?: number;
    autoplay?: boolean;
    autoplayDelay?: number;
    pauseOnHover?: boolean;
    loop?: boolean;
    round?: boolean;
}

const DEFAULT_ITEMS: CarouselItem[] = [
    {
        title: "Text Animations",
        description: "Cool text animations for your projects.",
        id: 1,
        icon: myicon,
    },
    {
        title: "Animations",
        description: "Smooth animations for your projects.",
        id: 2,
        icon: myicon,
    },
    {
        title: "Components",
        description: "Reusable components for your projects.",
        id: 3,
        icon: myicon,
    },
    {
        title: "Backgrounds",
        description: "Beautiful backgrounds and patterns for your projects.",
        id: 4,
        icon: myicon,
    },
    {
        title: "Common UI",
        description: "Common UI components are coming soon!",
        id: 5,
        icon: myicon,
    },
];

const DRAG_BUFFER = 0;
const VELOCITY_THRESHOLD = 500;
const GAP = 16;
const SPRING_OPTIONS = { type: "spring", stiffness: 300, damping: 30 };

export default function Carousel({
    items = DEFAULT_ITEMS,
    baseWidth = 300,
    autoplay = false,
    autoplayDelay = 3000,
    pauseOnHover = false,
    loop = false,
    round = false,
}: CarouselProps): JSX.Element {
    const containerPadding = 16;
    const itemWidth = baseWidth - containerPadding * 2;
    const trackItemOffset = itemWidth + GAP;

    const carouselItems = loop ? [...items, items[0]] : items;
    const [currentIndex, setCurrentIndex] = useState<number>(0);
    const x = useMotionValue(0);
    const [isHovered, setIsHovered] = useState<boolean>(false);
    const [isResetting, setIsResetting] = useState<boolean>(false);

    const containerRef = useRef<HTMLDivElement>(null);
    useEffect(() => {
        if (pauseOnHover && containerRef.current) {
            const container = containerRef.current;
            const handleMouseEnter = () => setIsHovered(true);
            const handleMouseLeave = () => setIsHovered(false);
            container.addEventListener("mouseenter", handleMouseEnter);
            container.addEventListener("mouseleave", handleMouseLeave);
            return () => {
                container.removeEventListener("mouseenter", handleMouseEnter);
                container.removeEventListener("mouseleave", handleMouseLeave);
            };
        }
    }, [pauseOnHover]);

    useEffect(() => {
        if (autoplay && (!pauseOnHover || !isHovered)) {
            const timer = setInterval(() => {
                setCurrentIndex((prev) => {
                    if (prev === items.length - 1 && loop) {
                        return prev + 1;
                    }
                    if (prev === carouselItems.length - 1) {
                        return loop ? 0 : prev;
                    }
                    return prev + 1;
                });
            }, autoplayDelay);
            return () => clearInterval(timer);
        }
    }, [
        autoplay,
        autoplayDelay,
        isHovered,
        loop,
        items.length,
        carouselItems.length,
        pauseOnHover,
    ]);

    const effectiveTransition = isResetting ? { duration: 0 } : SPRING_OPTIONS;

    const handleAnimationComplete = () => {
        if (loop && currentIndex === carouselItems.length - 1) {
            setIsResetting(true);
            x.set(0);
            setCurrentIndex(0);
            setTimeout(() => setIsResetting(false), 50);
        }
    };

    const handleDragEnd = (
        _: MouseEvent | TouchEvent | PointerEvent,
        info: PanInfo
    ): void => {
        const offset = info.offset.x;
        const velocity = info.velocity.x;
        if (offset < -DRAG_BUFFER || velocity < -VELOCITY_THRESHOLD) {
            if (loop && currentIndex === items.length - 1) {
                setCurrentIndex(currentIndex + 1);
            } else {
                setCurrentIndex((prev) => Math.min(prev + 1, carouselItems.length - 1));
            }
        } else if (offset > DRAG_BUFFER || velocity > VELOCITY_THRESHOLD) {
            if (loop && currentIndex === 0) {
                setCurrentIndex(items.length - 1);
            } else {
                setCurrentIndex((prev) => Math.max(prev - 1, 0));
            }
        }
    };

    const dragProps = loop
        ? {}
        : {
            dragConstraints: {
                left: -trackItemOffset * (carouselItems.length - 1),
                right: 0,
            },
        };

    return (
        <div
            ref={containerRef}
            className={`relative overflow-hidden ${round
                ? "rounded-full border border-white"
                : ""
                }`}
            style={{
                // width: `${baseWidth}px`,
                // ...(round && { height: `${baseWidth}px` }),
            }}
        >
            <motion.div
                className="flex h-full"
                drag="x"
                {...dragProps}
                style={{
                    width: itemWidth,
                    gap: `${GAP}px`,
                    perspective: 1000,
                    perspectiveOrigin: `${currentIndex * trackItemOffset + itemWidth / 2}px 50%`,
                    x,
                }}
                onDragEnd={handleDragEnd}
                animate={{ x: -(currentIndex * trackItemOffset) }}
                // @ts-ignore
                transition={effectiveTransition}
                onAnimationComplete={handleAnimationComplete}
            >
                {carouselItems.map((item, index) => {
                    const range = [
                        -(index + 1) * trackItemOffset,
                        -index * trackItemOffset,
                        -(index - 1) * trackItemOffset,
                    ];
                    const outputRange = [90, 0, -90];
                    const rotateY = useTransform(x, range, outputRange, { clamp: false });
                    return (
                        <motion.div
                            key={index}
                            className={`relative shrink-0 flex flex-col p-6 gap-4 ${round
                                ? "items-center justify-center text-center bg-[#000000] border-0"
                                : "items-start justify-between bg-gradient-to-b from-[#0D0D0D] to-[#111111] border border-[#3A0CA3] rounded-2xl"
                                } overflow-hidden cursor-grab active:cursor-grabbing`}
                            style={{
                                width: itemWidth,
                                height: round ? itemWidth : "100%",
                                rotateY: rotateY,
                                ...(round && { borderRadius: "50%" }),
                            }}
                            // @ts-ignore
                            transition={effectiveTransition}
                        >
                                <span className="flex h-[28px] w-[28px] items-center justify-center rounded-full bg-[#060010]">
                                    {item.icon}
                                </span>
                                <h3 className="text-white text-2xl font-semibold leading-snug">
                                    {item.title}
                                </h3>
                                <p className="text-[#CFCFCF] mt-4 leading-relaxed text-[15px]">
                                    {item.description}
                                </p>
                        </motion.div>
                    );
                })}
            </motion.div>
        </div>
    );
}

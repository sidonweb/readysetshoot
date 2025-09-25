import { useRef, useEffect, useState } from "react";
import type { ElementType, ReactNode } from 'react';
import { gsap } from "gsap";

interface AnimatedBoxProps {
  as?: ElementType;
  children: ReactNode;
  className?: string;
  threshold?: number; // How much of the element should be visible before triggering (0-1)
  rootMargin?: string; // Margin around the root for triggering animation
  duration?: number; // Animation duration
  delay?: number; // Animation delay
  y?: number; // Initial Y offset
}

const AnimatedBox = ({ 
  as: Tag = "div", 
  children, 
  className = "",
  threshold = 0.1,
  rootMargin = "0px",
  duration = 0.6,
  delay = 0,
  y = 50
}: AnimatedBoxProps) => {
  const boxRef = useRef<HTMLElement | null>(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (!boxRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            // Element is in viewport, trigger animation
            gsap.fromTo(
              entry.target,
              { y: y, opacity: 0 },
              {
                y: 0,
                opacity: 1,
                duration: duration,
                delay: delay,
                ease: "power3.out",
              }
            );
            setHasAnimated(true);
            
            // Stop observing after animation is triggered
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold,
        rootMargin
      }
    );

    observer.observe(boxRef.current);

    // Cleanup
    return () => {
      if (boxRef.current) {
        observer.unobserve(boxRef.current);
      }
    };
  }, [hasAnimated, threshold, rootMargin, duration, delay, y]);

  // Set initial state to hidden
  useEffect(() => {
    if (boxRef.current && !hasAnimated) {
      gsap.set(boxRef.current, { y: y, opacity: 0 });
    }
  }, [hasAnimated, y]);

  return (
    // @ts-ignore
    <Tag ref={boxRef} className={className}>
      {children}
    </Tag>
  );
};

export default AnimatedBox;
import { useRef, useEffect, useState } from "react";
import type { ElementType, ReactNode } from 'react';
import { gsap } from "gsap";

interface AnimatedTextProps {
  as?: ElementType;
  children: ReactNode;
  className?: string;
  threshold?: number; // How much of the element should be visible before triggering (0-1)
  rootMargin?: string; // Margin around the root for triggering animation
}

const AnimatedText = ({ 
  as: Tag = "h2", 
  children, 
  className = "",
  threshold = 0.1,
  rootMargin = "0px"
}: AnimatedTextProps) => {
  const textRef = useRef<HTMLElement | null>(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (!textRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            // Element is in viewport, trigger animation
            const spans = entry.target.querySelectorAll("span[data-animate]");
            gsap.fromTo(
              spans,
              { y: 50, opacity: 0 },
              {
                y: 0,
                opacity: 1,
                duration: 0.6,
                stagger: 0.15,
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

    observer.observe(textRef.current);

    // Cleanup
    return () => {
      if (textRef.current) {
        observer.unobserve(textRef.current);
      }
    };
  }, [hasAnimated, threshold, rootMargin]);

  // Set initial state of spans to hidden
  useEffect(() => {
    if (textRef.current && !hasAnimated) {
      const spans = textRef.current.querySelectorAll("span[data-animate]");
      gsap.set(spans, { y: 50, opacity: 0 });
    }
  }, [hasAnimated]);

  // Wraps each child (text or element) into animated spans
  const wrapChildren = (node: ReactNode, keyPrefix = ""): ReactNode => {
    if (typeof node === "string") {
      return node.split(" ").map((word, i) => (
        <span key={`${keyPrefix}-${i}`} data-animate className="inline-block mr-2">
          {word}
        </span>
      ));
    }

    if (Array.isArray(node)) {
      return node.map((child, i) => wrapChildren(child, `${keyPrefix}-${i}`));
    }

    if (typeof node === "object" && node !== null) {
      // If the child is already an element (like <span>Great</span>)
      const element = node as any;
      return (
        <span data-animate className="inline-block mr-2" key={keyPrefix}>
          {element}
        </span>
      );
    }

    return null;
  };

  return (
    // @ts-ignore
    <Tag ref={textRef} className={className}>
      {wrapChildren(children)}
    </Tag>
  );
};

export default AnimatedText;
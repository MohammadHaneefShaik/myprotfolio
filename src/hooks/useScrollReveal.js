import { useEffect, useRef } from "react";

/**
 * Custom hook that adds a fade-in-on-scroll animation to elements.
 * Uses Intersection Observer for performance.
 * 
 * @param {Object} options
 * @param {string} options.threshold - Visibility threshold (0-1)
 * @param {string} options.rootMargin - Margin around root
 * @returns {React.RefObject} ref to attach to the element
 */
export function useScrollReveal(options = {}) {
  const ref = useRef(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("revealed");
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: options.threshold || 0.1,
        rootMargin: options.rootMargin || "0px 0px -50px 0px",
      }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [options.threshold, options.rootMargin]);

  return ref;
}

/**
 * Initializes scroll reveal for all elements with the class "scroll-reveal".
 * Call this once in App.jsx or a layout component.
 */
export function initScrollReveal() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("revealed");
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    }
  );

  // Observe all elements with scroll-reveal class
  document.querySelectorAll(".scroll-reveal").forEach((el) => {
    observer.observe(el);
  });

  return observer;
}

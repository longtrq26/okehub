import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

export const useAnimation = (animationConfig) => {
  const elementRef = useRef(null);

  useEffect(() => {
    if (elementRef.current && animationConfig) {
      const animation = gsap.to(elementRef.current, {
        ...animationConfig,
        ease: animationConfig.ease || "power2.out",
      });

      return () => {
        animation.kill();
      };
    }
  }, [animationConfig]);

  return elementRef;
};

export const useScrollAnimation = (animationConfig, scrollTriggerConfig) => {
  const elementRef = useRef(null);

  useEffect(() => {
    if (elementRef.current && animationConfig) {
      const animation = gsap.to(elementRef.current, {
        ...animationConfig,
        ease: animationConfig.ease || "power2.out",
        scrollTrigger: scrollTriggerConfig,
      });

      return () => {
        animation.kill();

        if (scrollTriggerConfig) {
          const triggers = gsap.globalTimeline.getChildren();
          triggers.forEach((trigger) => {
            if (trigger.scrollTrigger) {
              trigger.scrollTrigger.kill();
            }
          });
        }
      };
    }
  }, [animationConfig, scrollTriggerConfig]);

  return elementRef;
};

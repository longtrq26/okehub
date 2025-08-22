import gsap from "gsap";

export const fadeInUp = (element, duration = 0.8, delay = 0) => {
  return gsap.to(element, {
    y: 0,
    opacity: 1,
    duration,
    delay,
    ease: "power2.out",
  });
};

export const fadeInUpStagger = (elements, duration = 0.8, stagger = 0.2) => {
  return gsap.to(elements, {
    y: 0,
    opacity: 1,
    duration,
    stagger,
    ease: "power2.out",
  });
};

export const scaleAnimation = (element, scale, duration = 0.4) => {
  return gsap.to(element, {
    scale,
    transformOrigin: "top left",
    duration,
    ease: "power2.out",
  });
};

export const scrollTriggerAnimation = (elements, trigger, options = {}) => {
  const defaultOptions = {
    y: 0,
    opacity: 1,
    duration: 0.8,
    ease: "power2.out",
    stagger: 0.2,
    scrollTrigger: {
      trigger,
      start: "top 80%",
      toggleActions: "play none none none",
      ...options.scrollTrigger,
    },
  };

  return gsap.to(elements, {
    ...defaultOptions,
    ...options,
  });
};

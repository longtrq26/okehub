import gsap from "gsap";

export const scaleAnimation = (element, scale, duration = 0.8) => {
  return gsap.to(element, {
    scale,
    transformOrigin: "top left",
    duration,
    ease: "power2.out",
  });
};

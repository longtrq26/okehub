import AboutSection from "@/components/sections/home/AboutSection";
import HeroSection from "@/components/sections/home/HeroSection";
import ImpressionSection from "@/components/sections/home/ImpressionSection";
import MissionSection from "@/components/sections/home/MissionSection";
import VisionSection from "@/components/sections/home/VisionSection";
import React from "react";

const HomePage = () => {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <VisionSection />
      <MissionSection />
      <ImpressionSection />
    </>
  );
};

export default HomePage;

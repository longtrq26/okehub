"use client";

import Heading from "@/components/ui/Heading";
import Section from "@/components/ui/Section";
import { useScrollAnimation } from "@/hooks/useAnimation";
import React, { useRef } from "react";

const VisionSection = () => {
  const sectionRef = useRef(null);
  const headerRef = useScrollAnimation(
    { y: 0, opacity: 1, duration: 0.8 },
    { trigger: sectionRef.current, start: "top 80%" }
  );
  const headingRef = useScrollAnimation(
    { y: 0, opacity: 1, duration: 0.8, delay: 0.2 },
    { trigger: sectionRef.current, start: "top 80%" }
  );

  return (
    <Section
      ref={sectionRef}
      className="flex min-h-screen items-center justify-center"
      backgroundImage="/images/vision_bg.png"
      backgroundRepeat="no-repeat"
      backgroundSize="cover md:contain"
      backgroundPosition="40% 40%"
    >
      {/* Main content */}
      <div className="flex flex-col items-center justify-center gap-4 px-4 md:px-8">
        <div
          ref={headerRef}
          className="opacity-0 translate-y-10 flex items-center justify-center gap-1.5
          text-sm font-inter font-semibold text-[#165BB8] md:text-base"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="6"
            height="6"
            viewBox="0 0 6 6"
            fill="none"
          >
            <circle cx="3" cy="3" r="3" fill="#165BB8" />
          </svg>
          <p>TẦM NHÌN</p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="6"
            height="6"
            viewBox="0 0 6 6"
            fill="none"
          >
            <circle cx="3" cy="3" r="3" fill="#165BB8" />
          </svg>
        </div>

        <Heading
          ref={headingRef}
          level={2}
          size="sm"
          className="opacity-0 translate-y-6 max-w-3xl px-6 text-center text-foreground"
        >
          Ami&M xây dựng{" "}
          <strong className="text-gradient">
            hệ sinh thái đa ngành phát triển nhanh và bền vững
          </strong>{" "}
          trên hành trình kiến tạo sự thịnh vượng đích thực!
        </Heading>
      </div>
    </Section>
  );
};

export default VisionSection;

"use client";

import Heading from "@/components/ui/Heading";
import Section from "@/components/ui/Section";
import React from "react";

const SectionHeader = ({ text, color = "#165BB8" }) => (
  <div
    className="flex items-center justify-center gap-1.5 text-sm font-inter font-semibold md:text-base"
    style={{ color }}
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="6"
      height="6"
      viewBox="0 0 6 6"
      fill="none"
    >
      <circle cx="3" cy="3" r="3" fill={color} />
    </svg>
    <p>{text}</p>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="6"
      height="6"
      viewBox="0 0 6 6"
      fill="none"
    >
      <circle cx="3" cy="3" r="3" fill={color} />
    </svg>
  </div>
);

const VisionSection = () => {
  return (
    <Section
      className="flex min-h-screen items-center justify-center"
      backgroundImage="/images/vision_bg.png"
      backgroundRepeat="no-repeat"
      backgroundSize="cover md:contain"
      backgroundPosition="40% 40%"
    >
      {/* Main content */}
      <div className="flex flex-col items-center justify-center gap-4 px-4 md:px-8">
        <SectionHeader text="TẦM NHÌN" />
        <Heading
          level={2}
          size="sm"
          className="max-w-3xl px-6 text-center text-foreground"
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

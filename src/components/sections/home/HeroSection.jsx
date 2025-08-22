"use client";

import BackgroundLayer from "@/components/shared/BackgroundLayer";
import Heading from "@/components/ui/Heading";
import Section from "@/components/ui/Section";
import { useAnimation } from "@/hooks/useAnimation";
import React from "react";

const HeroSection = () => {
  const headingRef = useAnimation({
    y: 0,
    opacity: 1,
    duration: 1.2,
  });

  return (
    <Section
      className="h-screen overflow-hidden"
      backgroundImage="/images/hero_bg.png"
      backgroundPosition="70% center"
      backgroundSize="cover"
      backgroundRepeat="no-repeat"
    >
      {/* Background layer 1 */}
      <div className="absolute inset-0 top-[25%] sm:top-[20%] md:top-[8%] lg:top-[10%]">
        <BackgroundLayer />
      </div>

      {/* Overlay left screen */}
      <div className="absolute top-0 left-0 w-[80vw] h-[50vh] md:w-[60vw] md:h-[70vh] lg:w-[50vw] lg:h-[80vh] xl:w-[900px] xl:h-[637.5px] z-10">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1209 851"
          fill="none"
          className="w-full h-full"
        >
          <g filter="url(#filter0_f_16561_902)">
            <path
              d="M361.934 154.175L321.933 -66.3245L-174.769 -105.318L-586.066 663.266L1068.58 1230.05L1075.85 1059.94L935.084 955.572L779.946 931.128L505.148 729.849L271.331 614.454L361.934 154.175Z"
              fill="url(#paint0_linear_16561_902)"
              fillOpacity="0.1"
            />
          </g>
          <defs>
            <filter
              id="filter0_f_16561_902"
              x="-718.866"
              y="-238.118"
              width="1927.52"
              height="1600.97"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              />
              <feGaussianBlur
                stdDeviation="66.4"
                result="effect1_foregroundBlur_16561_902"
              />
            </filter>
            <linearGradient
              id="paint0_linear_16561_902"
              x1="552.23"
              y1="207.182"
              x2="55.2306"
              y2="545.182"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#2F2E79" stopOpacity="0" />
              <stop offset="1" stopColor="#202049" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Overlay bottom left */}
      <div className="absolute bottom-0 left-0 w-[100vw] h-[40vh] md:w-[80vw] md:h-[60vh] lg:w-[70vw] lg:h-[70vh] xl:w-[1200px] xl:h-[566.25px] z-20">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1600 755"
          fill="none"
          className="w-full h-full"
        >
          <g filter="url(#filter0_f_16561_901)">
            <path
              d="M534.525 370.691L2.68945 234.559H-43.0137V899.988H1706.01L1657.77 736.707L1490.78 683.582L1336.09 710.73L1010.89 609.363L752.299 575.965L534.525 370.691Z"
              fill="url(#paint0_linear_16561_901)"
              fillOpacity="0.7"
            />
          </g>
          <defs>
            <filter
              id="filter0_f_16561_901"
              x="-276.714"
              y="0.858597"
              width="2216.42"
              height="1132.83"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              />
              <feGaussianBlur
                stdDeviation="116.85"
                result="effect1_foregroundBlur_16561_901"
              />
            </filter>
            <linearGradient
              id="paint0_linear_16561_901"
              x1="831.498"
              y1="234.559"
              x2="831.498"
              y2="899.988"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#2F2E79" stopOpacity="0" />
              <stop offset="1" stopColor="#202049" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Overlay full screen */}
      <div className="absolute inset-0 z-30">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1600 755"
          fill="none"
          className="w-full h-full"
        >
          <g filter="url(#filter0_f_16561_901)">
            <path
              d="M534.525 370.691L2.68945 234.559H-43.0137V899.988H1706.01L1657.77 736.707L1490.78 683.582L1336.09 710.73L1010.89 609.363L752.299 575.965L534.525 370.691Z"
              fill="url(#paint0_linear_16561_901)"
              fillOpacity="0.5"
            />
          </g>
          <defs>
            <filter
              id="filter0_f_16561_901"
              x="-276.714"
              y="0.858597"
              width="2216.42"
              height="1132.83"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              />
              <feGaussianBlur
                stdDeviation="116.85"
                result="effect1_foregroundBlur_16561_901"
              />
            </filter>
            <linearGradient
              id="paint0_linear_16561_901"
              x1="831.498"
              y1="234.559"
              x2="831.498"
              y2="899.988"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#2F2E79" stopOpacity="0" />
              <stop offset="1" stopColor="#202049" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Background layer 2 */}
      <div
        className="absolute inset-0 z-10"
        style={{
          backgroundImage: "url('/images/hero_layer.png')",
          backgroundSize: "cover",
          backgroundPosition: "70% center",
          backgroundRepeat: "no-repeat",
        }}
      />

      {/* Content */}
      <div className="relative flex h-screen flex-col items-start justify-end px-2.5 gap-x-2.5 md:px-12 lg:px-[100px] py-3 pb-4 z-40">
        <Heading
          level={1}
          size="hero"
          className="opacity-0 translate-y-6 text-white uppercase"
          ref={headingRef}
        >
          Đồng hành
          <br />
          Khởi thịnh vượng!
        </Heading>
      </div>
    </Section>
  );
};

export default HeroSection;

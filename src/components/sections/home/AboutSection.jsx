"use client";

import Button from "@/components/ui/Button";
import Heading from "@/components/ui/Heading";
import Section from "@/components/ui/Section";
import React from "react";

const AboutSection = () => {
  return (
    <Section
      className="min-h-screen flex flex-col overflow-y-hidden lg:overflow-y-visible"
      backgroundImage="/images/about_bg.png"
      backgroundPosition="20% center"
      backgroundRepeat="no-repeat"
      backgroundSize="cover"
      overlay={
        <>
          {/* Layer */}
          <div
            className="absolute bottom-0 left-0 w-full h-1/3 sm:h-1/2 md:h-full md:inset-0 
                bg-[url('/images/about_bg.png')] bg-no-repeat bg-cover scale-[1.6] 
                sm:scale-[1.4] md:scale-0 rotate-[90deg] md:rotate-0 
                bg-[position:70%_center] md:bg-[position:30%_center] z-0"
          />

          {/* Bottom layer */}
          <div className="absolute bottom-[110px] w-screen md:bottom-[75px]">
            <div className="relative w-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="100%"
                height="107"
                viewBox="0 0 375 107"
                fill="none"
                className="absolute w-full"
                preserveAspectRatio="none"
              >
                <g opacity="1">
                  <path
                    d="M388.069 0.772662C387.94 45.3047 110.449 68.9962 -23.38 74.4011L-23.4374 94.2947C183.097 125.098 298.753 91.2464 387.892 61.898L388.069 0.772662Z"
                    fill="white"
                  />
                  <path
                    d="M388.069 0.772662C387.94 45.3047 110.449 68.9962 -23.38 74.4011L-23.4374 94.2947C183.097 125.098 298.753 91.2464 387.892 61.898L388.069 0.772662Z"
                    fill="url(#paint0_linear_1_1787)"
                  />
                </g>
                <defs>
                  <linearGradient
                    id="paint0_linear_1_1787"
                    x1="26.5986"
                    y1="52.9575"
                    x2="352.485"
                    y2="93.0599"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#328AE2" />
                    <stop offset="1" stopColor="#FF0D39" />
                  </linearGradient>
                </defs>
              </svg>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="100%"
                height="114"
                viewBox="0 0 375 114"
                fill="none"
                className="absolute w-full translate-y-6 skew-y-[1.8deg]"
                preserveAspectRatio="none"
              >
                <g opacity="1">
                  <path
                    d="M388.037 0.229205C387.908 45.0574 110.416 68.9118 -23.4126 74.3552L-23.4704 94.3811C183.063 125.386 298.648 116.169 387.788 86.6242L388.037 0.229205Z"
                    fill="white"
                  />
                  <path
                    d="M388.037 0.229205C387.908 45.0574 110.416 68.9118 -23.4126 74.3552L-23.4704 94.3811C183.063 125.386 298.648 116.169 387.788 86.6242L388.037 0.229205Z"
                    fill="url(#paint0_linear_1_1788)"
                  />
                </g>
                <defs>
                  <linearGradient
                    id="paint0_linear_1_1788"
                    x1="26.5565"
                    y1="56.1713"
                    x2="353.043"
                    y2="93.7598"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#328AE2" />
                    <stop offset="1" stopColor="#FF0D39" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </div>
        </>
      }
    >
      {/* Main content */}
      <div className="relative z-10 flex h-full flex-col justify-start py-12 px-4 md:justify-center md:px-12 md:my-44 lg:px-[100px] sm:px-6">
        <div className="flex flex-col gap-y-6 md:gap-y-8 max-w-[700px] lg:max-w-[600px]">
          <div className="flex flex-col gap-4">
            <p className="font-inter flex items-center text-sm text-white md:text-base uppercase gap-x-1.5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="6"
                height="7"
                viewBox="0 0 6 7"
                fill="none"
              >
                <circle cx="3" cy="3.5" r="3" fill="white" />
              </svg>
              Công ty Cổ phần Tập đoàn Ami&M Việt Nam
            </p>
            <Heading
              level={2}
              size="default"
              className="text-white uppercase leading-tight"
            >
              Khởi nguồn từ Tình bằng hữu
            </Heading>
          </div>
          <div className="flex flex-col gap-7">
            <p className="font-inter text-sm text-white md:text-base">
              Bắt đầu từ năm 2005 – thời điểm những người bạn cùng chung chí
              hướng chia sẻ những ý tưởng đầu tiên về AMITICAS, cùng nhau nỗ lực
              không ngừng nghỉ để đến 9.9.2019, Ami&M chính thức đi vào hoạt
              động.
            </p>
            <p className="text-sm text-white sm:text-base md:text-lg">
              Tại Ami&M, chúng tôi được sống và làm việc hết mình! Được gắn bó
              và kết nối cũng những người bằng hữu mà chúng tôi gọi là ANH EM -
              AM, được bứt phá các giới hạn bản thân để phát triển, thoả sức thử
              thách và gắn bó nhiệt thành để cùng nhau kiến tạo các giá trị mà
              mình tin tưởng.
            </p>
          </div>
          <Button
            variant="primary"
            className="w-fit hover:bg-gradient-to-r hover:from-[#328AE2] hover:to-[#FF0D39] hover:shadow-lg transition-colors duration-400"
          >
            Hành trình của Ami&M{" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="9"
              height="9"
              viewBox="0 0 9 9"
              fill="none"
            >
              <path
                d="M4.20532 0.618164C4.20532 1.02853 4.59082 1.64262 4.98052 2.15834C5.48235 2.82233 6.08125 3.40238 6.76846 3.84525C7.28329 4.17687 7.90845 4.49521 8.41064 4.49521M4.20532 8.38184C4.20532 7.97147 4.59082 7.35738 4.98052 6.84166C5.48235 6.17771 6.08125 5.59762 6.76846 5.15475C7.28329 4.82313 7.90845 4.50479 8.41064 4.50479M8.41064 4.5H0"
                stroke="white"
                strokeWidth="0.970459"
              />
            </svg>
          </Button>
        </div>
      </div>
    </Section>
  );
};

export default AboutSection;

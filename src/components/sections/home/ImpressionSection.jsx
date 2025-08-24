"use client";

import Heading from "@/components/ui/Heading";
import Section from "@/components/ui/Section";
import Image from "next/image";
import React from "react";

const impressions = [
  {
    icon: "/icons/im_icon1.svg",
    label: "686 tỷ",
    desc: "Tổng tài sản và Vốn chủ sở hữu",
  },
  {
    icon: "/icons/im_icon2.svg",
    label: "93,9 tỷ",
    desc: "Doanh thu thuần",
  },
  {
    icon: "/icons/im_icon3.svg",
    label: "24,6 tỷ",
    desc: "Lợi nhuận gộp",
  },
  {
    icon: "/icons/im_icon4.svg",
    label: "20+",
    desc: "Dự án trọng điểm",
  },
  {
    icon: "/icons/im_icon5.svg",
    label: "03 văn phòng",
    desc: "Trên các tỉnh thành",
  },
];

const ImpressionItem = ({ item }) => (
  <div className="flex flex-row items-center gap-x-3 md:gap-x-16 py-6 md:py-20 md:px-8 lg:px-12 border-[#EDEDED] border-b last:border-b-0 md:border-l">
    <div className="bg-[#FBFBFB] rounded-full">
      <Image
        src={item.icon}
        alt={item.desc}
        width={110}
        height={110}
        className="object-contain p-5"
        sizes="(max-width: 768px) 80px, 100px"
        loading="lazy"
      />
    </div>

    <div className="flex flex-col gap-y-2.5">
      <h3 className="font-inter text-4xl md:text-5xl font-bold text-[#165BB8]">
        {item.label}
      </h3>
      <p className="font-inter text-sm text-[#011942] md:text-base">
        {item.desc}
      </p>
    </div>
  </div>
);

const SectionHeader = ({ text, color = "#165BB8" }) => (
  <div
    className="flex items-center gap-1.5 font-inter text-sm font-semibold"
    style={{ color }}
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="7"
      height="7"
      viewBox="0 0 7 7"
      fill="none"
    >
      <circle cx="3.92383" cy="3.5" r="3" fill={color} />
    </svg>
    <p>{text}</p>
  </div>
);

const ImpressionSection = () => {
  return (
    <>
      <Section className="relative flex min-h-screen w-full flex-col items-center justify-center">
        <div
          className="relative flex h-full flex-col md:flex-row justify-start px-4 py-16 
             md:justify-center md:px-12 lg:px-[100px] sm:px-6"
        >
          {/* Sticky Content */}
          <div className="relative h-fit w-full md:w-1/2 md:sticky md:top-1/3 pb-24">
            <SectionHeader text="TỪNG BƯỚC PHÁT TRIỂN" />
            <Heading level={2} size="default" className="text-gradient pt-2.5">
              Dấu ấn Ami&M
            </Heading>
            <p className="font-inter text-[#011942] max-w-lg pt-3.5">
              Những con số chỉ là một phần của câu chuyện, ý nghĩa thực sự là
              những dấu ấn sâu đậm về sự đổi mới, trách nhiệm xã hội và sự tin
              cậy từ những Người đồng hành.
            </p>
          </div>

          {/* Scroll area */}
          <div className="flex w-full flex-col md:w-1/2">
            <div className="w-full rounded-md">
              {impressions.map((item, index) => (
                <ImpressionItem key={index} item={item} index={index} />
              ))}
            </div>
          </div>
        </div>
      </Section>
      <div className="relative w-full h-[600px] md:h-screen flex items-end justify-center overflow-hidden">
        <Image
          src="/images/mission.png"
          alt="Impression"
          fill
          className="object-cover object-top"
          sizes="100vw"
          loading="lazy"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(3deg, #102A4D 4.96%, rgba(37, 88, 157, 0.00) 94.31%)",
          }}
        />
        <p className="relative z-10 text-center text-white font-quickSand text-4xl font-bold max-w-4xl pb-20">
          “Tình bằng hữu, sự chính trực và tinh thần tự nâng tầm hun đúc nên
          tinh thần của một tổ chức không ngừng học tập để kiến tạo giá trị.”
        </p>
      </div>
    </>
  );
};

export default ImpressionSection;

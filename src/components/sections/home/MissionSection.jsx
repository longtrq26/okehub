"use client";

import Heading from "@/components/ui/Heading";
import Section from "@/components/ui/Section";
import { useScrollAnimation } from "@/hooks/useAnimation";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";

const missions = [
  {
    icon: "/icons/mission_icon1.svg",
    label: "VỚI CÁN BỘ NHÂN VIÊN",
    desc: "Cảm thấy gắn kết, được trân trọng, được tạo cơ hội để khai phá, phát triển, khẳng định giá trị bản thân",
  },
  {
    icon: "/icons/mission_icon2.svg",
    label: "VỚI KHÁCH HÀNG",
    desc: "Cung cấp các sản phẩm - dịch vụ theo tiêu chuẩn quốc tế, mang đến cho khách hàng những trải nghiệm tốt nhất",
  },
  {
    icon: "/icons/mission_icon3.svg",
    label: "VỚI ĐỐI TÁC",
    desc: "Tin tưởng và muốn hợp tác dài lâu trên nền tảng của sự phát triển bền vững và hướng tới những giá trị tốt đẹp",
  },
  {
    icon: "/icons/mission_icon4.svg",
    label: "VỚI CỘNG ĐỒNG",
    desc: "Hài hòa lợi ích doanh nghiệp với lợi ích xã hội, đóng góp tích cực cho các hoạt động hướng về cộng đồng",
  },
];

const MissionItem = React.forwardRef(({ item, index }, ref) => (
  <div
    ref={ref}
    className="flex flex-col items-start gap-4 py-6 md:py-20 md:px-8 lg:px-12"
    aria-labelledby={`mission-label-${index}`}
  >
    <Image
      src={item.icon}
      alt={item.label}
      width={80}
      height={80}
      className="object-contain"
      sizes="(max-width: 768px) 80px, 100px"
      loading="lazy"
    />
    <div className="flex flex-col gap-y-2.5">
      <h3
        id={`mission-label-${index}`}
        className="font-inter text-xl font-bold text-[#165BB8] md:text-2xl"
      >
        {item.label}
      </h3>
      <p className="font-inter text-sm text-foreground md:text-base">
        {item.desc}
      </p>
    </div>
  </div>
));

const MissionSection = () => {
  const sectionRef = useRef(null);
  const missionRefs = useRef([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const headerRef = useScrollAnimation(
    { y: 0, opacity: 1, duration: 0.8 },
    { trigger: sectionRef.current, start: "top 80%" }
  );
  const headingRef = useScrollAnimation(
    { y: 0, opacity: 1, duration: 0.8, delay: 0.2 },
    { trigger: sectionRef.current, start: "top 80%" }
  );
  const counterRef = useScrollAnimation(
    { y: 0, opacity: 1, duration: 0.8, delay: 0.4 },
    { trigger: sectionRef.current, start: "top 80%" }
  );

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = missionRefs.current.indexOf(entry.target);
            if (index !== -1) {
              setCurrentIndex(index);
            }
          }
        });
      },
      {
        root: null,
        threshold: 1,
      }
    );

    missionRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      missionRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  return (
    <Section ref={sectionRef} className="min-h-screen flex flex-col gap-12">
      {/* Heading */}
      <div className="flex w-full flex-col items-center justify-center gap-4 rounded-[50%] bg-gradient-to-b from-[rgba(55,57,129,0.02)] to-[rgba(255,225,229,0.0)] px-4 md:px-8 lg:px-12">
        <div className="relative flex w-full flex-col items-center gap-y-2.5 p-6 md:w-[70%] md:p-8 lg:w-[60%]">
          <div
            ref={headerRef}
            className="flex items-center justify-center gap-1.5 font-inter text-sm font-semibold text-[#165BB8] md:text-base"
          >
            <svg width="6" height="6" xmlns="http://www.w3.org/2000/svg">
              <circle cx="3" cy="3" r="3" fill="#165BB8" />
            </svg>
            <p>SỨ MỆNH</p>
            <svg width="6" height="6" xmlns="http://www.w3.org/2000/svg">
              <circle cx="3" cy="3" r="3" fill="#165BB8" />
            </svg>
          </div>
          <Heading
            ref={headingRef}
            level={2}
            size="sm"
            className="opacity-0 translate-y-6 max-w-xl text-center text-gradient"
          >
            Mang lại cuộc sống tốt đẹp hơn cho những người đồng hành
          </Heading>
        </div>
      </div>

      {/* Main content */}
      <div
        className="relative flex h-full flex-col md:flex-row-reverse justify-start px-4 py-16 
             md:justify-center md:px-12 lg:px-[100px] sm:px-6"
      >
        {/* Sticky Image */}
        <div className="relative h-[492px] w-full max-w-[790px] md:w-1/2 md:sticky md:top-20">
          <Image
            src="/images/mission.png"
            fill
            alt="Mission"
            className="object-cover rounded-[24px] transform scale-x-[-1]"
            sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 40vw"
            priority
          />
        </div>

        {/* Scroll area */}
        <div className="flex w-full flex-col md:w-1/2 pt-10 md:pt-0">
          {/* Counter */}
          <div
            ref={counterRef}
            className="text-base self-end md:self-start font-inter font-semibold text-[#2A2B6B] md:sticky md:top-1/2"
          >
            {String(currentIndex + 1).padStart(2, "0")}/
            {String(missions.length).padStart(2, "0")}
          </div>

          {/* Missions */}
          <div className="w-full px-4 md:px-8 lg:px-24">
            {missions.map((item, index) => (
              <MissionItem
                key={index}
                item={item}
                index={index}
                ref={(el) => (missionRefs.current[index] = el)}
              />
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
};

export default MissionSection;

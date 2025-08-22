"use client";

import { useAnimation } from "@/hooks/useAnimation";
import { useResize } from "@/hooks/useResize";
import { useScroll } from "@/hooks/useScroll";
import { scaleAnimation } from "@/lib/animations";
import { cn } from "@/lib/utils";
import React, { useEffect, useState } from "react";
import LangToggle from "../ui/LangToggle";
import Logo from "../ui/Logo";
import MenuButton from "../ui/MenuButton";

const Header = () => {
  const { isScrolled } = useScroll();
  const isAboveBreakpoint = useResize(768);
  const [activeLang, setActiveLang] = useState("VIE");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const logoRef = useAnimation({
    y: 0,
    opacity: 1,
    duration: 0.8,
  });

  useEffect(() => {
    if (logoRef.current) {
      const targetScale = isScrolled || !isAboveBreakpoint ? 0.8 : 1;
      scaleAnimation(logoRef.current, targetScale);
    }
  }, [isScrolled, isAboveBreakpoint]);

  const handleLangChange = (lang) => {
    setActiveLang(lang);
  };

  const handleMenuClick = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <header
      className={cn(
        "fixed top-0 w-full z-50 transition-colors duration-200",
        isMenuOpen ? "bg-white" : "bg-transparent"
      )}
    >
      <div className="w-full px-2.5 md:px-12 lg:px-[100px] py-6">
        <div className="flex items-start justify-between">
          {/* Logo */}
          <div ref={logoRef} className="opacity-0 translate-y-6">
            <Logo
              isScrolled={isScrolled}
              isAboveBreakpoint={isAboveBreakpoint}
            />
          </div>

          {/* Buttons */}
          <div className="flex gap-x-2.5">
            <LangToggle
              activeLang={activeLang}
              onLangChange={handleLangChange}
            />
            <MenuButton onClick={handleMenuClick} />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

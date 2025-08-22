"use client";

import Header from "@/components/layout/Header";
import Lenis from "@studio-freight/lenis";
import React, { useEffect } from "react";

const MainLayout = ({ children }) => {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  return (
    <div className="min-h-screen min-w-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <div className="w-full mx-auto">{children}</div>
      </main>
    </div>
  );
};

export default MainLayout;

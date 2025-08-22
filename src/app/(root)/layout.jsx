import Header from "@/components/layout/Header";
import React from "react";

const MainLayout = ({ children }) => {
  return (
    <div className="min-h-screen min-w-screen flex flex-col bg-black">
      <Header />
      <main className="flex-1">
        <div className="w-full mx-auto">{children}</div>
      </main>
    </div>
  );
};

export default MainLayout;

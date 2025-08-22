import React from "react";
import Button from "./Button";

const LangToggle = ({ activeLang = "VIE", onLangChange }) => {
  return (
    <div className="p-2 bg-[rgba(35,31,32,0.13)] rounded-full ring-1 ring-white/30 flex items-center gap-1.5">
      <Button
        variant={activeLang === "VIE" ? "lang" : "langInactive"}
        size="sm"
        className="text-xs md:text-sm w-8 h-8 p-0 min-w-0 px-4!"
        onClick={() => onLangChange?.("VIE")}
      >
        <span className="font-quickSand font-semibold">VIE</span>
      </Button>
      <Button
        variant={activeLang === "ENG" ? "lang" : "langInactive"}
        size="sm"
        className="text-xs md:text-sm w-8 h-8 p-0 min-w-0 px-4!"
        onClick={() => onLangChange?.("ENG")}
      >
        <span className="font-quicksand font-semibold">ENG</span>
      </Button>
    </div>
  );
};

export default LangToggle;

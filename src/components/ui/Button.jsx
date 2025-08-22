import { cn } from "@/lib/utils";
import React, { forwardRef } from "react";

const Button = forwardRef(
  (
    { children, variant = "primary", size = "default", className, ...props },
    ref
  ) => {
    const base =
      "flex items-center justify-center gap-x-2.5 rounded-[30px] font-semibold transition-all duration-200 cursor-pointer";

    const variants = {
      primary: "bg-[#3E4089] text-white hover:bg-[#2F2E79]",
      secondary:
        "bg-[rgba(35,31,32,0.13)] text-white ring-1 ring-white/30 hover:bg-[rgba(35,31,32,0.2)]",
      lang: "bg-[#2F2E79] text-white hover:bg-[#1E1D59]",
      langInactive: "bg-transparent text-neutral-50 hover:bg-neutral-800/20",
    };

    const sizes = {
      sm: "px-4 md:px-6 py-2 text-sm",
      default: "px-6 py-3.5 text-base",
      lg: "px-8 py-4 text-lg",
    };

    return (
      <button
        ref={ref}
        className={cn(base, variants[variant], sizes[size], className)}
        {...props}
      >
        {children}
      </button>
    );
  }
);

export default Button;

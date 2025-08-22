import { cn } from "@/lib/utils";
import React, { forwardRef } from "react";

const Heading = forwardRef(
  ({ children, level = 2, size = "default", className, ...props }, ref) => {
    const base = "font-quickSand font-bold leading-tight";

    const sizes = {
      sm: "text-2xl sm:text-3xl md:text-4xl",
      default: "text-4xl sm:text-5xl md:text-6xl lg:text-7xl",
      lg: "text-5xl sm:text-6xl md:text-7xl lg:text-8xl",
      hero: "text-[32px] sm:text-[36px] md:text-[48px] lg:text-[64px] xl:text-[72px]",
    };

    const Component = `h${level}`;

    return (
      <Component
        ref={ref}
        className={cn(base, sizes[size], className)}
        {...props}
      >
        {children}
      </Component>
    );
  }
);

export default Heading;

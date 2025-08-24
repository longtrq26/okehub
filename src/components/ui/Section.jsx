import { cn } from "@/lib/utils";
import React, { forwardRef } from "react";

const Section = forwardRef(
  (
    {
      children,
      className,
      backgroundImage,
      backgroundPosition = "center",
      backgroundSize = "cover",
      backgroundRepeat = "no-repeat",
      overlay,
      zIndex = "z-0",
      ...props
    },
    ref
  ) => {
    return (
      <section
        ref={ref}
        className={cn("relative w-full", className)}
        {...props}
      >
        {backgroundImage && (
          <div
            className={cn("absolute inset-0", zIndex)}
            style={{
              backgroundImage: `url(${backgroundImage})`,
              backgroundPosition,
              backgroundSize,
              backgroundRepeat,
            }}
          />
        )}

        {overlay && (
          <div className={cn("absolute inset-0", zIndex)}>{overlay}</div>
        )}

        <div className="relative z-10">{children}</div>
      </section>
    );
  }
);

export default Section;

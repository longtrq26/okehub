import { useCallback, useEffect, useState } from "react";

export const useResize = (breakpoint = 768) => {
  const [isAboveBreakpoint, setIsAboveBreakpoint] = useState(false);

  const handleResize = useCallback(() => {
    setIsAboveBreakpoint(window.innerWidth >= breakpoint);
  }, [breakpoint]);

  useEffect(() => {
    handleResize();

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, [handleResize]);

  return { isAboveBreakpoint };
};

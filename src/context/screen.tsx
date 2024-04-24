import { createContext, useState, useEffect, useMemo, ReactNode } from "react";

interface MobileContextType {
  isMobile: boolean;
}
interface ScreenProviderProp {
  children: ReactNode;
}

export const ScreenContext = createContext<MobileContextType | null>(null);

export default function ScreenProvider({ children }: ScreenProviderProp) {
  const [isMobile, setIsMobile] = useState<boolean>(() => {
    return window.matchMedia("(max-width: 768px)").matches;
  });
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.matchMedia("(max-width: 768px)").matches);
    };
    checkMobile();
    const resizeListener = () => {
      checkMobile();
    };
    window.addEventListener("resize", resizeListener);
    // handling side effects
    return () => {
      window.removeEventListener("resize", resizeListener);
    };
  }, []);
  const memoizedValue = useMemo(() => ({ isMobile }), [isMobile]);
  return (
    <ScreenContext.Provider value={memoizedValue}>
      {children}
    </ScreenContext.Provider>
  );
}

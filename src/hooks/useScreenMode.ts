import { useContext } from "react";
import { ScreenContext } from "../context/screen";

const useScreenMode = () => {
  const context = useContext(ScreenContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

export default useScreenMode;

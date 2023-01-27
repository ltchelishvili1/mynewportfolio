import { createContext, useState } from "react";

export const ModeContext = createContext({
  isDark: true,
  toggleMode: () => {},
});

export const ModeContextProvider = ({ children }) => {
  const [isDark, setIsDark] = useState(
    localStorage.getItem("dark-mode") === "true"
  );

  const toggleMode = () => {
    setIsDark(!isDark);
  };

  const value = {
    toggleMode,
    isDark,
  };
  return <ModeContext.Provider value={value}>{children}</ModeContext.Provider>;
};

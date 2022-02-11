import React, { createContext } from "react";
import { theme } from "./theme";

const ThemeContext = createContext(theme);

type ThemeContextProviderProps = {
  children: React.ReactNode;
};

function ThemeContextProvider({ children }: ThemeContextProviderProps) {
  return (
    <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
  );
}

export { ThemeContext, ThemeContextProvider };

import React, { useContext, useState } from 'react';

type ThemeContext = {
  dark: boolean;
  toggleTheme?: () => void;
};

type ThemeProps = {
  children: React.ReactNode;
};

const defaultState = {
  dark: false,
};

const ThemeContext = React.createContext<ThemeContext>(defaultState);

export const ThemeProvider: React.FC<ThemeProps> = ({ children }) => {
  const [dark, setDark] = useState(defaultState.dark);

  const toggleTheme = () => {
    setDark(!dark);
  };

  return <ThemeContext.Provider value={{ dark, toggleTheme }}>{children}</ThemeContext.Provider>;
};

export const useThemeContext = () => useContext(ThemeContext);

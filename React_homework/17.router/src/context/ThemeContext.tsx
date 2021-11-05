import React, {useLayoutEffect, useState} from 'react';
import {Theme} from '../types';

export interface IThemeContext {
  theme: Theme;
  setTheme: (theme: Theme) => void;
}
interface IThemeProviderProps {
  defaultTheme: Theme;
  children: React.ReactNode;
  storageKey: string;
}

const ThemeContext = React.createContext<IThemeContext>({
  theme: Theme.LIGHT,
  setTheme: () => {},
});

function ThemeProvider({defaultTheme, children, storageKey}: IThemeProviderProps) {
  const [theme, setTheme] = useState<Theme>(defaultTheme);
  const handleThemeChange = (value: Theme) => {
    setTheme(value);
    localStorage.setItem(storageKey, value);
  }
  useLayoutEffect(() => {
    setTheme(() => localStorage.getItem(storageKey) as Theme || defaultTheme);
  }, [defaultTheme, storageKey])

  return <ThemeContext.Provider value={{theme, setTheme: handleThemeChange}}>{children}</ThemeContext.Provider>;
}

export {ThemeContext, ThemeProvider};

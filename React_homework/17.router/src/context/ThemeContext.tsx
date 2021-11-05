import React, {useState} from 'react';
import {Theme} from '../types';

export interface IThemeContext {
  theme: Theme;
  setTheme: (theme: Theme) => void;
}
interface IThemeProviderProps {
  defaultTheme: Theme;
  children: React.ReactNode;
}

const ThemeContext = React.createContext<IThemeContext>({
  theme: Theme.LIGHT,
  setTheme: () => {},
});

function ThemeProvider({defaultTheme, children}: IThemeProviderProps) {
  const [theme, setTheme] = useState<Theme>(defaultTheme);
  return <ThemeContext.Provider value={{theme, setTheme}}>{children}</ThemeContext.Provider>;
}

export {ThemeContext, ThemeProvider};

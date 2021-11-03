import React from 'react';
import {Theme} from '../../types';

export interface IThemeContext {
  theme: Theme;
  setTheme: (theme: Theme) => void;
}
interface IThemeProviderProps {
  defaultTheme: Theme;
  children?: React.ReactNode;
}
interface IThemeProviderState {
  theme: Theme;
}

const ThemeContext = React.createContext<Partial<IThemeContext>>({});

class ThemeProvider extends React.PureComponent<IThemeProviderProps, IThemeProviderState> {
  constructor(props: IThemeProviderProps) {
    super(props);

    this.state = {
      theme: props.defaultTheme,
    };
    this.setTheme = this.setTheme.bind(this);
  }

  private setTheme(theme: Theme): void {
    this.setState({theme});
  }

  render(): React.ReactNode {
    const {children} = this.props;
    const {theme} = this.state;

    return <ThemeContext.Provider value={{theme, setTheme: this.setTheme}}>{children}</ThemeContext.Provider>;
  }
}

export {ThemeContext, ThemeProvider};

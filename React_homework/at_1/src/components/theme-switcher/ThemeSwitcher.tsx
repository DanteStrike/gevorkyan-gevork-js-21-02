import React, {useContext} from 'react';
import {Switch} from 'antd';
import './ThemeSwithcer.scss';
import {Theme, ThemeContext} from '../../context/ThemeContext';

function ThemeSwitcher() {
  const themeContext = useContext(ThemeContext);

  const handleThemeChange = (checked: boolean) => {
    const {setTheme} = themeContext;

    if (checked) {
      setTheme(Theme.DARK);
    } else {
      setTheme(Theme.LIGHT);
    }
  };

  return (
    <Switch
      className="theme-switcher"
      checkedChildren="Темная тема"
      unCheckedChildren="Светлая тема"
      onChange={handleThemeChange}
      checked={themeContext.theme === Theme.DARK}
    />
  );
}

export default ThemeSwitcher;

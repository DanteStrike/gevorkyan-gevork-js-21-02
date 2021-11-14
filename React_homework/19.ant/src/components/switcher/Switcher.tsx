import React, {useContext} from 'react';
import './Switcher.css';
import {Switch} from 'antd';
import {ThemeContext} from '../../context/ThemeContext';
import {Theme} from '../../types';

function Switcher() {
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
      checkedChildren="dark"
      unCheckedChildren="light"
      onChange={handleThemeChange}
      checked={themeContext.theme === Theme.DARK}
    />
  );
}

export default Switcher;

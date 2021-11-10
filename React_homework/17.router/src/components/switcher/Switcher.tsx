import React, {useContext, useLayoutEffect, useState} from 'react';
import './Switcher.css';
import {ThemeContext} from '../../context/ThemeContext';
import {Theme} from '../../types';

function Switcher() {
  const [toggle, setToggle] = useState<boolean>(false);
  const themeContext = useContext(ThemeContext);

  const handleToggleClick = () => {
    const {setTheme} = themeContext;

    if (toggle) {
      setTheme(Theme.LIGHT);
    } else {
      setTheme(Theme.DARK);
    }

    setToggle(!toggle);
  };

  useLayoutEffect(() => {
    if (themeContext.theme === Theme.DARK) {
      setToggle(() => true);
    }
  }, [themeContext.theme]);

  return (
    <div className="switcher">
      <button
        type="button"
        className={`switcher__button ${toggle ? `switcher__button--right` : ``}`.trim()}
        onClick={handleToggleClick}
      />
    </div>
  );
}

export default Switcher;

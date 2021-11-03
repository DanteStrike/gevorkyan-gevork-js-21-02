import React from 'react';
import './Switcher.css';
import {IThemeContext, ThemeContext} from '../context/ThemeContext';
import {Theme} from '../../types';

interface ISwitcherState {
  toggle: boolean;
}

interface ISwitcherProps {}

class Switcher extends React.PureComponent<ISwitcherProps, ISwitcherState> {
  constructor(props: ISwitcherProps) {
    super(props);

    this.state = {
      toggle: false,
    };

    this.handleToggleClick = this.handleToggleClick.bind(this);
  }

  handleToggleClick() {
    const {toggle} = this.state;
    const {setTheme} = this.context as IThemeContext;
    this.setState({toggle: !toggle});
    if (toggle) {
      setTheme(Theme.LIGHT);
    } else {
      setTheme(Theme.DARK);
    }
  }

  static contextType = ThemeContext;

  render(): React.ReactNode {
    const {toggle} = this.state;

    return (
      <div className="switcher">
        <button
          type="button"
          className={`switcher__button ${toggle ? `switcher__button--right` : ``}`.trim()}
          onClick={this.handleToggleClick}
        />
      </div>
    );
  }
}

export default Switcher;

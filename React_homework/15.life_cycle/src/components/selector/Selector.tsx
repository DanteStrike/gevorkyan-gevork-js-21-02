import React from 'react';
import './Selector.css';

interface ISelectorProps {
  options: number[];
  defaultOption: number;
  onChange: (option: number) => void;
}

interface ISelectorState {
  isOpen: boolean;
}

class Selector extends React.PureComponent<ISelectorProps, ISelectorState> {
  constructor(props: ISelectorProps) {
    super(props);

    this.state = {
      isOpen: false,
    };

    this.handleMouseEnter = this.handleMouseEnter.bind(this);
    this.handleMouseLeave = this.handleMouseLeave.bind(this);
    this.handleOptionClick = this.handleOptionClick.bind(this);
  }

  private handleMouseEnter() {
    this.setState({isOpen: true});
  }

  private handleMouseLeave() {
    this.setState({isOpen: false});
  }

  private handleOptionClick(evt: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    const {onChange} = this.props;
    const option = Number((evt.target as HTMLButtonElement).value);
    this.setState({
      isOpen: false,
    });
    onChange(option);
  }

  render(): React.ReactNode {
    const {options, defaultOption} = this.props;
    const {isOpen} = this.state;

    return (
      <div
        className={`selector ${isOpen ? `selector--open` : ``}`.trim()}
        onMouseEnter={this.handleMouseEnter}
        onMouseLeave={this.handleMouseLeave}
      >
        <ul className="selector__options">
          {options.map((option) => (
            <li className="selector__option" key={option}>
              <button className="selector__choose" type="button" value={option} onClick={this.handleOptionClick}>
                {option}
              </button>
            </li>
          ))}
        </ul>
        <button type="button" className="selector__open">
          {defaultOption}
        </button>
      </div>
    );
  }
}

export default Selector;

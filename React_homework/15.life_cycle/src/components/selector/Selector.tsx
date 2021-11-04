import React from 'react';
import './Selector.css';
import {IWithOpenInjectedProps} from '../../hoc/with-hover/with-open';

interface ISelectorProps extends IWithOpenInjectedProps {
  options: number[];
  defaultOption: number;
  onChange: (option: number) => void;
}

function Selector({options, defaultOption, onChange, isOpen, onOpen, onClose}: ISelectorProps) {
  const handleOptionClick = (evt: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    const option = Number((evt.target as HTMLButtonElement).value);
    onClose();
    onChange(option);
  };

  return (
    <div
      className={`selector ${isOpen ? `selector--open` : ``}`.trim()}
      onMouseEnter={() => onOpen()}
      onMouseLeave={() => onClose()}
    >
      <ul className="selector__options">
        {options.map((option) => (
          <li className="selector__option" key={option}>
            <button className="selector__choose" type="button" value={option} onClick={handleOptionClick}>
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

export default Selector;

import React, {useState} from 'react';
import './Selector.css';

interface ISelectorProps {
  options: number[];
  defaultOption: number;
  onChange: (option: number) => void;
}

function Selector({options, defaultOption, onChange}: ISelectorProps) {
  const [isOpen, setIsOpen] = useState(false);
  const handleMouseEnter = () => {
    setIsOpen(true);
  }
  const handleMouseLeave = () => {
    setIsOpen(false);
  }
  const handleOptionClick = (evt: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    const option = Number((evt.target as HTMLButtonElement).value);
    setIsOpen(false);
    onChange(option);
  };

  return (
    <div
      className={`selector ${isOpen ? `selector--open` : ``}`.trim()}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
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

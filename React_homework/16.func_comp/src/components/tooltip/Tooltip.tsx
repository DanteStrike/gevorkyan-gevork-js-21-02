import React, {useState} from 'react';
import './Tooltip.css';

interface ITooltipProps {
  text: string | number;
  children: React.ReactNode;
}

function Tooltip({text, children}: ITooltipProps) {
  const [isShow, setIsShow] = useState<boolean>(false);
  const handleMouseEnter = () => {
    setIsShow(true);
  };
  const handleMouseLeave = () => {
    setIsShow(false);
  };

  return (
    <div className="component-with-tooltip" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      {isShow && (
        <p className="component-with-tooltip__tooltip">
          <span>{text}</span>
        </p>
      )}
      {children}
    </div>
  );
}

export default Tooltip;

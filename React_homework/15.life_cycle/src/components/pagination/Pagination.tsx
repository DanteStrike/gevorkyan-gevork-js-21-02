import React from 'react';
import './Pagination.css';

interface IPaginationProps {
  value: number;
  defaultValue: number;
  onChange: (page: number) => void;
}

function Pagination({value, defaultValue, onChange}: IPaginationProps) {
  const handleChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    const {target} = evt;
    onChange(Number(target.value));
  };

  return (
    <ul className="pagination">
      {[...new Array(value)].map((_, index) => (
        // eslint-disable-next-line react/no-array-index-key
        <li className="pagination__item" key={index}>
          <input
            id={`pagination-${index + 1}`}
            className="pagination__input visually-hidden"
            type="radio"
            name="pagination"
            value={index}
            checked={index === defaultValue}
            onChange={handleChange}
          />
          <label className="pagination__label" htmlFor={`pagination-${index + 1}`}>
            <span>{index + 1}</span>
          </label>
        </li>
      ))}
    </ul>
  );
}

export default React.memo(Pagination);

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

  const generatePagesNum = (length: number, current: number): Array<number | null> => {
    if (length <= 10) {
      return new Array(length).fill(``).map((_, index) => index + 1);
    }

    return new Array(length)
      .fill(null)
      .map((_, index, arr) =>
        index < 3 || index > arr.length - 4 || index === current - 1 || index === current - 2 || index === current
          ? index + 1
          : null
      )
      .filter((el, index, arr) => el !== null || arr[index - 1] !== null);
  };

  return (
    <ul className="pagination">
      {generatePagesNum(value, defaultValue).map((el) => {
        if (el !== null) {
          return (
            <li className="pagination__item" key={el}>
              <input
                id={`pagination-${el}`}
                className="pagination__input visually-hidden"
                type="radio"
                name="pagination"
                value={el}
                checked={el === defaultValue}
                onChange={handleChange}
              />
              <label className="pagination__label" htmlFor={`pagination-${el}`}>
                <span>{el}</span>
              </label>
            </li>
          );
        }

        return (
          <li className="pagination__item">
            <p className="pagination__span">...</p>
          </li>
        );
      })}
    </ul>
  );
}

export default Pagination;

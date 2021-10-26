import React from "react";
import './Filter.css';


export type FilterProps = {
  title: string,
  type: "checkbox" | "radio",
  name: string,
  items: Array<string>
}

const Filter = (
  {
    title,
    type,
    name,
    items,
  }: FilterProps
) => {
  return (
    <fieldset className="filter">
      <legend className="filter__title">{title}</legend>
      <ul className="filter__items">
        {items.map((item, index) =>
          <li className="filter__item" key={index}>
            <input
              className="filter__item-checkbox"
              type={type}
              id={`filter-${name}-${index}`}
              value={index}
              name={name}
            />
            <label className="filter__item-name" htmlFor={`filter-${name}-${index}`}>{item}</label>
          </li>
        )}
      </ul>
    </fieldset>
  );
}


export {Filter};

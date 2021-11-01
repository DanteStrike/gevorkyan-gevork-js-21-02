import React from "react";
import "./Filters.css";
import {FilterType} from "../../types";

interface IFiltersProps {
  initialFilter?: FilterType,
  filters?: FilterType[],
  onChange?: (filter: FilterType) => void
}

const Filters = (
  {
    initialFilter = FilterType.DEFAULT,
    filters = [],
    onChange = () => {}
  }: IFiltersProps
) => {
  return (
    <form className="filters">
      {filters.map((filter, index) => (
          <div className="filters__wrap" key={index}>
            <input
              className="filters__filter visually-hidden"
              name="filters"
              type="radio"
              id={`filters-${index}`}
              defaultValue={filter}
              defaultChecked={initialFilter === filter}
              onChange={() => onChange(filter)}
            />
            <label className="filters__filter-name" htmlFor={`filters-${index}`}>{filter}</label>
          </div>
        )
      )}
    </form>
  );
}

export default Filters;

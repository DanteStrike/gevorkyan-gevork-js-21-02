import React from "react";
import "./Sort.css";
import {SortType} from "../../types";

interface ISortProps {
  initialSort?: SortType,
  sortItems?: SortType[],
  onChange?: (sort: SortType) => void,
}

const Sort = (
  {
    initialSort = SortType.DEFAULT,
    sortItems = [],
    onChange = () => {},
  }: ISortProps
) => {
  return (
    <form className="sort">
      {sortItems.map((sort, index) => (
          <div className="sort__wrap" key={index}>
            <input
              className="sort__item visually-hidden"
              name="sorts"
              type="radio"
              id={`sort-${index}`}
              defaultValue={sort}
              defaultChecked={initialSort === sort}
              onChange={() => onChange(sort)}
            />
            <label className="sort__item-name" htmlFor={`sort-${index}`}>{sort}</label>
          </div>
        )
      )}
    </form>
  );
}

export default Sort;

import React from 'react';
import "./List.scss";

interface IListProps<T> {
  dataSource: T[];
  renderItem: (item: T, index: number) => React.ReactNode;
}

function List<T>({dataSource, renderItem}: IListProps<T>) {
  return (
    <div className="list">
      <ul className="list__container">
        {dataSource.map(renderItem)}
      </ul>
      <div className="list__pagination"/>
    </div>
  );
}

interface ListItemProps {
  children: React.ReactNode
}
List.Item = ({children}: ListItemProps) => (
    <li className="list__item">
      {children}
    </li>
  )

// @ts-ignore
List.Item.displayName = `List.Item`

export default List;

import React from 'react';
import {List} from 'antd';

const enum AppListMod {
  TABLE = `table`,
  ROW = `row`,
  SMALL_ROW = `smallRow`,
}

const listLayout = {
  table: {
    gutter: 15,
    xs: 1,
    sm: 2,
    md: 2,
    lg: 3,
    xl: 3,
    xxl: 3,
  },
  row: {
    gutter: 15,
    xs: 1,
    sm: 1,
    md: 3,
    lg: 3,
    xl: 3,
    xxl: 3,
  },
  smallRow: {
    gutter: 15,
    xs: 1,
    sm: 1,
    md: 2,
    lg: 2,
    xl: 2,
    xxl: 2,
  },
};

interface IAppListProps<T> {
  dataSource: T[];
  renderItem: (item: T, index: number) => React.ReactNode;
  current: number;
  total: number;
  onChange: (page: number) => void;
  isLoading: boolean;
  mod?: AppListMod;
}

function AppList<T>({
  dataSource,
  current,
  total,
  onChange,
  isLoading,
  renderItem,
  mod = AppListMod.TABLE,
}: IAppListProps<T>) {
  return (
    <List
      dataSource={dataSource}
      renderItem={renderItem}
      grid={listLayout[mod]}
      loading={isLoading}
      pagination={{
        defaultCurrent: 1,
        current,
        total,
        showSizeChanger: false,
        onChange,
        disabled: isLoading,
      }}
    />
  );
}

AppList.Item = List.Item;

AppList.defaultProps = {
  mod: AppListMod.TABLE,
};

export default AppList;

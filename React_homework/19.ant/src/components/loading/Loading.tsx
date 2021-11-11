import React from 'react';
import {Spin} from 'antd';
import './Loading.css';

interface ILoadingProps {
  isLoading: boolean;
  children: React.ReactNode;
}

function Loading({isLoading, children}: ILoadingProps) {
  return (
    <div className="component-with-loading">
      {isLoading && (
        <div className="component-with-loading__loading">
          <Spin tip="Loading..." size="large"/>
        </div>
      )}
      {children}
    </div>
  );
}

export default Loading;

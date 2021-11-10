import React from 'react';
import './Loading.css';

interface ILoadingProps {
  isLoading: boolean;
  children: React.ReactNode;
}

function Loading({isLoading, children}: ILoadingProps) {
  return (
    <div className="component-with-loading">
      {isLoading && (
        <p className="component-with-loading__loading">
          <span>Loading...</span>
        </p>
      )}
      {children}
    </div>
  );
}

export default Loading;

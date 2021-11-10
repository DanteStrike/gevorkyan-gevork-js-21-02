import React from 'react';
import './ComponentWithLoading.css';
import getHOCDisplayName from '../../utils/get-hoc-display-name';

interface IWithLoadingProps {
  isLoading: boolean;
}

function withLoading<P extends object>(WrappedComponent: React.ComponentType<P>) {
  class WithLoading extends React.PureComponent<P & IWithLoadingProps> {
    static displayName = getHOCDisplayName(WrappedComponent, WithLoading);

    render(): React.ReactNode {
      const {isLoading, ...props} = this.props;
      return (
        <div className="component-with-loading">
          {isLoading && (
            <p className="component-with-loading__loading">
              <span>Loading...</span>
            </p>
          )}
          {/* eslint-disable-next-line react/jsx-props-no-spreading */}
          <WrappedComponent {...(props as P)} />
        </div>
      );
    }
  }

  return WithLoading;
}

export default withLoading;

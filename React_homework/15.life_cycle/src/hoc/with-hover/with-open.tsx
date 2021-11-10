/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import {Subtract} from '../../types';
import getHOCDisplayName from '../../utils/get-hoc-display-name';

interface IWithOpenProps {}
interface IWithOpenState {
  isOpen: boolean;
}
export interface IWithOpenInjectedProps {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

function withOpen<P extends IWithOpenInjectedProps>(WrappedComponent: React.ComponentType<P>) {
  class WithOpen extends React.PureComponent<Subtract<P, IWithOpenInjectedProps> & IWithOpenProps, IWithOpenState> {
    static displayName = getHOCDisplayName(WrappedComponent, WithOpen);

    constructor(props: Subtract<P, IWithOpenInjectedProps>) {
      super(props);

      this.state = {
        isOpen: false,
      };

      this.handleOpen = this.handleOpen.bind(this);
      this.handleClose = this.handleClose.bind(this);
    }

    private handleOpen() {
      this.setState({isOpen: true});
    }

    private handleClose() {
      this.setState({isOpen: false});
    }

    render(): React.ReactNode {
      const {isOpen} = this.state;

      return (
        <WrappedComponent {...(this.props as P)} isOpen={isOpen} onOpen={this.handleOpen} onClose={this.handleClose} />
      );
    }
  }

  return WithOpen;
}

export default withOpen;

import React from 'react';
import './ComponentWithTooltip.css';
import getHOCDisplayName from '../../utils/get-hoc-display-name';
import {IWithOpenInjectedProps} from '../with-hover/with-open';
import {Subtract} from '../../types';

interface IWithTooltipProps extends IWithOpenInjectedProps {}
interface IWithTooltipState {
  text: string;
}
interface IWithTooltipInjectedProps {
  setTooltipText: (text: string) => void;
}

function withTooltip<P extends IWithTooltipInjectedProps>(WrappedComponent: React.ComponentType<P>) {
  class WithTooltip extends React.PureComponent<
    Subtract<P, IWithTooltipInjectedProps> & IWithTooltipProps,
    IWithTooltipState
  > {
    static displayName = getHOCDisplayName(WrappedComponent, WithTooltip);

    constructor(props: Subtract<P, IWithTooltipInjectedProps> & IWithTooltipProps) {
      super(props);

      this.state = {
        text: ``,
      };

      this.setText = this.setText.bind(this);
    }

    private setText(text: string) {
      this.setState({text});
    }

    render(): React.ReactNode {
      const {text} = this.state;
      const {isOpen, onOpen, onClose, ...props} = this.props;

      return (
        <div className="component-with-tooltip" onMouseEnter={() => onOpen()} onMouseLeave={() => onClose()}>
          {isOpen && (
            <p className="component-with-tooltip__tooltip">
              <span>{text}</span>
            </p>
          )}
          {/* eslint-disable-next-line react/jsx-props-no-spreading */}
          <WrappedComponent {...(props as unknown as P)} setTooltipText={this.setText} />
        </div>
      );
    }
  }

  return WithTooltip;
}

export default withTooltip;

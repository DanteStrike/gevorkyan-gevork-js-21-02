import React from 'react';
import './SubmitButton.scss';
import {Button as ButtonANDT} from 'antd';

interface ISubmitButtonProps {
  children?: React.ReactNode;
}

function SubmitButton({children}: ISubmitButtonProps) {
  return (
    <ButtonANDT className="button" type="primary" htmlType="submit" block>
      {children}
    </ButtonANDT>
  );
}

SubmitButton.defaultProps = {
  children: ``,
};

export default React.memo(SubmitButton);

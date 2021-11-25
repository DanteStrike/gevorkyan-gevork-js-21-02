import React from 'react';
import './SubmitButton.scss';
import {Button as ButtonANDT} from 'antd';

// eslint-disable-next-line react/require-default-props
function SubmitButton({children = ``}: {children?: React.ReactNode}) {
  return (
    <ButtonANDT className="button" type="primary" htmlType="submit" block>
      {children}
    </ButtonANDT>
  );
}

export default React.memo(SubmitButton);

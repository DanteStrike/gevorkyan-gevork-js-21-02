import React from 'react';
import "./Logo.scss";
import {TwitterCircleFilled} from '@ant-design/icons';

function Logo() {
  return (
    <div className="logo">
      <TwitterCircleFilled className="logo__icon"/>
      <p className="logo__title">Delta World</p>
    </div>
  );
};

export default Logo;

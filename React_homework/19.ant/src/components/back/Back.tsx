import React from 'react';
import {Button} from 'antd';
import {useHistory} from 'react-router-dom';
import './Back.css';

function Back() {
  const history = useHistory();
  const handleClick = () => {
    history.goBack();
  };

  return (
    <Button className="back" type="primary" onClick={handleClick}>
      Назад
    </Button>
  );
}

export default Back;

import React from "react";
import {useHistory} from "react-router-dom";
import "./Back.css";

function Back() {
  const history = useHistory();
  const handleClick = () => {
    history.goBack();
  }

  return (
    <button className="back" type="button" onClick={handleClick}>Назад</button>
  )
}

export default Back;

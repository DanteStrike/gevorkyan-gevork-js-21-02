import React from "react";
import {Link} from "react-router-dom";
import "./PageNotFound.css";

function PageNotFound() {
  return (
    <div className="page-not-found">
      <h1>404.</h1>
      <p>Page not found</p>
      <Link to="/">На главную</Link>
    </div>
  )
}

export default PageNotFound;

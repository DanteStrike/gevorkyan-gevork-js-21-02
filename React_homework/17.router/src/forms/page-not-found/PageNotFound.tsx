import React from 'react';
import './PageNotFound.css';
import CustomLink from '../../components/custom-link/CustomLink';

function PageNotFound() {
  return (
    <div className="page-not-found">
      <h1>404.</h1>
      <p>Page not found</p>
      <CustomLink to="/" text="На главную" />
    </div>
  );
}

export default PageNotFound;

import React from 'react';
import {PageHeader} from "antd";
import {useHistory} from 'react-router-dom';

function PageNotFound() {
  const history = useHistory();

  return (
    <div id="page-not-found">
      <PageHeader title="Error: 404 - Page not found" onBack={() => history.goBack()}/>
    </div>
  );
}

export default PageNotFound;

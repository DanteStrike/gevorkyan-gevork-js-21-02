import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.min.css';
import './index.scss';
import 'overlayscrollbars/css/OverlayScrollbars.css';
import OverlayScrollbars from 'overlayscrollbars';
import App from './App';

OverlayScrollbars(document.body, {
  nativeScrollbarsOverlaid: {
    initialize: false,
  },
});

const init = () => {
  ReactDOM.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    document.getElementById('root')
  );
};
init();

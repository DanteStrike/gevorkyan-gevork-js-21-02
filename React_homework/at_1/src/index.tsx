import React from 'react';
import {HashRouter as Router} from 'react-router-dom';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.min.css';
import './index.scss';
import 'overlayscrollbars/css/OverlayScrollbars.css';
import OverlayScrollbars from 'overlayscrollbars';
import App from './App';
import ScrollToTop from "./components/scroll-to-top/ScrollToTop";

OverlayScrollbars(document.body, {
  nativeScrollbarsOverlaid: {
    initialize: false,
  },
});

const init = () => {
  ReactDOM.render(
    <React.StrictMode>
      <Router>
        <ScrollToTop />
        <App />
      </Router>
    </React.StrictMode>,
    document.getElementById('root')
  );
};
init();

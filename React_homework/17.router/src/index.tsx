import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {HashRouter as Router} from 'react-router-dom';
import App from './App';
import Api from './server/api';
import serveConfig from './configs/serve-config';
import {ThemeProvider} from './context/ThemeContext';
import {Theme} from './types';
import ScrollToTop from './components/scroll-to-top/ScrollToTop';

const api = new Api(serveConfig);

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider defaultTheme={Theme.LIGHT}>
      <Router>
        <ScrollToTop />
        <App api={api} />
      </Router>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

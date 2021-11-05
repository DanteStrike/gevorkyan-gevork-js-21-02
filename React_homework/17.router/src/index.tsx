import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Api from './server/api';
import serveConfig from './configs/serve-config';
import {ThemeProvider} from './context/ThemeContext';
import {Theme} from './types';

const api = new Api(serveConfig);

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider defaultTheme={Theme.LIGHT}>
      <App api={api} />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

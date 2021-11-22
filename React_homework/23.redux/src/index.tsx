import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter as Router} from 'react-router-dom';
import {AnyAction, Store} from 'redux';
import {Provider} from 'react-redux';
import './index.css';
import 'antd/dist/antd.min.css';
import App from './App';
import {ThemeProvider} from './context/ThemeContext';
import {Theme} from './app-types';
import ScrollToTop from './components/scroll-to-top/ScrollToTop';
import configuredStore from './reducers/reducers';

const init = (store: Store<any, AnyAction>) => {
  ReactDOM.render(
    <React.StrictMode>
      <Provider store={store}>
        <ThemeProvider defaultTheme={Theme.LIGHT} storageKey="app-theme">
          <Router>
            <ScrollToTop />
            <App />
          </Router>
        </ThemeProvider>
      </Provider>
    </React.StrictMode>,
    document.getElementById('root')
  );
};

init(configuredStore);

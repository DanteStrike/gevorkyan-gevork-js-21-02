import React from 'react';
import {HashRouter as Router} from 'react-router-dom';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import 'antd/dist/antd.min.css';
import './index.scss';
import 'overlayscrollbars/css/OverlayScrollbars.css';
import OverlayScrollbars from 'overlayscrollbars';
import App from './App';
import ScrollToTop from './components/scroll-to-top/ScrollToTop';
import {ThemeProvider} from './context/ThemeContext';
import configuredStore from './store';
import {authOperations} from './store/auth';
import {authStorageKey} from './store/auth/types';

OverlayScrollbars(document.body, {
  nativeScrollbarsOverlaid: {
    initialize: false,
  },
  overflowBehavior: {
    x: 'hidden',
  },
});

const init = (store: typeof configuredStore) => {
  const id = localStorage.getItem(authStorageKey) || ``;
  if (id !== ``) {
    configuredStore.dispatch(authOperations.login(id));
  }

  ReactDOM.render(
    <React.StrictMode>
      <Provider store={store}>
        <ThemeProvider storageKey="app-theme">
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

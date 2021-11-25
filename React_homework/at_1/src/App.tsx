import React from 'react';
import './App.scss';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Users from './forms/users/Users';

function App() {
  return (
    <div className="app">
      <div className="app__header">
        <Header />
      </div>
      <div className="app__content">
        <Users />
      </div>
      <div className="app__footer">
        <Footer />
      </div>
    </div>
  );
}

export default App;

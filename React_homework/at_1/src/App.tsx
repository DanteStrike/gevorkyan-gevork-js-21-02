import React from 'react';
import './App.scss';
import {Route, Switch, Redirect} from 'react-router-dom';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Posts from './forms/posts/Posts';
import PageNotFound from "./forms/page-not-found/PageNotFound";
import Users from "./forms/users/Users";
import Login from "./forms/login/Login";
import Registration from "./forms/registration/Registration";
import Profile from "./forms/profile/Profile";

function App() {
  return (
    <div className="app">
      <div className="app__header">
        <Header />
      </div>
      <div className="app__content">
        <Switch>
          <Route exact path="/">
            <Redirect to="/registration" />
          </Route>
          <Route exact path="/login" render={() => <Login/>}/>
          <Route exact path="/registration" render={() => <Registration/>}/>
          <Route exact path="/profile" render={() => <Profile/>}/>
          <Route exact path="/users" render={() => <Users/>}/>
          <Route exact path="/posts" render={() => <Posts/>}/>
          <Route render={() => <PageNotFound/>} />
        </Switch>
      </div>
      <div className="app__footer">
        <Footer />
      </div>
    </div>
  );
}

export default App;

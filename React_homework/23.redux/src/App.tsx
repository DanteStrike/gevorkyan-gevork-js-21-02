import React, {useContext} from 'react';
import './App.css';
import {Redirect, Route, Switch, RouteComponentProps} from 'react-router-dom';
import {ThemeContext} from './context/ThemeContext';
import UsersListForm from './forms/users-list-form/UsersListForm';
import UserProfileForm from './forms/user-profile-form/UserProfileForm';
import PageNotFound from './forms/page-not-found/PageNotFound';
import AppMenu from './components/app-menu/AppMenu';
import RegistrationForm from './forms/registration-form/RegistrationForm';

interface IUserProfileMatchParams {
  id: string;
}

function App() {
  const {theme} = useContext(ThemeContext);

  return (
    <div className={`app app--theme_${theme}`}>
      <AppMenu />
      <main className="app__container">
        <Switch>
          <Route exact path="/">
            <Redirect to="/users" />
          </Route>
          <Route exact path="/users" render={() => <UsersListForm />} />
          <Route
            exact
            path="/user/:id"
            component={({
              match: {
                params: {id},
              },
            }: RouteComponentProps<IUserProfileMatchParams>) => <UserProfileForm id={id} />}
          />
          <Route exact path="/registration" component={() => <RegistrationForm />} />
          <Route component={PageNotFound} />
        </Switch>
      </main>
    </div>
  );
}

export default App;

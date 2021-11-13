import React, {useContext} from 'react';
import './App.css';
import {Redirect, Route, RouteComponentProps, Switch} from 'react-router-dom';
import {IApi} from './types';
import {ThemeContext} from './context/ThemeContext';
import UsersListForm from './forms/users-list-form/UsersListForm';
import UserProfileForm from './forms/user-profile-form/UserProfileForm';
import PageNotFound from './forms/page-not-found/PageNotFound';
import AppMenu from './components/app-menu/AppMenu';
import RegistrationForm from './forms/registration-form/RegistrationForm';

interface IAppProps {
  api: IApi;
}

interface IUserProfileMatchParams {
  id: string;
}

function App({api}: IAppProps) {
  const {theme} = useContext(ThemeContext);

  return (
    <div className={`app app--theme_${theme}`}>
      <AppMenu />
      <main className="app__container">
        <Switch>
          <Route exact path="/">
            <Redirect to="/users" />
          </Route>
          <Route exact path="/users" render={() => <UsersListForm api={api} />} />
          <Route
            exact
            path="/user/:id"
            component={({
              match: {
                params: {id},
              },
            }: RouteComponentProps<IUserProfileMatchParams>) => <UserProfileForm id={id} api={api} />}
          />
          <Route exact path="/registration" component={() => <RegistrationForm api={api} />} />
          <Route component={PageNotFound} />
        </Switch>
      </main>
    </div>
  );
}

export default App;

import React, {useContext} from 'react';
import './App.css';
import {Switch, Route, RouteComponentProps, Redirect} from 'react-router-dom';
import {IApi} from './types';
import {ThemeContext} from './context/ThemeContext';
import UsersListForm from './forms/users-list-form/UsersListForm';
import UserProfileForm from './forms/user-profile-form/UserProfileForm';
import PageNotFound from './forms/page-not-found/PageNotFound';

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
          <Route component={PageNotFound} />
        </Switch>
      </main>
    </div>
  );
}

export default App;

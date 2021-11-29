import React from 'react';
import {Redirect, Route, RouteComponentProps, Switch} from 'react-router-dom';
import Login from '../../forms/login/Login';
import Registration from '../../forms/registration/Registration';
import Profile from '../../forms/profile/Profile';
import Post from '../../forms/post/Post';
import Users from '../../forms/users/Users';
import Posts from '../../forms/posts/Posts';
import PageError from '../../forms/page-error/PageError';
import useAppSelector from '../../hooks/use-app-selector';
import {authSelectors} from '../../store/auth';
import Edit from '../../forms/edit/Edit';

interface IIDMatchParams {
  id: string;
}
interface IWithPostID extends IIDMatchParams {
  postID: string;
}

function Routes() {
  const authID = useAppSelector(authSelectors.getID);

  return (
    <Switch>
      <Route exact path="/">
        <Redirect to="/registration" />
      </Route>
      <Route exact path="/login" component={() => <Login />} />
      <Route exact path="/registration" component={() => <Registration />} />
      <Route
        exact
        path="/profile/:id"
        render={({
          match: {
            params: {id},
          },
        }: RouteComponentProps<IIDMatchParams>) => <Profile id={id} />}
      />
      <Route
        exact
        path="/profile/:id/edit"
        render={({
          match: {
            params: {id},
          },
        }: RouteComponentProps<IIDMatchParams>) =>
          authID === id ? (
            <>
              <Profile id={id} />
              <Edit />
            </>
          ) : (
            <Redirect to="/denied" />
          )
        }
      />
      <Route
        exact
        path="/profile/:id/:postID"
        render={({
          match: {
            params: {id, postID},
          },
        }: RouteComponentProps<IWithPostID>) => (
          <>
            <Profile id={id} />
            <Post id={postID} />
          </>
        )}
      />
      <Route exact path="/users" component={() => <Users />} />
      <Route exact path="/posts" render={() => <Posts />} />
      <Route
        path="/posts/:id"
        exact
        render={({
          match: {
            params: {id},
          },
        }: RouteComponentProps<IIDMatchParams>) => (
          <>
            <Posts />
            <Post id={id} />
          </>
        )}
      />
      <Route exact path="/denied" render={() => <PageError title="Error: 403" text="Нет доступа" />} />
      <Route render={() => <PageError title="Error: 404" text="Страница не найдена" />} />
    </Switch>
  );
}

export default React.memo(Routes);

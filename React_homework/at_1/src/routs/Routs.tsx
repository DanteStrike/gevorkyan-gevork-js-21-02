import React from 'react';
import {Redirect, Route, RouteComponentProps, Switch} from "react-router-dom";
import Login from "../forms/login/Login";
import Registration from "../forms/registration/Registration";
import Profile from "../forms/profile/Profile";
import Post from "../forms/post/Post";
import Users from "../forms/users/Users";
import Posts from "../forms/posts/Posts";
import PageNotFound from "../forms/page-not-found/PageNotFound";
import useAppSelector from "../hooks/use-app-selector";
import {authSelectors} from "../store/auth";

interface IIDMatchParams {
  id: string;
}
interface IWithPostID extends IIDMatchParams {
  postID: string;
}

function Routs() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const isAuth = useAppSelector(authSelectors.getIsAuth)

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
                 }: RouteComponentProps<IIDMatchParams>) => <Profile id={id} />}
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
      <Route exact path="/posts/" render={() => <Posts />} />
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
      <Route render={() => <PageNotFound />} />
    </Switch>
  );
}

export default Routs;

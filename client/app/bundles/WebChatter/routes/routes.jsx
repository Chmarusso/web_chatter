import React from 'react';
import { Route, IndexRoute } from 'react-router';
import BaseLayout from '../layout/BaseLayout';
import Home from '../components/Home';
import User from '../components/User';
import Chats from '../components/Chats';
import EnsureUserLoggedInContainer from '../containers/EnsureUserLoggedInContainer';

export default (
  <Route path="/" component={BaseLayout}>
    <IndexRoute component={Home}/>
    <Route component={EnsureUserLoggedInContainer}>
      <Route path="user" component={User}/>
      <Route path="chats" component={Chats}/>
    </Route>
  </Route>
);

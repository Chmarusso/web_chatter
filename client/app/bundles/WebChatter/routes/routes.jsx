import React from 'react';
import { Route, IndexRoute } from 'react-router';
import BaseLayout from '../layout/BaseLayout';
import Home from '../components/Home';

export default (
  <Route path="/" component={BaseLayout}>
    <IndexRoute component={Home}/>
  </Route>
);

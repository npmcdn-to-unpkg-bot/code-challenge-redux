import React from 'react';
import { Route } from 'react-router';
import App from './containers/App';
import CodeArea from './containers/CodeArea';

export default (
  <Route path="/" component={App}>
    <Route path="/challenge" component={CodeArea} />
  </Route>
);

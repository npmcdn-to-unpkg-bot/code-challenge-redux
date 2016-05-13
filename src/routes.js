import React from 'react';
import { Route, IndexRoute, Redirect } from 'react-router';
import App from './containers/App';
import Home from './components/Home';
import Login from './containers/Login';
import Challenge from './containers/Challenge';

// bring in all challenge files
import FundamentalsPage from './components/challenges/01-js-fundamentals/Page';

export default (
  <Route path= "/" component={App}>
    <IndexRoute component={Home} />
    <Redirect from="challenge" to="/challenge/01-js-fundamentals" />
    <Route path="/challenge" component={Challenge}>
      <Route path="01-js-fundamentals" component={FundamentalsPage} />
    </Route>
    <Route path="/login" component={Login} />
  </Route>
);

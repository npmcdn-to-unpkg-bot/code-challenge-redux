/* Polyfill is recommended by redux docs as it fills in many holes in old browsers that
 * don't have the full modern JS API. Not using for now since it adds 100kb to the build
 * size. Will think about adding if certain features don't work on old browsers.
 */
// import 'babel-polyfill';
import '../scss/application.scss';

import React from 'react';
import { render } from 'react-dom';
import { browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import Root from './containers/Root';
import configureStore from './store/configureStore';

const store = configureStore(/*can pass in initial state*/);
const history = syncHistoryWithStore(browserHistory, store);

render(
  <Root store={store} history={history} />,
  document.getElementById('root')
);

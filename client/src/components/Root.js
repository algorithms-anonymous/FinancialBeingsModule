// @flow

import React from 'react';
import { ConnectedRouter } from 'connected-react-router';
import { Provider } from 'react-redux';
import App from './App';

type PropsT = {
  store: Object,
  history: Object,
}

const Root = ({ store, history } : PropsT) => (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App />
    </ConnectedRouter>
  </Provider>
);
export default Root;
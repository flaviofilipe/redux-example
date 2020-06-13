import React from 'react';
import { Provider } from 'react-redux';

import Routes from './src/routes';
import Home from './src/pages/Home';
import store from './src/store';

export default function App() {
  return (
    <Provider store={store}>
      <Routes />
    </Provider>
  );
}


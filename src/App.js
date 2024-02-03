import RouterProvider from './RouterProvider'
import React from 'react';
import { Provider } from 'react-redux';
import store from './configure-store';

const App = () => (
  <Provider store={store}>
    <RouterProvider />
  </Provider>
);

export default App;

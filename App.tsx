// App.js
import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import NumberAdder from './NumberAdder';

const App = () => {
  return (
    <Provider store={store}>
      <NumberAdder />
    </Provider>
  );
};

export default App;

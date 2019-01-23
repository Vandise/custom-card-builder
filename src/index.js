import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { store } from './builder/store';

import styles from './styles/main';

const EL = document.getElementById('app');

export default ReactDOM.render(
  <Provider store={store}>
    <p>this is the card builder</p>
  </Provider>, EL
);
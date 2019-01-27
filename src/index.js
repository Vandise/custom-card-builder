import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { store } from './builder/store';

import TxtBoxFrm from './builder/widgets/forms/textBoxForm';

import styles from './styles/main';

const EL = document.getElementById('app');

export default ReactDOM.render(
  <Provider store={store}>
    <TxtBoxFrm type='test' />
  </Provider>, EL
);
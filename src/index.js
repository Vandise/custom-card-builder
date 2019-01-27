import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { store } from './builder/store';

import TxtBoxFrm from './builder/widgets/forms/textBoxForm';
import CardPreviewContainer from './builder/containers/cardBuilderContainer';

import styles from './styles/main';

const EL = document.getElementById('app');

window.store = store;

export default ReactDOM.render(
  <Provider store={store}>
    <div>
      <TxtBoxFrm type='TEXT_BOX' />
      <CardPreviewContainer />
    </div>
  </Provider>, EL
);
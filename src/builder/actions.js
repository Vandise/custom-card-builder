import { createAction } from 'redux-actions';

export const ADD_FIELD = createAction(
  'ADD_FIELD', (field) => { return { field }; }
);

export const RESET = createAction('RESET');
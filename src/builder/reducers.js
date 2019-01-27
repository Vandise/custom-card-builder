import { handleActions } from 'redux-actions';

export const modalReducerState = {
  open: false
};

export const modalReducer = handleActions({

  RESET: (state, action) => {
    return Object.assign({}, state, modalReducerState);
  },

  TOGGLE_MODAL: (state, action) => {
    return {
      ...state,
      open: !state.open
    };
  },

}, modalReducerState);


export const cardBuilderReducerState = {
  name: 'Card title',
  fields: [],
};

export const cardBuilderReducer = handleActions({

  RESET: (state, action) => {
    return Object.assign({}, state, cardBuilderReducerState);
  },

  ADD_FIELD: (state, action) => {
    const { field } = action.payload;
    const fields = state.fields;

    fields.push(field);

    return {
      ...state,
      fields
    };
  },

}, cardBuilderReducerState);
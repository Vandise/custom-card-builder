import { handleActions } from 'redux-actions';

export const modalReducer = handleActions({

  TOGGLE_MODAL: (state, action) => {
    return {
      ...state,
      open: !state.open
    };
  },

}, {
  open: false,
});

export const cardBuilderReducer = handleActions({

  ADD_FIELD: (state, action) => {
    const { field } = action.payload;
    const fields = state.fields;

    fields.push(field);

    return {
      ...state,
      fields
    };
  },

}, {
  name: 'Card title',
  fields: [],
});
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
  
}, {
  name: 'Card title',
  fields: [],
});
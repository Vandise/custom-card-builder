import thunk from 'redux-thunk';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { modalReducer, cardBuilderReducer } from './reducers';

export const initialState = {};

export const store = createStore(combineReducers({
    modal: modalReducer,
    cardBuilder: cardBuilderReducer,
  }), initialState,
  applyMiddleware(thunk)
);
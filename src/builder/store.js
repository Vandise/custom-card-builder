import thunk from 'redux-thunk';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { modalReducer } from './reducers';

export const initialState = {};

export const store = createStore(combineReducers({
    modal: modalReducer
  }), initialState,
  applyMiddleware(thunk)
);
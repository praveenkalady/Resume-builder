import { createStore,applyMiddleware,compose } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './reducers/rootReducer';
import  thunk  from 'redux-thunk'; //

const initialState = {};
const middlewares = [thunk];
const store = createStore(rootReducer, initialState,compose(applyMiddleware(...middlewares),composeWithDevTools()));

export default store;
import { legacy_createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import {cartReducer} from './reducers/cartReducer';

import { getProductReducer } from './reducers/productReducer';

const rootReducer = combineReducers({
  
  getProducts: getProductReducer,
  cart : cartReducer,
});

const middleware = [thunk];

const store = legacy_createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;

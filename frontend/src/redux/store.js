import {
  legacy_createStore,
  combineReducers,
  compose,
  applyMiddleware,
} from "redux";
import ProductReducer from "./Product/reducerProduct";
import {reducer as AdminAuthReducer} from "./AdminAuthRedux/reducer"


import thunk from "redux-thunk";

const root_reducer = combineReducers({
  ProductReducer,
  AdminAuthReducer, 
});

const composeEnhancers = window._REDUX_DEVTOOLS_EXTENSION_COMPOSE_ || compose;

export const store = legacy_createStore(
  root_reducer,
  composeEnhancers(applyMiddleware(thunk))
);

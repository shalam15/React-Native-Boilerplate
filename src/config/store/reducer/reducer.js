import thunk from "redux-thunk";
import { createStore, applyMiddleware, combineReducers } from "redux";
import auth from "../app/auth/reducer";

const nav = (state = {}) => state;

const appReducer = combineReducers({
  nav,
  auth,
});

export default createStore(appReducer, applyMiddleware(thunk));

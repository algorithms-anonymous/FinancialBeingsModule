// Set up your root reducer here...
import { combineReducers } from 'redux';
import { routerReducer as routing } from "react-router-redux";
import { reducer as form } from "redux-form";
import auth from "./auth/reducer";

const rootReducer = combineReducers({
  routing,
  form,
  auth,
});

export default rootReducer;

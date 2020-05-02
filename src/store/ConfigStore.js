import { combineReducers, createStore, applyMiddleware, compose } from "redux";
import { reducer as formReducer } from "redux-form";
import Users from "../reducer/Users";
//const middlewares = applyMiddleware(mylogger, thunk)
export default () => {
  const store = createStore(
    combineReducers({
      Users,
    })
  );

  return store;
};

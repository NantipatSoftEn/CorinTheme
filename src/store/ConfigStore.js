import { combineReducers, createStore, applyMiddleware, compose } from "redux";
import { reducer as formReducer } from "redux-form";
//const middlewares = applyMiddleware(mylogger, thunk)
export default () => {
  const store = createStore(
    combineReducers({
 
    })
  );

  return store;
};

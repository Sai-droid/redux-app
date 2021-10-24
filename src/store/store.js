import { createStore, combineReducers, applyMiddleware } from "redux";
import reducer from '../reducers/reducer'
import loanReducer from "../reducers/loanReducer";
import breadReducer from "../reducers/breadReducer";
import costReducer from "../reducers/costReducer";
import thunk from "redux-thunk";

export default function configureStore() {

  return createStore(
 
    combineReducers({ reducer, loanReducer, breadReducer, costReducer }),
    // applyMiddleware(thunk)
    
  );
}



import {createStore, combineReducers, applyMiddleware} from "redux";
import {thunk} from "redux-thunk"; // แก้ไขการนำเข้า thunk

import accountReducer from "./features/accounts/AccountSlice";
import customerReducer from "./features/customers/customerSlice";

const rootReducer = combineReducers({
  account: accountReducer,
  customer: customerReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;

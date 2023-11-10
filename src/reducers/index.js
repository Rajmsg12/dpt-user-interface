import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import cartReducer from "../components/cart/CartReducer.js";
import userReducer from '../components/common/HeaderReducer.js';
export default combineReducers({
  form: formReducer,
  cart: cartReducer,
  user: userReducer,
});

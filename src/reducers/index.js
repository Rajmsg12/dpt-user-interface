import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import cartReducer from "../components/cart/CartReducer.js";
export default combineReducers({
  form: formReducer,
  cart: cartReducer,
});

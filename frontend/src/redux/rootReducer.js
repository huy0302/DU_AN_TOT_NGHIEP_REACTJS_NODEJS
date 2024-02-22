// @ts-nocheck
import currencyReducer from "./reducers/currencyReducer";
import productReducer from "./reducers/productReducer";
import cartReducer from "./reducers/cartReducer";
import wishlistReducer from "./reducers/wishlistReducer";
import compareReducer from "./reducers/compareReducer";
import { combineReducers } from "redux";
import { createMultilanguageReducer } from "redux-multilanguage";
import { commonReducer } from "./reducers/commonReducer";

const rootReducer = combineReducers({
  multilanguage: createMultilanguageReducer({ currentLanguageCode: "en" }),
  currencyData: currencyReducer,
  productData: productReducer,
  cartData: cartReducer,
  wishlistData: wishlistReducer,
  compareData: compareReducer,
  commonReducer: commonReducer
});

export default rootReducer;

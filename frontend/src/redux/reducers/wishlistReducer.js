import { getItem } from "../../services";
import {
  ADD_TO_WISHLIST,
  DELETE_FROM_WISHLIST,
  DELETE_ALL_FROM_WISHLIST
} from "../actions/wishlistActions";

const initState = [];

const wishlistReducer = (state = initState, action) => {
  const wishlistItems = state,
    product = action.payload;
   const userId = getItem('id');
  if (action.type === ADD_TO_WISHLIST) {
    const wishlistItem = wishlistItems.filter(
      item => item.id === product.id && item.user_like === userId
    )[0];
    if (wishlistItem === undefined) {
      return [...wishlistItems, product];
    } else {
      return wishlistItems;
    }
  }

  if (action.type === DELETE_FROM_WISHLIST) {
    const remainingItems = (wishlistItems, product) =>
      wishlistItems.filter(wishlistItem => wishlistItem.id !== product.id && wishlistItem.user_like === userId);
    return remainingItems(wishlistItems, product);
  }

  if (action.type === DELETE_ALL_FROM_WISHLIST) {
    return wishlistItems.filter(item => {
		if(item?.user_like === userId) {
			return false;
		}
		return item
    });
  }

  return wishlistItems;
};

export default wishlistReducer;

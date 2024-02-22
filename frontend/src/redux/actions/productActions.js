export const FETCH_PRODUCTS_SUCCESS = "FETCH_PRODUCTS_SUCCESS";
export const PRODUCT_PARAMS = "PRODUCT_PARAMS";

const fetchProductsSuccess = products => ({
  type: FETCH_PRODUCTS_SUCCESS,
  payload: products
});

const fetchProductParams = params => ({
	type: PRODUCT_PARAMS,
	params: params
  });

// fetch products
export const fetchProducts = products => {
  return dispatch => {
    dispatch(fetchProductsSuccess(products));
  };
};

// fetch products
export const fetchParamsProduct = params => {
	return dispatch => {
	  dispatch(fetchProductParams(params));
	};
  };

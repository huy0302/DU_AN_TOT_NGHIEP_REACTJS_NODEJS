import { FETCH_PRODUCTS_SUCCESS, PRODUCT_PARAMS } from "../actions/productActions";

const initState = {
	products: [],
	params: {
		name: null,
		category_id: null
	}
};

const productReducer = ( state = initState, action ) =>
{
	switch ( action.type )
	{
		case FETCH_PRODUCTS_SUCCESS:
			return {
				...state,
				products: action.payload
			};
		case PRODUCT_PARAMS:
			return {
				...state,
				params: action.params
			};

	}

	return state;
};

export default productReducer;

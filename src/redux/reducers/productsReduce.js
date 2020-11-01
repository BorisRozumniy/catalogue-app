import * as types from "../constants";

import createReducer from "../createReducer";

const initialState = {
	productData: {},
	productRequestError: {},
	productRequestLoading: false,
};

const productsReducer = createReducer(initialState)({
	[types.GET_REQUEST_PRODUCTS_START]: state => ({
		...state,
		countryproductsRequestError: {},
		countryproductsRequestLoading: true,
	}),
	[types.GET_REQUEST_PRODUCTS_SUCCESS]: (state, { payload }) => ({
		...state,
		countryproductsData: payload,
		countryproductsRequestLoading: false,
	}),
	[types.GET_REQUEST_PRODUCTS_ERROR]: (state, { payload }) => ({
		...state,
		countryproductsRequestError: payload,
		countryproductsRequestLoading: false,
	}),
});

export default productsReducer;

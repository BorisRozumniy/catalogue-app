import { createStore, applyMiddleware, combineReducers, compose } from "redux";
import productsReducer from "./reducers/productsReduce";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const rootReducer = combineReducers({
    productsReducer,
});

function configureStore(initialState) {
	return createStore(
		rootReducer,
		initialState,
		composeEnhancers(
			applyMiddleware()
		)
	);
}
const store = configureStore(window.REDUX_INITIAL_DATA);

export default store;

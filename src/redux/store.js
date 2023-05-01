import { createStore, combineReducers } from 'redux';
import { productReducer } from './productReducer';
import { authReducer } from './authReducer';
import { cartReducer } from './cartReducer';
import { categoryReducer } from './categoryReducer';



const reducer = combineReducers({
	auth: authReducer,
    product: productReducer,
    cart: cartReducer,
    categories: categoryReducer
});

const store = createStore(reducer)

export default store;
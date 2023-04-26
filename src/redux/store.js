import { createStore, combineReducers } from 'redux';
import { productReducer } from './productReducer';
import { authReducer } from './authReducer';
import { cartReducer } from './cartReducer';



const reducer = combineReducers({
	auth: authReducer,
    product: productReducer,
    cart: cartReducer
});

const store = createStore(reducer)

export default store;
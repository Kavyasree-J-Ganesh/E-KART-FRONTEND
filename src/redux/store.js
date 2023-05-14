import { createStore, combineReducers } from 'redux';
import { productReducer } from './productReducer';
import { authReducer } from './authReducer';
import { cartReducer } from './cartReducer';
import { categoryReducer } from './categoryReducer';
import { wishlistReducer } from './wishlistReducer';
import { addressReducer } from './addressReducer';
import { orderReducer } from './orderReducer';


const reducer = combineReducers({
    auth: authReducer,
    product: productReducer,
    cart: cartReducer,
    categories: categoryReducer,
    wishlist: wishlistReducer,
    address: addressReducer,
    orders: orderReducer
});

const store = createStore(reducer)

export default store;
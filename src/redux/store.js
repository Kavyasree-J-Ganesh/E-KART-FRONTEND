import { createStore, combineReducers } from 'redux';
import { productReducer } from './productReducer';
import { authReducer } from './authReducer';
import { cartReducer } from './cartReducer';
import { categoryReducer } from './categoryReducer';
import { wishlistReducer } from './wishlistReducer';


const reducer = combineReducers({
    auth: authReducer,
    product: productReducer,
    cart: cartReducer,
    categories: categoryReducer,
    wishlist: wishlistReducer,
});

const store = createStore(reducer)

export default store;
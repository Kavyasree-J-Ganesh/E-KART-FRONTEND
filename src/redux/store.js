import { createStore, combineReducers } from 'redux';
import { productReducer } from './productReducer';
import { authReducer } from './authReducer';



const reducer = combineReducers({
	auth: authReducer,
    product: productReducer
});

const store = createStore(reducer)

export default store;
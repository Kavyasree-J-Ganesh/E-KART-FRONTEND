const initialState = {
	
	cart: null,
	
};

export const cartReducer = (state = initialState, action) => {
	switch (action.type) {
        case 'SET_CART':
			return action.payload
		case 'CLEAR_CART': 
		   return null
		default:
			return state;
	}
};
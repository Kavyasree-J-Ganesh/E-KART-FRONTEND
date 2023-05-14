const initialState = {
	
	orders: [],
	
};

export const orderReducer = (state = initialState, action) => {
	switch (action.type) {
        case 'SET_ORDERS':
			return {...state, orders: action.payload}
		default:
			return state;
	}
};
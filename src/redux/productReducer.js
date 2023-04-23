const initialState = {
	
	products: [],
	
};

export const productReducer = (state = initialState, action) => {
	console.log(action)
	switch (action.type) {
        case 'SET_PRODUCTS':
			return {
				...state,
				products : action.payload
			};
		default:
			return state;
	}
};
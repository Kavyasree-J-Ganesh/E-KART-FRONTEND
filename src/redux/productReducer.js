const initialState = {
	products: [],
	selectedCategory: ""
};

export const productReducer = (state = initialState, action) => {
	console.log(action)
	switch (action.type) {
		case 'SET_PRODUCTS':
			return {
				...state,
				products: action.payload
			};
		case 'SET_SELECTED_CATEGORY':
			return {
				...state,
				selectedCategory: action.payload.category
			};
		default:
			return state;
	}
};
const initialState = {
	products: [],
	selectedCategory: "",
	searchText: ""
};

export const productReducer = (state = initialState, action) => {
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

		case 'SET_SEARCH_TEXT':
			return {
				...state,
				searchText: action.payload
			}
		default:
			return state;
	}
};
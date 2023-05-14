const initialState = {
	selectedAddress: null
};

export const addressReducer = (state = initialState, action) => {
	switch (action.type) {
		case 'SELECT_ADDRESS':
			return {
				...state,
				selectedAddress: action.payload
			};
		default:
			return state;
	}
};
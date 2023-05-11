const initialDrawerState = []

export const categoryReducer = (state = initialDrawerState, action) => {
	switch (action.type) {
        case 'SET_CATEGORIES':
			return action.payload
		default:
			return state;
	}
};
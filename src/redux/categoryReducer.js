const initialDrawerState = []

export const categoryReducer = (state = initialDrawerState, action) => {
	console.log(action)
	switch (action.type) {
        case 'SET_CATEGORIES':
			return action.payload
		default:
			return state;
	}
};
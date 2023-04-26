const initialState = {
	isAdmin: false
	
};

export const authReducer = (state = initialState, action) => {
	console.log(action)
	switch (action.type) {
        case 'LOGIN':
			return {
				...state,
				isAdmin : action.payload.isAdmin,
			};
		case 'LOGOUT':
			return {
				...state,
				isAdmin : false,
			};
		default:
			return state;
	}
};
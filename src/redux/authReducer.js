const initialState = {
	isAdmin: false,
    userName: "",
	
};

export const authReducer = (state = initialState, action) => {
	console.log(action)
	switch (action.type) {
        case 'LOGIN':
			return {
				...state,
				isAdmin : action.payload.isAdmin,
				userName: action.payload.userName
			};
		case 'LOGOUT':
			return {
				...state,
				isAdmin : false,
				userName: ""
			};
		default:
			return state;
	}
};
const initialState = {
	isAdmin: false,
	isLogin: false,
	isLoginRequired: false
};

export const authReducer = (state = initialState, action) => {
	switch (action.type) {
		case 'LOGIN':
			return {
				...state,
				isAdmin: action.payload.isAdmin,
				isLogin: true,
				isLoginRequired:false
			};
		case 'LOGOUT':
			return {
				...state,
				isAdmin: false,
				isLogin: false,
				isLoginRequired:false
			};
		case 'SET_LOGIN_REQUIRED':
			return {
				...state,
				isLoginRequired: true
			}
		case 'UNSET_LOGIN_REQUIRED':
				return {
					...state,
					isLoginRequired: false
				}
		default:
			return state;
	}
};
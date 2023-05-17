const initialState = {
	isAdmin: false,
	isLogin: false,
	isLoginRequired: false,
	loginPath: ""
};

export const authReducer = (state = initialState, action) => {
	switch (action.type) {
		case 'LOGIN':
			return {
				...state,
				isAdmin: action.payload.isAdmin,
				isLogin: true,
				isLoginRequired:false,
			};
		case 'LOGOUT':
			return {
				...state,
				isAdmin: false,
				isLogin: false,
				isLoginRequired:false,
			};
		case 'SET_LOGIN_REQUIRED':
			return {
				...state,
				isLoginRequired: true,
				loginPath:action.payload
			}
		case 'UNSET_LOGIN_REQUIRED':
				return {
					...state,
					isLoginRequired: false,
					loginPath: ""
				}
		default:
			return state;
	}
};
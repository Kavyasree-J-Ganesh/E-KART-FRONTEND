const initialDrawerState = {

    cart: null,

};

export const wishlistReducer = (state = initialDrawerState, action) => {
    switch (action.type) {
        case 'SET_WISHLIST':
            return action.payload
        case 'CLEAR_WISHLIST':
            return null
        default:
            return state;
    }
};
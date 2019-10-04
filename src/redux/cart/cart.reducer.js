import CartActionTypes from './cart.types';

const INITIAL_STATE = {
    hidden: true,               
    cartItems: []             // This is where you store your items when clicked "Add items"
};

const cartReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case CartActionTypes.TOGGLE_CART_HIDDEN:
            return {
                ...state,
                hidden: !state.hidden
            }
        case CartActionTypes.ADD_ITEM:
            return {
                ...state,
                cartItems: [...state.cartItems, action.payload]
            }    
        default:
            return state;    
    }
}

export default cartReducer
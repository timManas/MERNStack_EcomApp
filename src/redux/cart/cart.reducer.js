import CartActionTypes from './cart.types';
import { addItemToCart } from './cart.utils'

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
                cartItems: addItemToCart(state.cartItems, action.payload)       // payload is the actual item we want to add
            }    
        case CartActionTypes.CLEAR_ITEM_FROM_CART:
            return {
                ...state,
                cartItems: state.cartItems.filter(cartItems => cartItems.id !== action.payload.id)
            }    
        default:
            return state;    
    }
}

export default cartReducer
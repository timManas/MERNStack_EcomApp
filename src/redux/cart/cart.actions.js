import CartActionTypes from './cart.types';

export const toggleCartHidden = () => ({
    type: CartActionTypes.TOGGLE_CART_HIDDEN
})

// Remember that Actions can have a type value and a payload value
// Payload can be anything we want it to be
export const addItem = item => ({
    type: CartActionTypes.ADD_ITEM,
    payload: item

})
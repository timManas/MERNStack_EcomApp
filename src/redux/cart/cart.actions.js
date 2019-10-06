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

export const clearItemFromCart = item => ({
    type: CartActionTypes.CLEAR_ITEM_FROM_CART,
    payload: item
})

export const removeItem = item => ({
    type: CartActionTypes.REMOVE_ITEM,
    payload: item
})



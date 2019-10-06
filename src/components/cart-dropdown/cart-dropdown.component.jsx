import React from 'react'
import CustomButton from '../custom-button/custom-button.component'
import './cart-dropdown.styles.scss'

import CartItem from '../cart-item/cart-item.component'
import { connect } from 'react-redux'

import {  selectCartItems } from '../../redux/cart/cart.selectors'
 
const CartDropDown = ({cartItems}) => (
    <div className='cart-dropdown'>
        <div className='cart-items'> 
            {   // This actually adds the item to the Cart on the GUI
                cartItems.map(cartItem => (
                <CartItem key={cartItem.key} item={cartItem} /> 
            ))}
        </div>
        <CustomButton>GO TO CHECKOUT</CustomButton>
    </div>
)

// Question: This part makes no sense to me at all
const mapStateToProps = (state) => ({
    cartItems: selectCartItems(state)
})

export default connect(mapStateToProps)(CartDropDown)
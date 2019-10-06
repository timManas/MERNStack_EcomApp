import React from 'react'
import CustomButton from '../custom-button/custom-button.component'
import './cart-dropdown.styles.scss'

import CartItem from '../cart-item/cart-item.component'
import { connect } from 'react-redux'

import {  selectCartItems } from '../../redux/cart/cart.selectors'
import { createStructuredSelector } from 'reselect'

import {  withRouter } from 'react-router-dom'              // Need this for Checkout Page

 
const CartDropDown = ({cartItems, history}) => (
    <div className='cart-dropdown'>
        <div className='cart-items'> 
            {   // This actually adds the item to the Cart on the GUI

                cartItems.length ? (
                cartItems.map(cartItem => (
                <CartItem key={cartItem.id} item={cartItem} /> 
            ))) 
            :
            (
                <span className='empty-Message'>Cart is Empty</span>
            ) 
        }
        </div>
        <CustomButton onClick={() => history.push('./checkout')}>GO TO CHECKOUT</CustomButton>
    </div>
)

// Question: This part makes no sense to me at all
const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems
})

// export default connect(mapStateToProps)(CartDropDown)
export default withRouter(connect(mapStateToProps)(CartDropDown))


/*
WithRouter just takes a higher component will match the history

*/
import React from 'react'
import { ReactComponent as ShoppingIcon } from '../../assets/crown.svg'  // The shopping Bag svg is fucked so we replaced it with the crown ...LOL
import './cart-icon.styles.scss'

const CartIcon = () => (
    <div className='cart-icon'>
        <ShoppingIcon className='shopping-Icon' />
        <span className='item-count'>0</span>
    </div>
)

export default CartIcon
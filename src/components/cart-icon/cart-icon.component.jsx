import React from 'react'
import { ReactComponent as ShoppingIcon } from '../../assets/crown.svg'  // The shopping Bag svg is fucked so we replaced it with the crown ...LOL
import './cart-icon.styles.scss'

import { connect } from 'react-redux'           // Higher order component
import { toggleCartHidden } from '../../redux/cart/cart.actions'

const CartIcon = ({toggleCartHidden}) => (
    <div className='cart-icon' onClick={toggleCartHidden}>
        <ShoppingIcon className='shopping-Icon' />
        <span className='item-count'>0</span>
    </div>
)

// Question what does dispatch do ? 
const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
}) 

export default connect(null, mapDispatchToProps)(CartIcon)
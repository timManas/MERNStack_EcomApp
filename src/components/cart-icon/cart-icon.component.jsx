import React from 'react'
import { ReactComponent as ShoppingIcon } from '../../assets/crown.svg'  // The shopping Bag svg is fucked so we replaced it with the crown ...LOL
import './cart-icon.styles.scss'

import { connect } from 'react-redux'           // Higher order component
import { toggleCartHidden } from '../../redux/cart/cart.actions'

import { selectCartItemsCount } from '../../redux/cart/cart.selectors';
import { createStructuredSelector } from 'reselect'


const CartIcon = ({toggleCartHidden, itemCount}) => (
    <div className='cart-icon' onClick={toggleCartHidden}>
        <ShoppingIcon className='shopping-Icon' />
        <span className='item-count'>{itemCount}</span>
    </div>
)

// Question what does dispatch do ? 
const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
}) 


// This is known as a "Selector"
const mapStateToProps = createStructuredSelector({
    itemCount: selectCartItemsCount

})

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon)
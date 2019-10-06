import React from 'react'
import {Link} from 'react-router-dom'
import {auth} from '../../firebase/firebase.utils'
import {connect} from 'react-redux';        // Connect is a high order component that allows us to modify our component to have access to things related to redux 

import CartIcon from '../cart-icon/cart-icon.component'
import {ReactComponent as Logo} from '../../assets/crown.svg'
import CartDropDown from '../cart-dropdown/cart-dropdown.component'

import { createStructuredSelector } from 'reselect'
import { selectCurrentUser } from '../../redux/user/user.selector'
import { selectCartHidden } from '../../redux/cart/cart.selectors'

import './header.styles.scss'

// Woow wtf, the 'Logo' is a component 
const Header = ({currentUser, hidden}) => (
    <div className='header'>
        <Link className='logo-container' to="/">
            <Logo className='logo'/>
        </Link>

        <div className='options'>
            <Link className='option' to='/shop'>
                SHOP
            </Link>
            <Link className='option' to='/shop'>
                CONTACT
            </Link>
            {   // This is JavaScript
                currentUser ? 
                (<div className='option' onClick={() => auth.signOut()}>SIGN OUT</div>)
                :
                (<Link className='option' to='/signin'>SIGN IN</Link>)

            }
            <CartIcon />

        </div>

        {
            hidden ? null :  <CartDropDown />
        }
       
    </div>
)

// state argument here the root reducer
// const mapStateToProps = ({user: {currentUser}, cart: {hidden}}) => ({
//     // currentUser: state.user.currentUser
//     currentUser,
//     hidden 
// })

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden
})


// export default Header
export default connect(mapStateToProps)(Header);
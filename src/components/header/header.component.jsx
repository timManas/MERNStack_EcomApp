import React from 'react'
import {auth} from '../../firebase/firebase.utils'
import {connect} from 'react-redux';        // Connect is a high order component that allows us to modify our component to have access to things related to redux 

import CartIcon from '../cart-icon/cart-icon.component'
import {ReactComponent as Logo} from '../../assets/crown.svg'
import CartDropDown from '../cart-dropdown/cart-dropdown.component'

import { createStructuredSelector } from 'reselect'
import { selectCurrentUser } from '../../redux/user/user.selectors'
import { selectCartHidden } from '../../redux/cart/cart.selectors'

import { HeaderContainer, LogoContainer, OptionsContainer, OptionLink } from './header.styles'

// Woow wtf, the 'Logo' is a component 
const Header = ({currentUser, hidden}) => (
    <HeaderContainer>
        <LogoContainer to="/">
            <Logo className='logo'/>
        </LogoContainer>

        <OptionsContainer>
            <OptionLink to='/shop'>
                SHOP
            </OptionLink>
            <OptionLink to='/shop'>
                CONTACT
            </OptionLink>
            {   // This is JavaScript
                currentUser ? 
                (<OptionLink as='div'  onClick={() => auth.signOut()}>SIGN OUT</OptionLink>)
                :
                (<OptionLink to='/signin'>SIGN IN</OptionLink>)

            }
            <CartIcon />

        </OptionsContainer>

        {
            hidden ? null :  <CartDropDown />
        }
       
    </HeaderContainer>
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
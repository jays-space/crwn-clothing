import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { auth } from "../../firebase/firebase.utils";
import { createStructuredSelector } from "reselect";

import { selectToggleDropdown } from "../../redux/cart/cart.selectors";
import { selectCurrentUser } from "../../redux/user/user.selectors";

import { ReactComponent as Logo } from "../../assets/crown.svg";
import ShoppingIcon from "../cart-icon/cart-icon.component";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";

import "./header.styles.scss";

const Header = ({ currentUser, hidden }) => (
  <div className='header'>
    <Link to='/' className='logo-container'>
      <Logo className='logo' />
    </Link>

    <div className='options'>
      <Link className='option' to='/shop'>
        SHOP
      </Link>
      <Link className='option' to='/contact'>
        CONTACT
      </Link>
      {currentUser ? (
        <div className='option' onClick={() => auth.signOut()}>
          SIGN OUT
        </div>
      ) : (
        <Link className='option' to='/signin'>
          SIGN IN
        </Link>
      )}
      <ShoppingIcon />
    </div>
    {hidden ? null : <CartDropdown />}
  </div>
);
//CONNECT COMPONENT TO STORE
// plug the component into the store=>root-reducer=>reducer and read the state. Assign that state as a prop into the component. In thsi case, we set the state as the prop 'currentUser' to be read by the Header component.

// The prop coming in from App.js is now defunct as the prop is assign directly from the store.

const mapStateToProps = createStructuredSelector({
  //advanced destructuring
  //Use when we need props from reducers
  currentUser: selectCurrentUser, // here, we are setting currentUser specifically to the currentUser from the userReducer
  hidden: selectToggleDropdown,
});

export default connect(mapStateToProps)(Header);

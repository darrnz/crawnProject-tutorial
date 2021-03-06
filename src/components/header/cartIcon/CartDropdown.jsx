import React from 'react'
import { connect } from 'react-redux'
import CustomBtn from '../../customBtn/CustomBtn'
import CartItem from './cartItem/CartItem'
import './cartDropdown.styles.scss'
import { withRouter } from 'react-router-dom'
import { selectCartItems, selectCartItemsCount } from '../../../redux/cart/cart.selectors'
import { createStructuredSelector } from 'reselect'
import { toggleCartHidden } from '../../../redux/cart/cart.actions'

function CartDropdown({ cartItems, history, dispatch }) {
    return (
        <div className='cart-dropdown'>
            <div className='cart-items'>
                {   
                    cartItems.length ?
                    cartItems.map(cartItem => 
                        <CartItem key={cartItem.id} item={cartItem} />
                    )
                    :
                    <span className='empty-message'>Your cart is empty</span>
                }
            </div>
            <CustomBtn 
                onClick={()=>{
                    history.push('/checkout')
                    dispatch(toggleCartHidden())
                }}
                >GO TO CHECKOUT</CustomBtn>
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems
})

export default withRouter(connect(mapStateToProps)(CartDropdown))
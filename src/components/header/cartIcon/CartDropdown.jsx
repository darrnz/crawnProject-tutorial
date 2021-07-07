import React from 'react'
import { connect } from 'react-redux'
import CustomBtn from '../../customBtn/CustomBtn'
import CartItem from './cartItem/CartItem'
import './cartDropdown.styles.scss'
import { selectCartItems, selectCartItemsCount } from '../../../redux/cart/cart.selectors'

function CartDropdown({ cartItems }) {
    return (
        <div className='cart-dropdown'>
            <div className='cart-items'>
                {
                    cartItems.map(cartItem => 
                        <CartItem key={cartItem.id} item={cartItem} />
                    )
                }
            </div>
            <CustomBtn>GO TO CHECKOUT</CustomBtn>
        </div>
    )
}

const mapStateToProps =(state) => ({
    cartItems: selectCartItems(state)
})

export default connect(mapStateToProps)(CartDropdown)
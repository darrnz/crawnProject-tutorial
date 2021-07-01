import React from 'react'
import './cartIcon.styles.scss'
import { connect } from 'react-redux'
import { toggleCartHidden } from '../../../redux/cart/cart.actions'
import { map } from 'async'

function CartIcon({toggleCartHidden}) {
    return (
        <div className='cart-icon' onClick={toggleCartHidden}>
            <img className='shopping-icon' src='/shopping-bag.svg' alt='shop-icon'/>
            <span className='item-count'>0</span>
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
})

export default connect(null, mapDispatchToProps)(CartIcon)
import React from 'react'
import './cartIcon.styles.scss'
import { connect } from 'react-redux'
import { toggleCartHidden } from '../../../redux/cart/cart.actions'
import { selectCartItemsCount } from '../../../redux/cart/cart.selectors'

function CartIcon({toggleCartHidden, itemCount}) {
    return (
        <div className='cart-icon' onClick={toggleCartHidden}>
            <img className='shopping-icon' src='/shopping-bag.svg' alt='shop-icon'/>
            <span className='item-count'>{itemCount}</span>
        </div>
    )
}

const mapStateToProps = (state) => ({
    itemCount: selectCartItemsCount(state)
})

const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
})

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon)
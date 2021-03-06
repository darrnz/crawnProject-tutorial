import React from 'react'
import './cartItem.styles.scss'

function CartItem(props) {

    const { item } = props
    const { imageUrl, price, name, quantity } = item 

    return (
        <div className='cart-item'>
            <img src={imageUrl} alt={name} />
            <div className='item-details'>
                <span className='name'>{name}</span>
                <span className='price'>{quantity} x {price}</span>
            </div>
        </div>
    )
}

export default (CartItem)
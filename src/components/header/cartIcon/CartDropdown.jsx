import React from 'react'
import CustomBtn from '../../customBtn/CustomBtn'
import './cartDropdown.styles.scss'

export default function CartDropdown() {
    return (
        <div className='cart-dropdown'>
            <div className='cart-items'>
                <CustomBtn>GO TO CHECKOUT</CustomBtn>
            </div>
        </div>
    )
}

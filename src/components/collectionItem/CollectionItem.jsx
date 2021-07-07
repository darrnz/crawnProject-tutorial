import React from 'react'
import { connect } from 'react-redux'
import './collectionItem.styles.scss'
import { addItem } from '../../redux/cart/cart.actions'
import CustomBtn from '../customBtn/CustomBtn'

function CollectionItem(props) {

    const { item, addItem } = props
    const { name, price, imageUrl } = item
    return (
        <div className='collection-item'>
            <div 
                className='image'
                style={{
                    backgroundImage: `url(${imageUrl})`
                }}
                />
            <div className='collection-footer'>
                <span className='name'>{name}</span>
                <span className='price'>${price}</span>
            </div>
            <CustomBtn 
                inverted
                onClick={() => addItem(item)}>Add to Cart</CustomBtn>
            
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    addItem: item => dispatch(addItem(item))
})

export default connect(null, mapDispatchToProps)(CollectionItem)
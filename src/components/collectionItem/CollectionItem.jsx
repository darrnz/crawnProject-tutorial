import React from 'react'
import './collectionItem.styles.scss'

export default function CollectionItem(props) {

    const { id, name, price, imageUrl } = props

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
                <span className='price'>{price}</span>
            </div>
            
        </div>
    )
}

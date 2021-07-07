import React from 'react'
import './previewCollection.styles.scss'
import CollectionItem from '../collectionItem/CollectionItem'

export default function PreviewCollection(props) {

    const { title, items } = props

    return (
        <div className='collection-preview'>
            <h1 className='title'>{title.toUpperCase()}</h1>
            <div className='preview'>
                {
                    items.filter((item, index) => index < 4).map((item) => {
                        return(
                            <CollectionItem key={item.id} item={item} />                   
                        )
                    } )
                }
            </div>
        </div>
    )
}

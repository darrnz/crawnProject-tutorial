import React from 'react'
import { selectCollection } from '../../../redux/shop/shop.selector'
import { connect } from 'react-redux'
import CollectionItem from '../../collectionItem/CollectionItem'
import './collectionsPage.styles.scss'

function CollectionPage({ collection }) {
    console.log(collection)
    const { title, items } = collection
    console.log(items)

    return (
        <div className='collections-page'>
            <h2 className='title'>{title}</h2>
            <div className='items'>
                {
                    items.map(item => (
                        <CollectionItem key={item.id} item={item} />
                    ))
                }
            </div>
        </div>
    )
}

const mapStateToProps = (state, ownProps) => ({
    collection: selectCollection(ownProps.match.params.collectionId)(state)
})

export default connect(mapStateToProps)(CollectionPage)

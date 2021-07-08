import React from 'react'
import { connect } from 'react-redux'
import { Route } from 'react-router-dom'
import CollectionPage from './collection/CollectionsPage'
import CollectionsOverview from './collections-overview/CollectionsOverview'

function Shop({ match }) {

    return (
        <div className='shop-page'>
            <Route exact path={`${match.path}`} component={CollectionsOverview} />
            <Route path={`${match.path}/:collectionId`} component={CollectionPage}/>
        </div>
    )
}

export default Shop

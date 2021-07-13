import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { Route } from 'react-router-dom'
import CollectionPageContainer from './collection/CollectionPageContainer'
import { fetchCollectionsStart } from '../../redux/shop/shop.actions'
import { selectIsCollectionsLoaded } from '../../redux/shop/shop.selector'
import { createStructuredSelector } from 'reselect'
import CollectionsOverviewContainer from './collections-overview/CollectionsOverviewContainer'

//const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview)
function Shop({ match, fetchCollectionsStart }) {

    useEffect(() => {
        fetchCollectionsStart()
    }, [fetchCollectionsStart])

    return (
        <div className='shop-page'>
            <Route exact path={`${match.path}`} component={CollectionsOverviewContainer}/>
            <Route path={`${match.path}/:collectionId`} component={CollectionPageContainer}/>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => ({
    fetchCollectionsStart: () => dispatch(fetchCollectionsStart()),
    
})

export default connect(null, mapDispatchToProps)(Shop)

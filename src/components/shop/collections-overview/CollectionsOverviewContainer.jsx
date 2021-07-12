import React from 'react'
import { connect } from 'react-redux'
import {createStructuredSelector} from 'reselect'
import { compose } from 'redux'
import { selectIsCollectionsFetching } from '../../../redux/shop/shop.selector'
import WithSpinner from '../../with-spinner/WithSpinner'
import CollectionsOverview from './CollectionsOverview'

const mapStateToProps = createStructuredSelector({
    isLoading: selectIsCollectionsFetching
})

const CollectionsOverviewComponent = compose(
    connect(mapStateToProps),
    WithSpinner,
)(CollectionsOverview)

export default CollectionsOverviewComponent
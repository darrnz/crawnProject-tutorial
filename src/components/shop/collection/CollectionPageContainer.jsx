import { connect } from "react-redux";
import { compose } from 'redux'
import { createStructuredSelector } from 'reselect'
import  { selectIsCollectionsLoaded } from  '../../../redux/shop/shop.selector'
import WithSpinner from '../../with-spinner/WithSpinner'
import CollectionsPage from './CollectionsPage'

const mapStateToProps = createStructuredSelector({
    isLoading: state=> !selectIsCollectionsLoaded(state)
})

const CollectionPageContainer = compose(
    connect(mapStateToProps),
    WithSpinner
)(CollectionsPage)

export default CollectionPageContainer


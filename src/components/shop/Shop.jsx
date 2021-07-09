import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { Route } from 'react-router-dom'
import CollectionPage from './collection/CollectionsPage'
import CollectionsOverview from './collections-overview/CollectionsOverview'
import { firestore, convertCollectionsSnapshotToMap } from '../../firebase/firebase.utils'
import { updateCollections } from '../../redux/shop/shop.actions'
import WithSpinner from '../with-spinner/WithSpinner'

const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview)
const CollectionsPageWithSpinner = WithSpinner(CollectionPage)


function Shop({ match, updateCollections }) {

    let unsuscribeFromSnapShor = null

    const [isLoading, setIsLoading] = useState(true)

    function firestoreCall() {
        const collectionRef = firestore.collection('collections')

        collectionRef.onSnapshot(async(snapshot) => {
            const collectionsMap = convertCollectionsSnapshotToMap(snapshot)
            updateCollections(collectionsMap)
            setIsLoading(false)
        })
    }

    useEffect(() => {

        firestoreCall()

    }, [])

    return (
        <div className='shop-page'>
            <Route exact path={`${match.path}`} render={(props) => <CollectionsOverviewWithSpinner 
                isLoading={isLoading} {...props}
            />} 
        />
            <Route path={`${match.path}/:collectionId`} render={(props) => <CollectionsPageWithSpinner
                isLoading={isLoading} {...props}
            />}
        />
        </div>
    )
}

const mapDispatchToProps = (dispatch) => ({
    updateCollections: (collectionsMap) => dispatch(updateCollections(collectionsMap))
})

export default connect(null, mapDispatchToProps)(Shop)

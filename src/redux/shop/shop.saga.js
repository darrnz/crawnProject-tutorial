import { takeEvery, call, put } from 'redux-saga/effects'
import ShopActionTypes from './shop.types'
import { firestore, convertCollectionsSnapshotToMap } from '../../firebase/firebase.utils'
import { fetchCollectionsSuccess, fetchCollectionsError} from './shop.actions'
//run this saga concurrently all togheter, not blocking excecution
//

export function* fetchCollectionsAsync() {
    yield console.log('Im fired')


    try {
        const collectionRef = firestore.collection('collections')
        const snapshot = yield collectionRef.get()
        const collectionsMap = yield call(convertCollectionsSnapshotToMap, snapshot)
        //put es igual a dispatch
        yield put(fetchCollectionsSuccess(collectionsMap))
    } catch (error) {
        yield put(fetchCollectionsError(error.message))
    }
/* 
    collectionRef
        .get()
        .then((snapshot) => {
        const collectionsMap = convertCollectionsSnapshotToMap(snapshot)
        dispatch(fetchCollectionsSuccess(collectionsMap))
        })
        .catch((error) => dispatch(fetchCollectionsError(error.message))) */
}

export function* fetchCollectionsStart() {
    yield takeEvery( //non blocking code
        ShopActionTypes.FETCH_COLLECTIONS_START,
        fetchCollectionsAsync
        )
}
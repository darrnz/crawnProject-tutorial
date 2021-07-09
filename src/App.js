import { useEffect, useState } from 'react';
import HomePage from './components/HomePage';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Redirect, useHistory} from 'react-router-dom'
import { connect } from 'react-redux';
import Shop from './components/shop/Shop';
import Header from './components/header/Header';
import SignInLogIn from './components/login-signin/SignInLogIn';
import { auth, createUserProfileDocument/* , addCollectionAndDocumets */ } from './firebase/firebase.utils'
import { setCurrentUser } from './redux/user/user.actions'
import { selectCurrentUser } from './redux/user/user.selector';
import { createStructuredSelector } from 'reselect';
import Checkout from './components/checkout/Checkout';
/* import { selectCollectionsForPreview } from './redux/shop/shop.selector' */

function App(props) {

  const history =  useHistory()

  const { currentUser, setCurrentUser/* , collectionsArray */ } = props
  console.log(currentUser)
  console.log(props)
  

  useEffect(() => {
    auth.onAuthStateChanged(async userAuth => {

      if(userAuth) {
      const userRef = await createUserProfileDocument(userAuth)

      userRef.onSnapshot(snapShot => {
        setCurrentUser({
          id: snapShot.id,
          ...snapShot.data()
        })
      })
      console.log(userAuth)
      }
      setCurrentUser(userAuth)
     /*  addCollectionAndDocumets('collections', collectionsArray.map(({title, items}) => ({title, items}))) */

    })
  }, [])

  return (
    <div>
        <Router>
          <Header/>
          <Switch>
            <Route exact path='/' component={HomePage} />
            <Route path='/shop' component={Shop} />
            <Route exact path='/checkout' component={Checkout} />
            {
              currentUser ? 
                <Redirect to='/' /> : 
                <Route exact path='/signin' component={SignInLogIn} />
            }
          </Switch>
        </Router>
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  /* collectionsArray: selectCollectionsForPreview */
})

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);

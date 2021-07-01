import { useEffect, useState } from 'react';
import HomePage from './components/HomePage';
import './App.css';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Shop from './components/shop/Shop';
import Header from './components/header/Header';
import SignInLogIn from './components/login-signin/SignInLogIn';
import { auth, createUserProfileDocument } from './firebase/firebase.utils'

function App() {

  const [userAuth, setUserAuth] = useState(null)

  //unsuscribeFromAuth = null

  useEffect(() => {
    auth.onAuthStateChanged(async userAuth => {
      if(userAuth) {
      const userRef = await createUserProfileDocument(userAuth)

      userRef.onSnapshot(snapShot => {
        setUserAuth({
          id: snapShot.id,
          ...snapShot.data()
        })
      })
      console.log(userAuth)
      }
      setUserAuth(userAuth)
    })
  }, [])

  return (
    <div>
        <Router>
          <Header userAuth={userAuth} />
          <Switch>
            <Route exact path='/' component={HomePage} />
            <Route exact path='/shop' component={Shop} />
            <Route exact path='/signin' component={SignInLogIn} />
          </Switch>
        </Router>
        
    </div>
  );
}

export default App;

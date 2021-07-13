import {useEffect} from 'react'
import HomePage from './components/HomePage';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom'
import { connect } from 'react-redux';
import Shop from './components/shop/Shop';
import Header from './components/header/Header';
import SignInLogIn from './components/login-signin/SignInLogIn';
import { selectCurrentUser } from './redux/user/user.selector';
import { createStructuredSelector } from 'reselect';
import Checkout from './components/checkout/Checkout';
import {checkUserSession} from './redux/user/user.actions'

function App(props) {

  const { currentUser, checkUserSession} = props
  console.log(currentUser)
  console.log(props)
  

  useEffect(() => {
    checkUserSession()

  }, [checkUserSession]) 

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
})

const mapDispatchToProps = dispatch => ({
  checkUserSession: () => dispatch(checkUserSession())
})

export default connect(mapStateToProps, mapDispatchToProps)(App);

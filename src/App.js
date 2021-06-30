import HomePage from './components/HomePage';
import './App.css';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Shop from './components/shop/Shop';

function App() {
  return (
    <div>
        <Router>
          <Switch>
            <Route exact path='/' component={HomePage} />
            <Route exact path='/shop' component={Shop} />
          </Switch>
        </Router>
        
    </div>
  );
}

export default App;

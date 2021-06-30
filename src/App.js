import HomePage from './components/HomePage';
import './App.css';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'

function App() {
  return (
    <div>
        <Router>
          <Switch>
            <Route exact path='/' component={HomePage} />
          </Switch>
        </Router>
        
    </div>
  );
}

export default App;

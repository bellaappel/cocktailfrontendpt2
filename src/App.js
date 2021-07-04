
import './App.css';
import Home from './components/Home'
import{
  BrowserRouter as Router,
  // Switch,
  Route,
  Link
} from 'react-router-dom'
import NavBar from '../../../../labs2.0/React/week2/react-async-gif-search-lab/src/components/NavBar';

function App() {
  return (
    <div className="wrapper">
      <Router>
        <NavBar/>
          <Route exact path="/" component={Home} />
      </Router>
     
    </div>
  );
}

export default App;

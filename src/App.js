import SearchBar from './components/SearchBar'
import './App.css';
import Home from './components/Home'
import CocktailContainer from './containers/CocktailContainer'
import{
  BrowserRouter as Router,
  // Switch,
  Route,
  Link
} from 'react-router-dom'
import NavBar from './components/NavBar'
import Header from './components/Header'
import RecipesContainer from './containers/RecipesContainer';
import LiquorContainer from './containers/LiquorContainer'
 

function App() {
  return (
    <div className="wrapper">
      <Header/>
      <Router>
        <NavBar/>
        <SearchBar/>
          <Route exact path="/" component={Home} />
          <Route exact path="/cocktails" component={CocktailContainer} />
          <Route exact path="/recipes" component={RecipesContainer} />
          <Route exact path="/liquors" component={LiquorContainer} />
      </Router>
      
     
    </div>
  );
}

export default App;

import SearchBar from './components/SearchBar'
import './App.css';
import Home from './components/Home'
import CocktailContainer from './containers/CocktailContainer'
import './stylesheets/navbar.css'
import{
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom'
import NavBar from './components/NavBar'
import Header from './components/Header'
import RecipeContainer from './containers/RecipeContainer'
import LiquorContainer from './containers/LiquorContainer'
import {SingleCocktailPage} from './components/SingleCocktailPage';
import {SingleLiquorPage} from './components/SingleLiquorPage'
import { SingleRecipePage } from './components/SingleRecipePage';
import AddCocktailForm from './containers/AddCocktailForm';
 

function App() {
  return (
    <div className="wrapper">
      <Header/>
      <Router>
        <NavBar/>
        <SearchBar/>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/cocktails" component={CocktailContainer}/>
          <Route exact path="/addCocktail" component={AddCocktailForm}/>
          <Route exact path="/cocktails/:cocktailId" component={SingleCocktailPage} />
          <Route exact path="/recipes" component={RecipeContainer} />
          <Route exact path="/recipes/:recipeId" component={SingleRecipePage} />
          <Route exact path="/liquors" component={LiquorContainer} />
          <Route exact path="/liquors/:liquorId" component={SingleLiquorPage} />
        </Switch>
      </Router>
      
     
    </div>
  );
}

export default App;

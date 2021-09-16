import {BrowserRouter,Route,NavLink,Switch} from 'react-router-dom';
import DepositPage from './pages/DepositPage';
import HomePage from './pages/HomePage';
import withDraw from './pages/WithDraw';
import './App.css';
import Items from './pages/Items';
import RoutingPage from './pages/RoutingPage';
function App() {
  return (
    <BrowserRouter>
   
    <div className="App">
      <div className = "App-header">
      <RoutingPage />
      </div>
       <Switch>
       <Route exact path ="/" component={HomePage}/>
       <Route exact path ="/Deposit" component={DepositPage}/>
       <Route exact path ="/WithDraw" component={withDraw}/>
       <Route exact path ="/items" component={Items}/>
        </Switch>
    
    </div>
    </BrowserRouter>

  );
}

export default App;

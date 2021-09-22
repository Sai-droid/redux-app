import {BrowserRouter,Route,NavLink,Switch} from 'react-router-dom';
import DepositPage from './pages/DepositPage';
import HomePage from './pages/HomePage';
import withDraw from './pages/WithDraw';
import './App.css';
import Items from './pages/Items';
import RoutingPage from './pages/RoutingPage';
import LoginPage from './pages/LoginPage';
import SignUp from './pages/SignUp';
import Cost from './pages/Cost'
import Menu from './pages/Menu';


function App() {
  return (
    <BrowserRouter>
  <Cost />
    <div className="App">
      <div className ="App-header"> 
      <RoutingPage />
        </div>
       <Switch>
       <Route exact path ="/" component={LoginPage} />
       <Route exact path ="/home" component={Menu}/>
       <Route exact path ="/Deposit" component={DepositPage}/>
       <Route exact path ="/WithDraw" component={withDraw}/>
       <Route exact path ="/items" component={Items}/>
       <Route exact path ="/signup" component={SignUp}/>

        </Switch>
    
    </div>
    </BrowserRouter>

  );
}

export default App;

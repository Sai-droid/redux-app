import {BrowserRouter,Route,NavLink,} from 'react-router-dom';
import DepositPage from './pages/DepositPage';
import HomePage from './pages/HomePage';
import withDraw from './pages/WithDraw';
import './App.css';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <header className="  App-header">
       <ul className=" ui-style App-link">
         <li className="li-style"><NavLink  exact activeClassName = "navlink-style" className="navlink-style" to ='/' >Home</NavLink></li>
         <li className="li-style"><NavLink  exact activeClassName = "navlink-style" className="navlink-style" to ='/Deposit'>Deposit</NavLink></li>
         <li className="li-style"><NavLink  exact  activeClassName = "navlink-style"  className="navlink-style" to ='/withDraw'>WithDraw</NavLink></li>
       </ul>
       
       <Route exact path ="/" component={HomePage}/>
       <Route exact path ="/Deposit" component={DepositPage}/>
       <Route exact path ="/WithDraw" component={withDraw}/>
      </header>
    </div>
    </BrowserRouter>

  );
}

export default App;

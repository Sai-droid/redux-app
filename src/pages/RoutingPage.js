import React from 'react'
import {BrowserRouter,Route,NavLink,Switch} from 'react-router-dom';

function RoutingPage() {
    return (
        <div>
      
         <ul className=" ui-style App-link">
         <li className="li-style"><NavLink  exact activeClassName = "navlink-style" className="navlink-style" to ='/menu' >Home</NavLink></li>
         <li className="li-style"><NavLink  exact activeClassName = "navlink-style" className="navlink-style" to ='/Deposit'>Deposit</NavLink></li>
         <li className="li-style"><NavLink  exact  activeClassName = "navlink-style"  className="navlink-style" to ='/withDraw'>WithDraw</NavLink></li>
         <li className="li-style"><NavLink  exact  activeClassName = "navlink-style"  className="navlink-style" to ='/items'>Items</NavLink></li>
       </ul>

        </div>
    )
}

export default RoutingPage

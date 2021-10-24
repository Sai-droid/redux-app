import { BrowserRouter, Route, NavLink, Switch } from "react-router-dom";
import DepositPage from "./pages/DepositPage";
import React, { useState, useEffect, useContext } from "react";
import HomePage from "./pages/HomePage";
import withDraw from "./pages/WithDraw";
import "./App.css";
import Items from "./pages/Items";
import RoutingPage from "./pages/RoutingPage";
import LoginPage from "./pages/LoginPage";
import SignUp from "./pages/SignUp";
import Cost from "./pages/Cost";
import Menu from "./pages/Menu";
import HeaderInfo from "./pages/HeaderInfo";
import { useHistory, useLocation } from "react-router";
import LiftingState from "./reducers/LiftingState";
import UseContext from "./pages/UseContext";

function App() {

    const location = useLocation();

    
const style ={
  color:'teal',
  ':hover': {
    border: '1px solid black',
    
    backgroundColor:'red'
  ,}
}

    useEffect(() => {

      console.log(location.pathname)
     
    }, [location.pathname])


  return (
    
   
      <div className="App">
        <div className="App-header">
        <marquee> <h3 style ={style}>"Any fool can know. The point is to understand."</h3></marquee >

          <RoutingPage />
          <Cost />
          <UseContext />
          {/* <HeaderInfo /> */}
        </div>
        <Switch>
          <Route exact path="/" component={LoginPage} />
          <Route exact path="/home" component={Menu} />
          <Route exact path="/Deposit" component={DepositPage} />
          <Route exact path="/WithDraw" component={withDraw} />
          <Route exact path="/items" component={Items} />
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/signup/:lastname/:firstname" component={LiftingState} />
          <Route exact path="/headerinfo" component={HeaderInfo} />
          <Route exact path="/homeee" component={LoginPage} />
        </Switch>
      </div>
   
  );
}

export default App;

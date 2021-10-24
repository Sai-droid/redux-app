import React,{useEffect,useRef } from "react";
import { useSelector, useDispatch ,} from "react-redux";
import Button from "@mui/material/Button";
import HomeTwoToneIcon from "@mui/icons-material/HomeTwoTone";
import { NavLink } from "react-router-dom";


function WithDraw() {
  const balance = useSelector((state) => state.reducer.balance);
  const loan = useSelector((state) => state.loanReducer.loan);
  const isInitialMount = useRef(true)

  const dispatch = useDispatch();

  useEffect(()=>{
  if(isInitialMount.current){
    isInitialMount.current = false
    console.log('not rendered')
  } else{
    console.log('rendering for component update')
  }

  return ()=>{
    
  }
  },[balance])


  const onWithDrawHandle = () => {

    dispatch({ 
      type: "Withdraw", 
      payload: 10 
    });

    
  };



  const onLoanHandle = () => {

    dispatch({
      type: "Apply",
    });

  };

  return (
    <div>
      <h1>Balance:{balance}</h1>

      <button className="button-style" onClick={onWithDrawHandle}>
        Deduct
      </button>

      <Button size="small" color="primary" variant="outlined">
     
     <NavLink to="/home" className="navlink-style">
       <HomeTwoToneIcon />
       Home
     </NavLink>

   </Button>
      <button className="button-style" disabled ={ loan ? true:false} onClick={onLoanHandle}>
        {loan?"LoanApplied":"ApplyLoan"}
      </button>
    </div>
  );
}

export default WithDraw;

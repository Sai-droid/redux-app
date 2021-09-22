import React from "react";
import { useSelector, useDispatch } from "react-redux";
import RoutingPage from "./RoutingPage";

function HomePage() {
  const balance = useSelector((state) => state.reducer.balance);
  const loan = useSelector((state) => state.loanReducer.loan);
  const dispatch = useDispatch();
  const onLoanHandle = () => {
    dispatch({
      type:"Apply",
    });
  };

  return (
    <div>
       <RoutingPage />
      <h1>Balance:{balance}</h1>
      <h1>loan:{loan.toString()}</h1>
      <button className="button-style" disabled ={loan?true:false} onClick={onLoanHandle}>
        {loan?"LoanApplied":"ApplyLoan"}
      </button>
    </div>
  );
}

export default HomePage;

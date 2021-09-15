import React from "react";
import { useSelector, useDispatch } from "react-redux";

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
    <>
      <h1>Balance:{balance}</h1>
      <h1>loan:{loan.toString()}</h1>
      <button className="button-style" disabled ={loan?true:false} onClick={onLoanHandle}>
        {loan?"LoanApplied":"ApplyLoan"}
      </button>
    </>
  );
}

export default HomePage;

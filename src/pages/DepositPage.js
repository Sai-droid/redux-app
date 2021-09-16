import React from 'react'
import {useSelector,useDispatch} from 'react-redux'

function DepositPage() {
    const balance = useSelector((state)=>state.reducer.balance);
    const loan = useSelector((state)=>state.loanReducer.loan);
    const dispatch = useDispatch();
    const onDepositPageHandle =()=>{
        dispatch({
            type:"Deposit",
            payload:10
        })
    }
    const onLoanHandle =()=>{
        dispatch({
            type:"Apply"
         
        })
    }
    return (
        <div className="dep-style">
        <h1>Balance:{balance}</h1>
        <button className ="button-style" onClick={onDepositPageHandle}>Credit</button>
        <button className ="button-style"disabled ={loan?true:false} onClick={onLoanHandle}>{loan?"loanApplied":"applyloan"}</button>
        </div>
    )
}

export default DepositPage

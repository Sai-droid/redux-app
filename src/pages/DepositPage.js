import React from 'react'
import {useSelector,useDispatch} from 'react-redux'

function DepositPage() {
    const balance = useSelector((state)=>state.balance);
    const dispatch = useDispatch();
    const onDepositPageHandle =()=>{
        dispatch({
            type:"Deposit",
            payload:10
        })
    }
    return (
        <><h1>Balance:{balance}</h1>
        <button onClick={onDepositPageHandle}>Transact</button>
        
        </>
    )
}

export default DepositPage

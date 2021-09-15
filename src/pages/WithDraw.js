import React from 'react'
import {useSelector,useDispatch} from 'react-redux'


function WithDraw() {
    const balance = useSelector(state=>state.balance)
    const dispatch = useDispatch()
    const onWithDrawHandle =()=>{
        dispatch({type:"Withdraw",payload:10})
    }
    return (
        <div>
            <h1>Balance:{balance}</h1>
            <button onClick={onWithDrawHandle}>Transact</button>
        </div>
    )
}

export default WithDraw

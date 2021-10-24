import React,{useState}from 'react'
import {useSelector,useDispatch} from 'react-redux'
import Button from "@mui/material/Button";
import HomeTwoToneIcon from "@mui/icons-material/HomeTwoTone";
import { NavLink } from "react-router-dom";
import ListPrice from './ListPrice';


function DepositPage() {


    const balance = useSelector((state)=>state.reducer.balance);
    const loan = useSelector((state)=>state.loanReducer.loan);


    const [price,setPrice] = useState(false)

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

    const onList = () =>{
        setPrice(!price)
    }


    return (
        <div className="dep-style">
        <h1>Balance:{balance}</h1>
        <Button size="small" color="primary" variant="outlined">
     
     <NavLink to="/home" className="navlink-style">
       <HomeTwoToneIcon />
       Home
     </NavLink>
   </Button>
   <Button size="small" color="secondary"  onMouseOver ={onList}>ListofPrices</Button>

        <button className ="button-style" onClick={onDepositPageHandle}>Credit</button>
        <button className ="button-style"disabled ={loan?true:false} onClick={onLoanHandle}>{loan?"loanApplied":"applyloan"}</button>
        
            {
                price?<ListPrice />:null
            }
    
        </div>
    )
}

export default DepositPage



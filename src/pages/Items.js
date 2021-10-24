import React, { useEffect, useState } from "react";
import { useSelector, useDispatch, shallowEqual } from "react-redux";
import breadReducer from "../reducers/breadReducer";
import costReducer from "../reducers/costReducer";
import ProductPagee from "./ProductPagee";
import Button from "@mui/material/Button";
import HomeTwoToneIcon from "@mui/icons-material/HomeTwoTone";
import { NavLink } from "react-router-dom";
import Cost from "./Cost";

function Items() {
  // const cost = useSelector((state) => state.costReducer.cost);

  //  const items = useSelector((state)=>state.breadReducer.data);

  // const {
  //   breadReducer: {
  //     data: items = {} ,
  //   },

  //   costReducer: {
  //     cost: { totalcost },
  //   },
  // } = useSelector(
  //   ({ breadReducer, costReducer }) => ({ breadReducer, costReducer }),
  //   shallowEqual
  // );

  const {
    breadReducer: { data: items },
    costReducer: {
      // cost: totalcost,
      totalCost:TOTALCOST,
      totalItems:TOTALITEMS
    },
  } = useSelector(
    ({ breadReducer, costReducer }) => ({ breadReducer, costReducer }),
    shallowEqual
  );
console.log(TOTALCOST);
  const dispatch = useDispatch();

  const addHandle = (e) => {
    console.log(e);
    dispatch({
      type: "addToCart",
      
      payload: e,
    });
  };

  
  const subHandle = (e) => {
    dispatch({
      type: "removeFromCart",
      payload: e,
    });
  };

  return (
    <div>
      <div className="check-out">
        <Button size="small" color="primary" variant="outlined">
          <NavLink to="/home" className="navlink-style">
            <div>
              <HomeTwoToneIcon />
              <div> Home</div>
            </div>
          </NavLink>
        </Button>
      </div>
    <h4> totalCost:{TOTALCOST} cart:{TOTALITEMS}</h4>
    <button onClick ={()=>{
      dispatch({
        type:'PLACE THE ORDER'
      })
    }}>PLACETHEORDER</button>
      <div className="button-wrapper">
        {items.map((item, i) => {
          return (
            <div>
              <ProductPagee
                name={item.name}
                title={item.title}
                price={item.price}
                imagee={item.image}
                description={item.description}
                onClickadd={addHandle}
                onClicksub={subHandle}
                index={i}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Items;

// const incrementNumber = useCallback(() => {
//   setNumber(number + 1)
// }, [number])

// const squaredNum = useMemo(()=> {
//   return squareNum(number);
// }, [number])

// useCallback( () => {
//     return setNumber(number+1)
//   },
//   [number],
// )

// useMemo( () =>{
//   return squarednum(no)
// } 
// , [no])


// useEffect(()=>{
// getComputedStyle();
// },[])

// useCallback(
//   () => {
//     return 
//   },
//   [],
// )

// useMemo(()=>{
//   return
// })
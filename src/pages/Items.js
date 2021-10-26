import React, { useEffect, useState, useRef } from "react";
import useDoubleClick from "use-double-click";
import { useSelector, useDispatch, shallowEqual } from "react-redux";
import breadReducer from "../reducers/breadReducer";
import costReducer from "../reducers/costReducer";
import ProductPagee from "./ProductPagee";
import Button from "@mui/material/Button";
import HomeTwoToneIcon from "@mui/icons-material/HomeTwoTone";
import { NavLink } from "react-router-dom";
import Cost from "./Cost";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

function Items() {
  const [toggle, setToggle] = useState(false);
  const buttonRef = useRef();
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
      totalCost: TOTALCOST,
      totalItems: TOTALITEMS,
    },
  } = useSelector(
    ({ breadReducer, costReducer }) => ({ breadReducer, costReducer }),
    shallowEqual
  );
  console.log(TOTALCOST);
  const dispatch = useDispatch();

  const addHandle = (e) => {
    dispatch({
      type: "addToCart",

      payload: e,
    });
  };

  useDoubleClick({


    onSingleClick: () => {

      alert(`order is placed ${TOTALCOST}`);

      dispatch({
        type: "PLACE THE ORDER",
      });
    },


    onDoubleClick: () => {
      setToggle(!toggle);
    },
    ref: buttonRef,
    latency: 250,
  });

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
      {toggle && <div>order is dispatched</div>}
      <div style ={{
        backgroundColor:'',
        padding:'5px 5px',
        width:'150px',
        border: 'thick double #32a1ce',
        boxshadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
  
      
      }}>
      <span > TOTALPRICE:{TOTALCOST}</span>
      <button ref={buttonRef} style={{ borderRadius: "5vw" }}>
        <div
          style={{
            display: "flex",
          }}
        >
          {TOTALITEMS} <ShoppingCartIcon color="primary" />
        </div>
      </button>
      </div>
     
      <div className="button-wrapper" 
    >
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

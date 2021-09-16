import React,{useEffect,useState} from "react";
import { useSelector, useDispatch } from "react-redux";
import breadReducer from "../store/breadReducer";

function Items() {
   const items = useSelector((state) => state.breadReducer.data);
  const totalcost = useSelector((state) => state.breadReducer.totalcost);

  // const [items,setItems]=useState([])
  
  const dispatch = useDispatch();

//   const adding =()=>{
// setItems(...things)
//   }

  const addHandle = (e) => {
    // adding();
    dispatch({
      type: "addToCart",

      payload: e
    });
   
  };

  return (
    <div>
      <h1>totalcost:{totalcost}</h1>
      <br />
      <div className="button-wrapper">
        {items.map((item) => {
        
          return (
            
            <div className="item-price">
              <h1>{item.price}</h1>
              <button className="button-price" onClick={
                () => addHandle(item.price)
                }>+</button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Items;

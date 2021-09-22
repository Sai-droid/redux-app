import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import breadReducer from "../store/breadReducer";
import costReducer from '../store/costReducer'
import ProductPagee from "./ProductPagee";
import Button from "@mui/material/Button";
import HomeTwoToneIcon from "@mui/icons-material/HomeTwoTone";
import { NavLink } from "react-router-dom";
import Cost from "./Cost";

function Items() {
  const items = useSelector((state) => state.breadReducer.data);
  const totalcost = useSelector((state) => state.costReducer.cost);

  const dispatch = useDispatch();

  const addHandle = (e) => {
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
            <div > <HomeTwoToneIcon  />
           <div> Home</div>
             </div>
           
          </NavLink>
        </Button>
      </div>

      <br />
      <div className="button-wrapper">
        {items.map((item) => {
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
              />
            </div>
          );
        })}
      </div>
    </div>
  
  );
}

export default Items;

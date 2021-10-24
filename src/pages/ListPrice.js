import React, { useState } from "react";
import breadReducer from "../reducers/breadReducer";
import { useSelector } from "react-redux";
import Button from "@mui/material/Button";
import AddShoppingCartTwoToneIcon from "@material-ui/icons/AddShoppingCartTwoTone";
import RemoveShoppingCartTwoToneIcon from "@material-ui/icons/RemoveShoppingCartTwoTone";
import "../App.css";

function ListPrice() {
  const items = useSelector((state) => state.breadReducer.data);

  const [list, setList] = useState(items);

  const priceFilter = (event) => {
    let price = event.target.value;
    setList(items.filter((item) => item.price > price));
  };

  return (
    <div>
      <input onChange={priceFilter} />

      <div className="container">
        {list.map((item) => {
          return (
            <div key={item.id} className="card-container">
              <h6> {item.description}</h6>
              <h6> {item.price}</h6>
              <img className="img-div" src={item.image} />
              <Button size="small" variant="outlined">
                <AddShoppingCartTwoToneIcon /> add
              </Button>
              <Button size="small" variant="outlined">
                <RemoveShoppingCartTwoToneIcon />
                REmove
              </Button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ListPrice;

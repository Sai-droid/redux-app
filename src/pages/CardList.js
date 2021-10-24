import React from "react";
import HeaderInfo from "./HeaderInfo";
import "../App.css";
import DeleteIcon from "@mui/icons-material/Delete";
import styled from "styled-components";

const CardList = ({ item, index, onDelete }) => {
  const Button = styled.button`
    background: transparent;
    border-radius: 3px;
    border: 1px solid teal;
    color: palevioletred;
    margin: 0 1em;
    padding: 0.25em 1em;
    hover: {
        backgroundColor: "white",
      }
  `;

  return (
    <div className="list-items">
      <h1>{item}</h1>
      <Button
        onClick={() => {
          onDelete(index);
        }}
      >
        <DeleteIcon size="small" />
      </Button>
    </div>
  );
};

export default CardList;

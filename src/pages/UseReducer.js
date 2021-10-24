import React, { useReducer, useState } from "react";
import styled from "styled-components";

const initialState = {
  firstname: "saicharan",
  lastname: "kalakonda",
  count:0
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case "CHANGE LASTNAME":
      return {
        ...state,
        lastname: "Kalakonda :) ".concat(action.payload),
      };

    case "CHANGE FIRSTNAME":
      return {
        ...state,
        firstname: "charan",
      };
      case "INCREMENT":
        return {
          ...state,
          count:state.count +1
        };
        case "DECREMENT":
          return {
            ...state,
            count:state.count>0?state.count-1:0
          };
        case "RESET":
        return {
          ...state,
          count: 0
        }
    default:
      return state;
  }
}

const Acomp = () => {
  const [A, setA] = useState("firstcomponent");


const aHandler = (value) =>{
    setA(A.concat(value))
}

  return <>{A}
  <Bcomp handlerA ={aHandler}/></>;
};




const Bcomp = ({handlerA}) => {

    const [B, setB] = useState("secondcomponent");

    const bHandler = () =>{
        handlerA(B)
    }
    const TomatoButton = styled.button`
    border-left: 10px solid red;
    color: teal;
    padding: 0.2em;
    border: 1px solid white;
    padding: 0.25em 1em;
    :hover {
      color: black;
      background: greenyellow;
    }
  `;
  
    return <>
  
    <TomatoButton onClick = {bHandler}>changeA</TomatoButton>
    </>;
  };





const UseReducer = () => {
  const [reducerState, dispatch] = useReducer(reducer, initialState);
  // const [formState, dispatch] = useReducer(formReducer, initialState);

  const nameChangeHandler = () => {
    dispatch({
      type: "CHANGE FIRSTNAME",
    });
  };

  const fnameChangeHandler = () => {
    dispatch({
      type: "CHANGE LASTNAME",
      payload: "charan",
    });
  };

  const countHandler = () => {
    dispatch({
      type: "INCREMENT",
  
    });
  };

const decHandler = () =>{
  dispatch({
    type:'DECREMENT'
  })
}

const resetHandler = () =>{
  dispatch({
    type:'RESET'
  })
}

  const TomatoButton = styled.button`
    border-left: 10px solid red;
    color: teal;
    padding: 0.2em;
    border: 1px solid white;
    padding: 0.25em 1em;
    :hover {
      color: black;
      background: greenyellow;
    }
  `;

  return (
    <>
      <h3>
        firstname:{reducerState.firstname} lastname:{reducerState.lastname} count :{reducerState.count}
      </h3>
      <TomatoButton onClick={nameChangeHandler}> changeData</TomatoButton>
      <TomatoButton onClick={countHandler}> INC+</TomatoButton>
      <TomatoButton onClick={decHandler}> DEC</TomatoButton>
      <TomatoButton onClick={resetHandler}> RESET</TomatoButton>
      <TomatoButton onClick={fnameChangeHandler}> changeData</TomatoButton>
      <Acomp />
    </>
  );
};

export default UseReducer;

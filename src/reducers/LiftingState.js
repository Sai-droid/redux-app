import { borderRadius } from "@mui/system";
import React, { useState, useEffect, useCallback, useMemo } from "react";
import { useHistory, useLocation, useParams } from "react-router";
import styled from "styled-components";
import axios from "axios";
import { keyframes } from 'styled-components'
import DeleteIcon from '@mui/icons-material/Delete';

const LiftingState = () => {
  const [name, setName] = useState("charan ");
  const { fistname, lastname } = useParams();
  const [num, setNum] = useState(1);
  const [fact, setFact] = useState(1);



//   const data = { name: 'name', job: 'job' };
//   axios.post('https://reqres.in/api/users', data)
//     .then(response => {
//       console.log("Status: ", response.status);
//       console.log("Data: ", response.data);
//     }).catch(error => {
//       console.error('Something went wrong!', error);
//     });
const values ={num,fact}
const postData = async() => {
const response = axios.post("http://localhost:8080/data",values)
}


useEffect(() => {
   postData();
}, [values])





  const nameChange = useCallback(
    (value) => {
      console.log("name");
      setName(name.concat(value).toUpperCase());
    },
    [name]
  );

  const factorial = useCallback(
    (num) => {
      let result = 1;
      for (let i = 1; i <= num; i++) {
        result = result * i;
      }
      console.log(result);
      return result;
    },
    [num]
  );

  const calcFact = useCallback(
    (num) => {
      //    console.log('usecallback is not working')
      setFact(factorial(num));
    },
    [num]
  );

  //   const factorial = useCallback(
  //       () => {
  //         let result = 1;
  //         for(let i = 1; i<=value;i++ ){
  //             result = result*i;
  //         }
  //         console.log(result)
  //         return result;
  //       },
  //       [value],
  //   )

  const Button = styled.button`
    background: transparent;
    border-radius: 3px;
    border: 1px solid teal;
    color: palevioletred;
    margin: 0 1em;
    padding: 0.25em 1em;

  `;
  return (
    <>
      <h5>{name}</h5>
      <h5>
        firstname:{fistname} lastname:{lastname}
      </h5>
      <div
        style={{
          padding: "2px",
          width: "50px",
          border: "2px solid pink",
          color: "white",
          backgroundColor: "black",
        }}
      >
        {fact}
      </div>
      <label>
        enter any value and get factorial of it:
        <input
          type="num"
          value={num}
          onChange={(event) => {
            setNum(event.target.value);
            calcFact(num);
          }}
        />
      </label>

      {/* <h6>{elements.map((element) => factorial(element))} </h6> */}

      <ChildComp nameHandler={nameChange} />
    </>
  );
};

const ChildComp = ({ nameHandler }) => {
  const [lastname, setLastname] = useState("kalakonda");

  const changeName = () => {
    nameHandler(lastname);
  };
  const TomatoButton = styled.button`
    border-left: 10px solid red;
    color: teal;
    padding: 0.2em;
    border: 1px solid white;
    padding: 0.25em 1em;
    :hover {
    color:black;
    background: teal;
    }
  `
  const rotate = keyframes`
  from {
    transform: rotate(90deg);
  }

  to {
    transform: rotate(180deg);
  }
`;

// Here we create a component that will rotate everything we pass in over two seconds
const Rotate = styled.div`
  display: inline-block;
  animation: ${rotate} 2s linear infinite;
  padding: 2rem 1rem;
  font-size: 1.2rem;
`;



  return (
    <div>
      <TomatoButton onClick={changeName}> liftingupstate </TomatoButton>
      <Rotate>&lt; 💅🏾 &gt; <DeleteIcon/>ab</Rotate>
    </div>
  );
};

export default LiftingState;

import React, { useState, useEffect } from "react";
import AddBoxSharpIcon from "@mui/icons-material/AddBoxSharp";
import PractisePage from "./PractisePage";
import { useHistory,useLocation } from "react-router";
import LiftingState from "../reducers/LiftingState";
 
const useUpdateLogger = (value) => {
  useEffect(() => {
    console.log(value);
  }, [value]);
};

const HigherOrder = (Component) => (props)=>{

  const makeGreen = {
    style: {
      // color: "white",
      // backgroundColor: "black",

      // 'button:hover': {
      //   border: '5px solid black',
      //   color: "white",
      // },
       
        padding: '1em',
          color:'red',
        ':hover': {
          border: '1px solid black',
          backgroundColor:'red'
        ,
    
        '@media (max-width: 200px)': {
          width: '100%',
    
          ':hover': {
            background: 'red',
          }
        }
      },

    },
  };

  // console.log(props)

  const newProps = {
    ...makeGreen,
  };

  return <Component {...newProps} />;
};

// using props children
const PropsChildren =(props)=>{
  return(
    <>
    <h1>hello world {props.item}</h1>
    <h1>{props.children} using props children</h1>
    </>
  )
}

const CustomButton = (props) => <button style={props.style}>usingHoc</button>;

let temp =  'xyz';
const MakeGreen = HigherOrder(CustomButton)

const ApplyHoc = (props) => {
  const [price, setPrice] = useState(5);

  useUpdateLogger(price);

  const incrCounter = () => {
    props.addCounter(price);
    console.log(props.count);
  };

  const location = useLocation();
  const pathname = location.pathname
  console.log(`${pathname} pathname is displayed`)
 
  return (
    <>
      <h5>counter:{props.count}</h5>
      <button
        onClick={() => {
          incrCounter();
        }}
      >
        <AddBoxSharpIcon size="small" color="secondary" />
      </button>
      {pathname ==='/headerinfo'&&<h6>useLocation is succesfully implemented</h6>}
      <PropsChildren item = 'items'>hello world ihsdgoihsd sfgiohfsogi</PropsChildren>
      <CustomButton />
      <useReducer />
      <MakeGreen />
      <PractisePage />
      <LiftingState/>

    </>
  );
};
export default ApplyHoc;




// useEffect(() => {

//   effect

//   return () => {
//     cleanup
//   }

// },[])


// const parentComponent = () => {

//   const [lastname, setLastName] = useState("");

//   const nameChange = (value) => {
//     setLastName(value);
//   };

//   return (
//     <>
//       {/* <button onClick={nameChange}></button> */}
//       <childComponent namClick={nameChange} />
//     </>
//   );
// };

// const childComponent = (props) => {
//   const [name, setName] = useState("xyz");

//   const someChange = () => {
//     props.children(value);
//   };

//   return (
//     <>
//       <h1>x</h1>
//     </>
//   );
// };


// getItems

// useEffect(() => {
  
// getItems();

//   ret urn () => {
//     cleanup
//   }
// })

// Const a={name:muthu}

// Const b={skill:react}

// Const c=?


// const c = { ...a,...b,course:'node'}



// useHistory

// const history = useHistory();

// const onRoutetoHome =()=>{
//   history.push('/home')
// }

// <button onClick ={onRoutetoHome}>submit</button>



// const initialState ={
//   cost: 0,
// }


// const reducer = (state=initialState,action)=>{
//   switch(action){
//     case:' '
//     return {

//     }
//     case:''
//     return {

//     }
//   }
// }

// const compA = () =>{

// const[compState,dispatch] = useReducer(reducer,initialState)


// return(
//   <button onClickk ={(e)=>{dispatch({
//     type:'action'
//     payload: e
//   })}></button>
// )


// }
import React, { useState,useMemo,useEffect} from "react";
import CardList from "./CardList";
import FormPage from "./FormPage";
import FetchData from "./FetchData";
import styled from 'styled-components'
import { useHistory } from "react-router";
import ApplyHoc from "./ApplyHoc";
import { useLocation } from "react-router";
import UseReducer from "./UseReducer";


const HeaderInfo = () => {
  const [isVisible, setIsVisible] = useState(false);



  const[count,setCount] = useState(0);

  const history = useHistory();
  const [items, setItems] = useState([]);
  const[value,setValue] = useState(0);

  // const showSomeThing = () => {
  //   setIsVisible(!isVisible);
  // };
  
  const Button = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 1px solid teal;
  color: palevioletred;
  margin: 0 1em;
  padding: 0.25em 1em;
`

  const listItemsAdd = () => {
    let elem = items.length + 1;
    setItems((items) => [...items, elem]);
    // console.log(items);
  };


  const incrementCounter = (val) => {
    console.log('not using usecallback')
    setCount(count+val);
  }
  
  const squareNum = (num)=>{
    console.log('not using memo')
    return num*num;
  }
  const onChangeHandler = (e) => {
    setValue(e.target.value);
  }
  // const squaredNum = useMemo(()=> {
  //   console.log('usememo is')
  //   return squareNum(value);
  // }, [value])

   const squaredNum = useMemo(()=>{
     console.log('using memo')
    return squareNum(value);
},[value]);

  const listItemsDelete = () => {
    let newArray = [...items];
    newArray.pop();
    setItems(newArray);
  };

  const removeItem =(currentIndex) => {
    const filteredList = items.filter((item,index) =>  currentIndex !== index );
    setItems(filteredList);
  };

  const routeHandle =() =>{
    history.push('./homeee')
  }
  
  let arr =[1,2,3,4];
  let sum = arr.reduce((acc,cur)=>{
    console.log('reduce function is running again and again')
    return acc + cur;
  })
  const replace = () => {

    history.replace("/signup");

};
const replacee = () => {

  history.replace("/DepositPage");

};
const goBack = () => {

  history.goBack();

};



const users = [
  { 
      'name': 'Alex',
      'address': '15th Park Avenue',
      'age': 43
  },
  { 
      'name': 'Bob',
      'address': 'Canada',
      'age': 53
  },
  { 
      'name': 'Carl',
      'address': 'Bangalore',
      'age': 26
  }
];

let person ={
  name:'charan',
  age:'22',
  address:{
    city:'hyderabd'
  }
}

let {address : { city = 'fhh' }} = person

console.log(person.address.city)

for(let { name, age ,address} of users) {
  console.log(`${name} is ${age} years old! and address is ${address}`);
}

  return (
    <>
    
    <h2>{sum}</h2>
    <FetchData />
    <FormPage />
    <button onClick={replace}>HistoryReplace</button>
    <button onClick={replacee}>HistoryPush</button>
    <button onClick={goBack}>goBack</button>
    <input type="number" placeholder="Enter a number"
          value={value} onChange={onChangeHandler}>
      </input>
      <div><h3>OUTPUT: {squaredNum} countvalueinheaderinfo:{count} Balance:</h3></div>

      {/* <h1>hello world</h1>
      <p>hello</p> */}
      {/* {isVisible && <div>hello</div>} */}

      <Button onClick={listItemsAdd}>Add</Button>
      <Button onClick={listItemsDelete}>DeleteItem</Button>
      <Button onClick ={routeHandle}>LoginPage</Button>
      <ApplyHoc  addCounter ={incrementCounter} count ={count} />
      <UseReducer />
      {items.map((item,i) => {
        return <CardList key = {Math.random()} item={item} onDelete={removeItem} index ={i} />;
      })}

      {/* <button onClick={showSomeThing}>Toggle</button> */}
    </>
  );
};

export default HeaderInfo;



// const location = useLocation();




// const[width,setWidth] = useState(window.screen.width)

// const handler = () =>{
//   setWidth(window.innerWidth)
// }

// useEffect( ()=>{
  
//   window.addEventListener('resize',handler)
//   return()=>{
//     window.removeEventListener('resize',handler)
//   }
// })



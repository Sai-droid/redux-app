import React, { createContext, useEffect, useState ,useReducer} from "react";
import { useContext } from "react";
import PropTypes from 'prop-types';

const messageContext = createContext();

function UseContext() {






  const [width, setWidth] = useState(window.screen.width);

  const widthHanlder = () => {
    setWidth(window.innerWidth);
  };
  useEffect(() => {
    window.addEventListener("resize", widthHanlder);

    return () => {
      window.removeEventListener("resize", widthHanlder);
    };
  });

  const value = useContext(messageContext);
  return (
    <messageContext.Provider value={45}>
      <div>
        <h2>{width}</h2>
        <messageContext.Consumer>
          {(value) => <div>The answer is {value}.</div>}
        </messageContext.Consumer>
        <ProptypeeCheck strr ='hello world' />
      </div>
    </messageContext.Provider>
  );
}


const ProptypeeCheck =({strr})=>{

   
    return(
        <>
        <h4>{strr}</h4>
        </>
    )

}
ProptypeeCheck.propTypes ={
    strr:PropTypes.string
}

export default UseContext;

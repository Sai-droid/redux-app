import SelectInput from "@material-ui/core/Select/SelectInput";
import React, { useEffect, useLocation } from "react";

const initialState = {
  cost: 0,
};


function formReducer(state = initialState, action) {
  switch (action.type) {
    case "HANDLE INPUT TEXT":
      return {
        ...state,
        [action.field]: action.payload,
      };
    default:
      return state;
  }
}

function Reducer(state = initialState, action) {
  switch (action.type) {
    case "INCREMENT":
      return {
        ...state,
        cost: cost + 2,
      };
    default:
      return {
        state,
      };
  }
}

const ComponentA = () => {
  const [compState, dispatch] = useReducer(Reducer, initialState);

  return (
    <>
      <h4>{compState.cost}</h4>
    </>
  );
};


const MockPage = () => {
  const location = useLocation();

  useEffect(() => {
    console.log(location.pathname);
  }, [location.pathname]);

  let obj = {
    a: "x",
    b: "y",
    address: {
      street: "2nd street",
    },
  };

  let obj2 = {
    // {a,b,address}=obj),

    c: "z",
    d: "av",
  };
  const promise = new Promise((res, rej) => {
    res("hello");
  });

  promise
    .then((result) => console.log(res))
    .catch((err) => console.log("error"));


  const [value, setValue] = useState(5);

  const factorial = useMemo(() => {
    let result = 1;

    for (let i = 1; i <= value; i++) {
      result = result * i;
    }

    return result;
  }, [value]);

  const changeName = useCallback(() => {
    setName("changingName");
  }, [input]);

  return <></>;
};

export default MockPage;

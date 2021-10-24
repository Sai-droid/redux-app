import React, { useReducer,useRef,useEffect } from "react";

const initialState = {
  username: "",
  address: "",
  street: "",
  account: "",
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

const FormPage = () => {
  const [formState, dispatch] = useReducer(formReducer, initialState);
  const inputRef = useRef();

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const handleTextChange = (event) => {
    const {
      target: { name, value },
    } = event;

    dispatch({
      type: "HANDLE INPUT TEXT",
      field: name,
      payload: value,
    });
  };

  return (
    <div>
      <form>
        <label>
          userName:
          <input
            type="text"
            name="username"
            ref ={inputRef}
            value={formState.username}
            onChange={handleTextChange}
          />
        </label>
        <label>
          address:
          <input
            type="textArea"
            name="address"
            value={formState.address}
            onChange={handleTextChange}
          />
        </label>
        <label>
          street:
          <input
            type="textArea"
            name="street"
            value={formState.street}
            onChange={(e) => handleTextChange(e)}
          />
        </label>
        <label>
          Account:
          <input
            type="number"
            name="account"
            value={formState.account}
            onChange={(e) => handleTextChange(e)}
          />
        </label>
      </form>
    </div>
  );
};

export default FormPage;

const initialState = {
  cost: 0,
};

function costReducer(state = initialState, action) {
  switch (action.type) {
    case "addToCart":
      let items = state.cost;
      return {
        ...state,

        cost: state.cost + action.payload,
      };
    case "removeFromCart":
      return {
        ...state,

        cost: state.cost > 0 ? state.cost - action.payload : 0
      };

    default:
      return state;
  }
}

export default costReducer;

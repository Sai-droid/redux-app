const initialState = {
  cost: 0,
  totalItems:0,
  totalCost:0
};

function costReducer(state = initialState, action) {
  switch (action.type) {
    case "addToCart":
      let items = state.cost;


      return {
        ...state,

        cost: state.cost + action.payload,
        totalItems:state.totalItems+1,
        totalCost: state.totalCost + action.payload
      };
      
    case "removeFromCart":
      return {
        ...state,

        cost: state.cost > 0 ? state.cost - action.payload : 0,
        totalItems:state.totalItems>0?state.totalItems-1:0,
        totalCost: state.totalCost>0?state.totalCost - action.payload:0
       
      };
      case "PLACE THE ORDER":
        return {
          ...state,
         totalItems:0,
         totalCost:0
        };

    default:
      return state;
  }
}

export default costReducer;

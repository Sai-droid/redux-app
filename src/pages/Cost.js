
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import costReducer from '../reducers/costReducer'

function Cost() {
   
    const cost = useSelector((state) => state.costReducer.cost);
    
    return (
        <div>
        totalcost:{cost}
        </div>
    )
}

export default Cost

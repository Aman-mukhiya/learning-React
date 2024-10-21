import { useReducer } from "react";

const initialState = {count:0}

const ACTIONS = {
    Increment:"Increment",
    Decrement:"Decrement",
    Reset:"Reset",
    IncrementByValue:"IncrementByValue",
    DecrementByValue:"DecrementByValue"
}

const reducer = (state, action) => {

    switch(action.type){

        case (ACTIONS.Increment): return { ...state, count: state.count + 1 };
     
        case (ACTIONS.Decrement): return { ...state, count: state.count - 1 };

        case (ACTIONS.IncrementByValue): return { ...state, count: state.count + action.payload };

        case (ACTIONS.DecrementByValue): return { ...state, count: state.count - action.payload };

        case (ACTIONS.Reset): return { ...state, count: 0 };

        default: return{state}
    }
     
}
const useCounter = () => {

    const increment = () => { dispatch({type: ACTIONS.Increment})}
    const decrement = () => { dispatch({type: ACTIONS.Decrement})}
    
    const IncrementByValue = (value) => {dispatch({type: ACTIONS.IncrementByValue, payload:parseInt(value) })}
    const DecrementByValue = (value) => {dispatch({type: ACTIONS.DecrementByValue, payload:parseInt(value) })}

    const reset = () => { dispatch({type: ACTIONS.Reset})}

    const [state, dispatch] = useReducer(reducer, initialState);

    return { state, increment, decrement,IncrementByValue,DecrementByValue, reset}

}


export{useCounter}
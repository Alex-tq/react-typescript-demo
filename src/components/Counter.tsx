import React, { useReducer } from "react";

const initialState = { count: 0 };

type StateTypes = {
  count: number;
};
type ActionType = {
  type: "increment" | "decrement";
  payload: number;
};

function reducer(state: StateTypes, action: ActionType) {
  switch (action.type) {
    case "increment":
      return { count: state.count + action.payload };
    case "decrement":
      return { count: state.count - action.payload };
    default:
      return state;
  }
}

function Counter() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <>
      Count: {state.count}
      <button onClick={() => dispatch({ type: "increment", payload: 10 })}>
        Increment 10
      </button>
      <button onClick={() => dispatch({ type: "decrement", payload: 10 })}>
        Decrement 10
      </button>
    </>
  );
}

export default Counter;

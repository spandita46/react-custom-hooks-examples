"use client";

import React from "react";
import useCounter from "./useCounter";

const Counter = () => {
  const [count, increment, decrement] = useCounter(8);
  return (
    <>
      <label> Counter Value: </label>
      <label>{count}</label>
      <br />
      <button
        className="mt-2 ml-2 mr-2 border-2 border-spacing-1"
        onClick={increment}
      >
        Increment
      </button>
      <button
        className="mt-2 ml-2 mr-2 border-2 border-spacing-1"
        onClick={decrement}
      >
        Decrement
      </button>
    </>
  );
};

export default Counter;

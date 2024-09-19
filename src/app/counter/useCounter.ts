"use client";
import { useState } from "react";

function useCounter(
  initialValue: number = 0
): [number, () => void, () => void] {
  const [count, setCount] = useState<number>(initialValue);

  const increment = () => setCount((prevState) => prevState + 1);

  const decrement = () =>
    setCount((prevState) => (prevState > 0 ? prevState - 1 : 0));

  return [count, increment, decrement];
}

export default useCounter;

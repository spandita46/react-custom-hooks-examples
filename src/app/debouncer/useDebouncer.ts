"use client";

import React, { useEffect } from "react";

function useDebouncer(debouncedValue: string, delay: number): [string] {
  const [returnVal, setReturnVal] = React.useState<string>("");
  useEffect(() => {
    const timerId = setTimeout(() => {
      setReturnVal(debouncedValue);
    }, delay);

    return () => {
      clearTimeout(timerId);
    };
  }, [debouncedValue, delay]);
  return [returnVal];
}

export default useDebouncer;

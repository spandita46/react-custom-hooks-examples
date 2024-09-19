"use client";
import React from "react";
import useDebouncer from "./useDebouncer";

const Debouncer = () => {
  const [key, setKey] = React.useState<string>("");
  const [debouncedKey] = useDebouncer(key, 500);

  const handleSearchKeyChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    let { value } = event.currentTarget;
    setKey(value);
  };

  return (
    <div className="flex-1 flex-col mt-5">
      <div>
        <label htmlFor="searchKey">Enter the search keyword</label>
        <input
          id="searchKey"
          onChange={handleSearchKeyChange}
          value={key}
          className="text-black ml-5 border-solid border-2 border-orange-300"
        />
      </div>
      <div className="mt-5">
        <label>Debounced Value: </label>
        <label>{debouncedKey}</label>
      </div>
    </div>
  );
};

export default Debouncer;

"use client";

import React, { useState } from "react";
import useFetch from "./useFetcher";

const Fetcher = () => {
  const [data, isLoading, refresh, error] = useFetch("/todos");
  return (
    <>
      <button
        className="mt-2 ml-2 mr-2 border-2 border-spacing-1"
        disabled={isLoading}
        onClick={() => refresh()}
      >
        Refresh
      </button>

      <>{error && <label>{error}</label>}</>
      <>{isLoading && <label>{"Loading..."}</label>}</>

      <ul>
        {data.map((item: { title: string; id: number }) => (
          <li key={item.id} className="mt-4 ml-3">
            <label className="mr-3">
              {item.id}
              {"."}
            </label>
            <label>{item.title}</label>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Fetcher;

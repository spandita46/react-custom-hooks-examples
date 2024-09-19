"use client";
import { useEffect, useState } from "react";

function useFetcher(
  url: string
): [data: any[], loading: boolean, refresh: () => void, errorMessage: string] {
  const baseURL = "https://jsonplaceholder.typicode.com";

  const [loading, setLoading] = useState<boolean>(false);
  const [data, setData] = useState<any[]>([]);
  const [errorMessage, setErrorMsg] = useState<string>("");
  const [refetchIndex, setRefetchIndex] = useState<number>(0);

  const refresh = () => setRefetchIndex((prevState) => prevState + 1);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setErrorMsg("");

      try {
        if (!url) {
          throw new Error(`An error occurred: Missing URL`);
        }
        const response = await fetch(`${baseURL}/${url}`);
        if (!response.ok) {
          throw new Error(`An error occurred: ${response.statusText}`);
        }

        const jsonData = await response.json();
        setData(jsonData);
      } catch (error: any) {
        setErrorMsg(error?.message);
      } finally {
        setLoading(false);
      }
    };

    setTimeout(() => {
      fetchData();
    });
  }, [url, refetchIndex]);

  return [data, loading, refresh, errorMessage];
}

export default useFetcher;

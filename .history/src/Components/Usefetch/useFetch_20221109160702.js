import { useState, useEffect } from "react";

const useFetch = (url) => {
  let [data, setData] = useState(null);
  let [isPending, setIsPending] = useState(true);
  let [error, setError] = useState(null);

  useEffect(() => {
    const abortCont = new AbortController()
    setTimeout(() => {
      fetch(url,{signal: })
        .then((response) => {
          if (!response.ok) {
            throw Error("Couldn't fetch the data");
          }
          return response.json();
        })
        .then((data) => {
          setData(data);
          setIsPending(false);
          setError(null);
        })
        .catch((err) => {
          setIsPending(false);
          setError(err.message);
        });
    }, 1000);
    return () => console.log("Cleanup");
  }, [url]);
  return { data, isPending, error };
};
export default useFetch;

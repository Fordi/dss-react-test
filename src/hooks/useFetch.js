import { useState } from "react";
/**
 * Usage:
 *  // in component preamble; names are whatever you want.
 *  const [goFetch, status, data, error] = useFetch();
 *  // in event handler
 *  goFetch(url, fetchOptions);
 *  // in template
 *  {status === "idle" && !data && ...present no-data state...}
 *  {status === "idle" && !!data && ...present data...}
 *  {status === "fetching" && ...show loading...}
 *  {status === "error" && ...show error...}
 */
const useFetch = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [status, setStatus] = useState("idle");

  const goFetch = (url) => {
    (async () => {
      setStatus("fetching");
      setData(null);
      setError(null);

      try {
        const response = await fetch(url);
        if (response.ok) {
          setData(await response.json());
        } else {
          setError(response.statusText);
        }
      } catch (e) {
        setError(e.statusText);
        setStatus("error");
      } finally {
        setStatus("idle");
      }
    })();
  };
  return [goFetch, status, data, error];
};

export default useFetch;

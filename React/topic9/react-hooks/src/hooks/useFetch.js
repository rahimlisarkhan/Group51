import { useEffect } from "react";
import { useState } from "react";

export const useFetch = (url, config) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(null);

  useEffect(() => {
    setLoading(true);
    fetch(url, config)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setData(data);
        setLoading(null);
      })
      .catch((err) => {
        setError(err);
        setLoading(null);
      });
  }, []);

  return { data, error, loading };
};

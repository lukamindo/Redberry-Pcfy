import React, { useEffect, useState } from "react";
import axios from "axios";

export default function useGetFetch(url, defaultData = null) {
  const [data, setData] = useState(defaultData);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(url)
      .then((response) => {
        setData(response.data.data);
      })
      .catch((err) => {
        setError(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [url]);

  return { data, error, loading };
}

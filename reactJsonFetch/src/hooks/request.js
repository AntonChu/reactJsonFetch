import { useState, useEffect } from "react";

export const useRequest = (url, initialData) => {
  const [data, setData] = useState(initialData);
  const [isLoading, setLoading] = useState(false);
  const [hasError, setError] = useState();
  console.log('initial', data, isLoading, hasError);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);

      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(response.statusText);
        }
        const news = await response.json();
        console.log(news);
        setData(news);
        setError(null);
      } catch (e) {
        setError(e.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
    console.log('end', data, isLoading, hasError);
    return [{ data, isLoading, hasError }];
  }, []);
};

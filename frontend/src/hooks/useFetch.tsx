import { AxiosError } from "axios";
import { useEffect, useState } from "react";
import api from "../services/api";

export function useFetch<T>(endpoint: string) {
  const [data, setData] = useState<T>();
  const [isFetching, setIsFetching] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    api
      .get(endpoint)
      .then((response) => {
        setData(response.data);
      })
      .catch((error: AxiosError) => {
        setError(error.message);
      })
      .finally(() => {
        setIsFetching(false);
      });
  }, []);

  return { data, isFetching, error };
}


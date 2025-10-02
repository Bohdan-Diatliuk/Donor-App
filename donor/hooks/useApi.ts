import { useState, useEffect } from "react";

export const useApi = (endpoint: string) => {
  const [data, setData] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`http://192.168.0.100:3000/${endpoint}`) // IP комп'ютера у локальній мережі
      .then(res => res.json())
      .then(json => setData(json))
      .catch(err => console.error(err))
      .finally(() => setLoading(false));
  }, [endpoint]);

  return { data, loading };
};

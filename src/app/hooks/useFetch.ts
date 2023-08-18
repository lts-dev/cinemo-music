import { useEffect, useState } from "react";

/**
 * @hook useFetch
 * @param url
 * @param options
 * @returns
 */
const useFetch = (url: string, options: any = {}): any => {
  const [data, setData] = useState<any>({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetch(url, options);
        const result = await data.json();
        setData({ response: "ok", data: result });
      } catch (error) {
        setData({ response: "error", error });
      }
    };

    void fetchData();
  }, [url]);

  return data;
};

export default useFetch;

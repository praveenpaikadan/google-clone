import React, { useState, useEffect } from "react";
import { API_KEY } from "./keys";
import Response from "./response";

const CONTEXT_KEY = "f2d44818decb3f8c0";

const useGoogleSearch = (term) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      fetch(
        `https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${term}`
      )
        .then((response) => response.json())
        .then((result) => setData(result));
    };
    if (term != null) {
      fetchData();
    } else {
      setData(null);
    }
    console.log("..................." + data);
  }, [term]);

  return { data };
};

export default useGoogleSearch;

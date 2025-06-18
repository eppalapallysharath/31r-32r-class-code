import axios from "axios";
import React, { useEffect, useState } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  useEffect(() => {
    axios
      .get(url)
      .then((res) => setData(res.data))
      .catch((error) => console.log(error));
  }, []);
  return data;
};

export default useFetch;

import axios from "axios";

export const fetchAction = () => {
  return async (dispatch) => {
    const res = await axios.get("https://dummyjson.com/products");
    dispatch({ type: "fetch_api", payload: res.data });
  };
};

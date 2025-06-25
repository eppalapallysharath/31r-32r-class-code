import axios from "axios";
export const incrementAction = () => {
  return {
    type: "increment",
  };
};

export const randomAction = (random) => {
  return {
    type: "random_number",
    payload: random,
  };
};

export const inputAction = (data) => {
  return {
    type: "input",
    payload: data,
  };
};

// export const fetchAPI = () => {
//   return async (dispatch) => {
//     console.log("api");
//     const response = await axios.get(
//       "https://jsonplaceholder.typicode.com/users"
//     );
//     dispatch({
//       type: "fetch_api",
//       payload: response.data,
//     });
//   };
// };

export const fetchAPI = () => {
  const data = async (dispatch) => {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );
    dispatch({
      type: "fetch_api",
      payload: response.data,
    });
  };
  return data();
};

import axios from "axios";

export const fetchProductsAction = () => {
  return async (dispatch) => {
    const response = await axios.get("https://fakestoreapi.com/products");
    dispatch({
      type: "all_products",
      payload: response.data,
    });
  };
};

export const addToCartAction = (product) => {
  return {
    type: "add_to_cart",
    payload: product,
  };
};

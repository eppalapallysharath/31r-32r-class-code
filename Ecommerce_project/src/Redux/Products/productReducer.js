import toast from "react-hot-toast";

const initialState = {
  products: [],
  product: {},
  cart: [],
};

export const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case "all_products": {
      return { ...state, products: action.payload };
    }
    case "add_to_cart": {
      const findProductExist = state.cart.some(
        (item) => item.id === action.payload.id
      );
      if (findProductExist) {
        toast.error("Item already exist. Add another");
        return state;
      } else {
        toast.success("Item added successfully to cart");
        return { ...state, cart: [...state.cart, action.payload] };
      }
    }
    default: {
      return state;
    }
  }
};

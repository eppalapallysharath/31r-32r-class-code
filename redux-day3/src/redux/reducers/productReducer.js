const initialState = {
  productsData: null,
};

export const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "fetch_api": {
      return { ...state, productsData: action.payload };
    }
    default:
      return state;
  }
};

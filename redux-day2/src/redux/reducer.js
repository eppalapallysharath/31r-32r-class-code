const initialState = {
  count: 0,
  number: 0,
  input_text: "",
  users: [],
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "increment":
      return { ...state, count: state.count + 1 };
    case "random_number":
      return {
        ...state,
        // number: Math.floor(Math.random() * 10),
        number: action.payload,
        digit: state.number % 2 === 0 ? "even" : "odd",
      };
    case "input":
      return { ...state, input_text: action.payload };
    case "fetch_api":
      return { ...state, users: action.payload };
    default:
      return state;
  }
};

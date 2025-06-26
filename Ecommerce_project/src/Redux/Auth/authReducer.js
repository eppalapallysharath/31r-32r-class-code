import toast from "react-hot-toast";

const initialState = {
  users: [],
  profile: {},
  isLoggedIn: false,
  error: "",
};

export const authReducer = (state = initialState, action) => {
  const payload = action.payload;
  switch (action.type) {
    case "signup": {
      const user = state.users.find((user) => user.email === payload.email);
      if (user) {
        toast.error("email already existed");
        return { ...state, error: "email already existed" };
      } else {
        toast.success("Registered successfully");
        return { ...state, users: [...state.users, payload], error: "" };
      }
    }
    case "login": {
      const getUser = state.users.find(
        (val) => (val.email = payload.email && val.password == payload.password)
      );
      if (getUser) {
        toast.success("Login success");
        return { ...state, profile: getUser, isLoggedIn: true, error: "" };
      } else {
        toast.error("Login failed");
        return {
          ...state,
          isLoggedIn: false,
          profile: {},
          error: "Login failed",
        };
      }
    }
    case "logout": {
      return { ...state, profile: {}, isLoggedIn: false, error: "" };
    }
    default: {
      return state;
    }
  }
};

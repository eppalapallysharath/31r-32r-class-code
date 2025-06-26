export const signupAction = (email, name, password) => {
  const userData = {
    email: email,
    name: name,
    password: password,
  };

  return {
    type: "signup",
    payload: userData,
  };
};

export const loginAction = (email, password) => {
  const userData = {
    email: email,
    password: password,
  };

  return {
    type: "login",
    payload: userData,
  };
};

export const logoutAction = () => {
  return {
    type: "logout",
  };
};

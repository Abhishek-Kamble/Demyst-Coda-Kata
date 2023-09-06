import { signIn, signUp } from "../../api";

export const signin = async (email, password) => {
  const data = signIn({ email: email, password: password });
  return data;
};

export const signup = async (formData) => {
  const data = signUp(formData);
  return data;
};

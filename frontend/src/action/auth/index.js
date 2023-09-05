import { signIn } from "../../api";

export const signin = async (email, password) => {
  const data = signIn({ email: email, password: password });
  // console.log(data);
  return data;
};

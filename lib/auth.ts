import { Auth } from "aws-amplify";

export const login = async (email: string, password: string) => {
  return await Auth.signIn(email, password);
};

export const forgotPassword = async (email: string) => {
  return await Auth.forgotPassword(email);
};

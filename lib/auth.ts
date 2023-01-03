import { Auth } from "aws-amplify";

export const login = async (email: string, password: string) => {
  return await Auth.signIn(email, password);
};

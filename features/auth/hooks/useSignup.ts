import { createUser } from "graphql/mutations";
import { CreateUserInput, mutation, UserType } from "lib/API";
import { signup } from "lib/auth";
import { useState } from "react";

export const useSignup = () => {
  const [error, setError] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleSignup = async (
    name: string,
    email: string,
    password: string,
    userType: UserType
  ): Promise<boolean> => {
    setIsLoading(true);
    const result = await signup(email, password)
      .then(() => {
        return mutation<CreateUserInput>(createUser, {
          name,
          email,
          userType,
        });
      })
      .then(() => {
        return true;
      })
      .catch((e) => {
        if (e.code === "UsernameExistsException") {
          setError("既に登録済みのメールアドレスです。");
          return false;
        }
        setError(
          "サーバーエラーが発生しています。時間をおいて再度お試しください。"
        );
        return false;
      });
    setIsLoading(false);

    return result;
  };

  return { error, isLoading, handleSignup };
};

import { createUser } from "graphql/mutations";
import { CreateUserInput, mutation, UserType } from "lib/API";
import { signup } from "lib/auth";
import { useState } from "react";
import { useUserStore } from "stores/user";
import { GraphQLResult } from "@aws-amplify/api-graphql";

export const useSignup = () => {
  const [error, setError] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const isGraphQLResult = (arg: any): arg is GraphQLResult<any> => {
    return arg.data !== undefined;
  };

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
      .then((mutationResult) => {
        if (isGraphQLResult(mutationResult)) {
          useUserStore.getState().addUser({
            id: mutationResult.data.createUser.id,
            name: mutationResult.data.createUser.name,
            email: mutationResult.data.createUser.email,
            userType: mutationResult.data.createUser.userType,
          });
        }

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

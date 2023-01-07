import { login, signup } from "lib/auth";
import { useState } from "react";

export const useSignup = () => {
  const [error, setError] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleSignup = async (
    email: string,
    password: string
  ): Promise<boolean> => {
    setIsLoading(true);
    const result = await signup(email, password)
      .then(() => {
        return true;
      })
      .catch((e) => {
        console.log(e);

        if (e.code === "NotAuthorizedException") {
          setError("メールアドレスまたはパスワードが違います。");
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

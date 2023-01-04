import { login } from "lib/auth";
import { useState } from "react";

export const useLogin = () => {
  const [error, setError] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleLogin = async (
    email: string,
    password: string
  ): Promise<boolean> => {
    setIsLoading(true);
    const result = await login(email, password)
      .then(() => {
        return true;
      })
      .catch((e) => {
        if (e.code !== "NotAuthorizedException")
          setError(
            "サーバーエラーが発生しています。時間をおいて再度お試しください。"
          );
        setError("メールアドレスまたはパスワードが違います。");
        return false;
      });
    setIsLoading(false);

    return result;
  };

  return { error, isLoading, handleLogin };
};

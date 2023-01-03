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
        console.log(e);

        setError(
          "ログインに失敗しました。メールアドレスまたはパスワードが違います。"
        );
        return false;
      });
    setIsLoading(false);

    return result;
  };

  return { error, isLoading, handleLogin };
};

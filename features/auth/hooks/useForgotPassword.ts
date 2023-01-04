import { forgotPassword } from "lib/auth";
import { useState } from "react";

export const useForgotPassword = () => {
  const [error, setError] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleForgotPassword = async (email: string): Promise<boolean> => {
    setIsLoading(true);
    const result = await forgotPassword(email)
      .then(() => {
        return true;
      })
      .catch((e) => {
        if (e.code !== "UserNotFoundException") {
          setError(
            "サーバーエラーが発生しています。時間をおいて再度お試しください。"
          );
          return false;
        }
        return true;
      });
    setIsLoading(false);

    return result;
  };

  return { error, isLoading, handleForgotPassword };
};

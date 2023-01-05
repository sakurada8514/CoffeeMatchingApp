import { resetPassword } from "lib/auth";
import { useState } from "react";

export const useResetPassword = () => {
  const [error, setError] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleResetPassword = async (
    email: string,
    code: string,
    newPassword: string
  ): Promise<boolean> => {
    setIsLoading(true);
    const result = await resetPassword(email, code, newPassword)
      .then(() => {
        return true;
      })
      .catch((e) => {
        if (e.code === "CodeMismatchException") {
          setError("認証コードが一致しません。メールを再度ご確認ください。");
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

  return { error, isLoading, handleResetPassword };
};

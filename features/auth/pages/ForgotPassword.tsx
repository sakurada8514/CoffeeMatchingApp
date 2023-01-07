import { TextLink } from "components/Elements/Link";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { ForgotPasswordForm } from "../components/Form/ForgotPasswordForm";
import { Layout } from "../components/Layout";

export const ForgotPassword = () => {
  const router = useRouter();
  useEffect(() => {
    router.prefetch("/password/reset");
  }, []);

  return (
    <Layout title="パスワード再設定">
      <>
        <ForgotPasswordForm
          onSuccess={(email) => {
            router.push({
              pathname: "/password/reset",
              query: { email },
            });
          }}
        />
        <div className="mt-4 flex items-center justify-center">
          <TextLink href="/signup">新規登録</TextLink>
          <span className="mx-4 text-gray-500">/</span>
          <TextLink href="/login">ログイン</TextLink>
        </div>
      </>
    </Layout>
  );
};

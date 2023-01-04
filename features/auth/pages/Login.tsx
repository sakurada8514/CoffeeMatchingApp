import { TextLink } from "components/Elements/Link";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { Layout } from "../components/Layout";
import { LoginForm } from "../components/LoginForm";

export const Login = () => {
  const router = useRouter();
  useEffect(() => {
    router.prefetch("/");
  }, []);

  return (
    <Layout title="ログイン">
      <>
        <LoginForm
          onSuccess={() => {
            router.push("/");
          }}
        />
        <div className="mt-4 flex items-center justify-center">
          <TextLink href="/signup">新規登録</TextLink>
          <span className="mx-4 text-gray-500">/</span>
          <TextLink href="/password/forgot">
            パスワードを忘れた方はこちら
          </TextLink>
        </div>
      </>
    </Layout>
  );
};

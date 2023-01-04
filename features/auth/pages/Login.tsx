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
    <Layout>
      <>
        <LoginForm
          onSuccess={() => {
            router.push("/");
          }}
        />
        <div className="mt-4 flex items-center justify-center">
          <TextLink href="/">新規登録</TextLink>
        </div>
      </>
    </Layout>
  );
};

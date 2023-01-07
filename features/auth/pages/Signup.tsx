import { TextLink } from "components/Elements/Link";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { Layout } from "../components/Layout";
import { SignupForm } from "../components/Form/SignupForm";

export const Signup = () => {
  const router = useRouter();
  useEffect(() => {
    router.prefetch("/login");
  }, []);

  return (
    <Layout title="新規登録">
      <>
        <SignupForm
          onSuccess={() => {
            router.push("/");
          }}
        />
        <div className="mt-4 flex items-center justify-center">
          <TextLink href="/login">ログイン</TextLink>
        </div>
      </>
    </Layout>
  );
};

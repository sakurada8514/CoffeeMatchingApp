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
      <LoginForm
        onSuccess={() => {
          router.push("/");
        }}
      />
    </Layout>
  );
};

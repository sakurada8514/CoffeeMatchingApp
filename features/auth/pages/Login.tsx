import { TextLink } from "components/Elements/Link";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { Layout } from "../components/Layout";
import { LoginForm } from "../components/Form/LoginForm";
import { useNotificationStore } from "stores/notifications";

export const Login = () => {
  const router = useRouter();
  useEffect(() => {
    router.prefetch("/");
  }, []);
  const onSuccess = () => {
    useNotificationStore.getState().addNotification({
      type: "success",
      title: "Success",
      message: "ログインしました。",
    });
    router.push("/");
  };

  return (
    <Layout title="ログイン">
      <>
        <LoginForm onSuccess={onSuccess} />
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

import { TextLink } from "components/Elements/Link";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { Layout } from "../components/Layout";
import { SignupForm } from "../components/Form/SignupForm";
import { useNotificationStore } from "stores/notifications";

export const Signup = () => {
  const router = useRouter();
  useEffect(() => {
    router.prefetch("/login");
  }, []);

  const onSuccess = () => {
    useNotificationStore.getState().addNotification({
      type: "success",
      title: "Success",
      message: "会員登録が完了しました。",
    });
    router.push("/");
  };

  return (
    <Layout title="新規登録">
      <>
        <SignupForm onSuccess={onSuccess} />
        <div className="mt-4 flex items-center justify-center">
          <TextLink href="/login">ログイン</TextLink>
        </div>
      </>
    </Layout>
  );
};

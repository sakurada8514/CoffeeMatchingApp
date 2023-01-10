import { TextLink } from "components/Elements/Link";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { Layout } from "../components/Layout";
import { SignupForm } from "../components/Form/SignupForm";
import { useNotificationStore } from "stores/notifications";
import { UserType } from "lib/API";

export const CompanySignup = () => {
  const router = useRouter();
  useEffect(() => {
    router.prefetch("/");
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
    <Layout title="企業ユーザー新規登録">
      <>
        <SignupForm onSuccess={onSuccess} userType={UserType.Company} />
        <div className="mt-4 flex items-center justify-center">
          <TextLink href="/login">ログイン</TextLink>
          <span className="mx-4 text-gray-500">/</span>
          <TextLink href="/signup">一般の方はこちら</TextLink>
        </div>
      </>
    </Layout>
  );
};

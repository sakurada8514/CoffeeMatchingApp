import { TextLink } from "components/Elements/Link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useNotificationStore } from "stores/notifications";
import { Layout } from "../components/Layout";
import { ResetPasswordForm } from "../components/Form/ResetPasswordForm";

export const ResetPassword = () => {
  const router = useRouter();
  const [email, setEmail] = useState<string>("");
  useEffect(() => {
    router.prefetch("/login");
    if (router.isReady) {
      const email = router.query.email;
      if (email === undefined || Array.isArray(email)) {
        router.push("/login");
        return;
      }
      setEmail(email);
    }
  }, [router]);

  return (
    <Layout title="パスワード再設定">
      <>
        <ResetPasswordForm
          onSuccess={() => {
            router.push("/login");
          }}
          email={email}
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

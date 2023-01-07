import { ErrorAlert } from "components/Elements/Alert/ErrorAlert";
import { InfoAlert } from "components/Elements/Alert/InfoAlert";
import { Button } from "components/Elements/Button";
import { Form } from "components/Form/Form";
import { InputField } from "components/Form/InputField";
import { REGEX, VALIDATION_MESSAGE } from "config/validation";
import * as z from "zod";
import { useResetPassword } from "../../hooks/useResetPassword";

const schema = z
  .object({
    code: z.string().min(1, VALIDATION_MESSAGE.require),
    password: z
      .string()
      .min(1, VALIDATION_MESSAGE.require)
      .regex(REGEX.password, VALIDATION_MESSAGE.password),
    passwordConfirm: z.string().min(1, VALIDATION_MESSAGE.require),
  })
  .superRefine(({ passwordConfirm, password }, ctx) => {
    if (passwordConfirm !== password) {
      ctx.addIssue({
        code: "custom",
        path: ["passwordConfirm"],
        message: VALIDATION_MESSAGE.passwordConfirm,
      });
    }
  });

type ResetPasswordValues = {
  code: string;
  password: string;
  passwordConfirm: string;
};
type ResetPasswordFormProps = {
  onSuccess: () => void;
  email: string;
};
export const ResetPasswordForm = ({
  onSuccess,
  email,
}: ResetPasswordFormProps) => {
  const { error, isLoading, handleResetPassword } = useResetPassword();
  return (
    <Form<ResetPasswordValues, typeof schema>
      onSubmit={async (values) => {
        const result = await handleResetPassword(
          email,
          values.code,
          values.password
        );
        if (result) onSuccess();
      }}
      schema={schema}
    >
      {({ register, formState }) => (
        <>
          {error ? (
            <ErrorAlert>{error}</ErrorAlert>
          ) : (
            <InfoAlert>
              ご登録のメールアドレスに認証コードを送信しました。
              <br />
              認証コードを入力しパスワードを再設定してください。
            </InfoAlert>
          )}
          <InputField
            type="text"
            label="認証コード"
            error={formState.errors["code"]}
            registration={register("code")}
          />
          <InputField
            type="password"
            label="パスワード"
            error={formState.errors["password"]}
            registration={register("password")}
          />
          <InputField
            type="password"
            label="パスワード確認"
            error={formState.errors["passwordConfirm"]}
            registration={register("passwordConfirm")}
          />
          <div className="pt-4">
            <Button
              type="submit"
              color="primary"
              size="md"
              isLoading={isLoading}
              wfull
            >
              再設定
            </Button>
          </div>
        </>
      )}
    </Form>
  );
};

import { ErrorAlert } from "components/Elements/Alert/ErrorAlert";
import { Button } from "components/Elements/Button";
import { Form } from "components/Form/Form";
import { InputField } from "components/Form/InputField";
import { REGEX, VALIDATION_MESSAGE } from "config/validation";
import { useSignup } from "features/auth/hooks/useSignup";
import { UserType } from "lib/API";
import * as z from "zod";
import { useLogin } from "../../hooks/useLogin";

const schema = z
  .object({
    name: z.string().min(1, VALIDATION_MESSAGE.require),
    email: z.string().email(),
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

type SignupValues = {
  name: string;
  email: string;
  password: string;
  passwordConfirm: string;
};
type SignupFormProps = {
  onSuccess: () => void;
  userType: UserType;
};
export const SignupForm = ({ onSuccess, userType }: SignupFormProps) => {
  const { error, isLoading, handleSignup } = useSignup();
  return (
    <Form<SignupValues, typeof schema>
      onSubmit={async (values) => {
        const result = await handleSignup(
          values.name,
          values.email,
          values.password,
          userType
        );
        if (result) onSuccess();
      }}
      schema={schema}
    >
      {({ register, formState }) => (
        <>
          {error && (
            <ErrorAlert>
              登録に失敗しました。
              <br />
              {error}
            </ErrorAlert>
          )}
          <InputField
            type="text"
            label="ユーザーネーム"
            error={formState.errors["name"]}
            registration={register("name")}
          />
          <InputField
            type="text"
            label="メールアドレス"
            error={formState.errors["email"]}
            registration={register("email")}
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
              登録
            </Button>
          </div>
        </>
      )}
    </Form>
  );
};

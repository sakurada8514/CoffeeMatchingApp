import { Auth } from "aws-amplify";
import { ErrorAlert } from "components/Elements/Alert/ErrorAlert";
import { Button } from "components/Elements/Button";
import { TextLink } from "components/Elements/Link";
import { Form } from "components/Form/Form";
import { InputField } from "components/Form/InputField";
import * as z from "zod";
import { useLogin } from "../hooks/useLogin";

const schema = z.object({
  email: z.string().min(1, "Required"),
  password: z.string().min(1, "Required"),
});

type LoginValues = {
  email: string;
  password: string;
};
type LoginFormProps = {
  onSuccess: () => void;
};
export const LoginForm = ({ onSuccess }: LoginFormProps) => {
  const { error, isLoading, handleLogin } = useLogin();
  return (
    <>
      <Form<LoginValues, typeof schema>
        onSubmit={async (values) => {
          const result = await handleLogin(values.email, values.password);
          if (result) onSuccess();
        }}
        schema={schema}
      >
        {({ register, formState }) => (
          <>
            {error && <ErrorAlert>{error}</ErrorAlert>}
            <InputField
              type="email"
              label="Email Address"
              error={formState.errors["email"]}
              registration={register("email")}
            />
            <InputField
              type="password"
              label="Password"
              error={formState.errors["password"]}
              registration={register("password")}
            />
            <div className="pt-4">
              <Button
                type="submit"
                color="primary"
                size="md"
                isLoading={isLoading}
                wfull
              >
                ログイン
              </Button>
            </div>
          </>
        )}
      </Form>
      <div className="mt-4 flex items-center justify-center">
        <TextLink href="/">新規登録</TextLink>
      </div>
    </>
  );
};

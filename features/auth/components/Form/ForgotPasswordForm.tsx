import { ErrorAlert } from "components/Elements/Alert/ErrorAlert";
import { Button } from "components/Elements/Button";
import { Form } from "components/Form/Form";
import { InputField } from "components/Form/InputField";
import * as z from "zod";
import { useForgotPassword } from "../../hooks/useForgotPassword";

const schema = z.object({
  email: z.string().email(),
});
type ForgotPasswordValues = {
  email: string;
};
type ForgotPasswordFormProps = {
  onSuccess: (email: string) => void;
};
export const ForgotPasswordForm = ({ onSuccess }: ForgotPasswordFormProps) => {
  const { error, isLoading, handleForgotPassword } = useForgotPassword();
  return (
    <Form<ForgotPasswordValues, typeof schema>
      onSubmit={async (values) => {
        const result = await handleForgotPassword(values.email);
        if (result) onSuccess(values.email);
      }}
      schema={schema}
    >
      {({ register, formState }) => (
        <>
          {error && <ErrorAlert>{error}</ErrorAlert>}
          <InputField
            type="text"
            label="メールアドレス"
            error={formState.errors["email"]}
            registration={register("email")}
          />
          <div className="pt-4">
            <Button
              type="submit"
              color="primary"
              size="md"
              isLoading={isLoading}
              wfull
            >
              送信
            </Button>
          </div>
        </>
      )}
    </Form>
  );
};

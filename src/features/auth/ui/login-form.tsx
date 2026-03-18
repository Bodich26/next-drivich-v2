"use client";
import { Controller } from "react-hook-form";
import {
  Button,
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  ErrorForm,
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
  Input,
  LoaderLine,
  SuccessForm,
} from "@/shared";
import { useLoginForm } from "../model/use-login-form";

export const LoginForm = ({ setActive }: { setActive: () => void }) => {
  const {
    formLogin,
    successForm,
    errorForm,
    loadingForm,
    handleLogin,
    setErrorForm,
  } = useLoginForm();

  return (
    <Card className="flex justify-center items-center border border-black/50">
      <CardHeader className="w-full">
        <CardTitle className="text-3xl font-bold">Login Form</CardTitle>
        <CardDescription>Login to your account</CardDescription>
      </CardHeader>
      <CardContent>
        <form
          className="w-[308px]"
          onSubmit={formLogin.handleSubmit(handleLogin)}
        >
          <FieldGroup>
            <Controller
              name="email"
              control={formLogin.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel
                    htmlFor="form-login-email"
                    className="font-medium text-lg"
                  >
                    Email Address
                  </FieldLabel>
                  <Input
                    {...field}
                    id="form-login-email"
                    aria-invalid={fieldState.invalid}
                    placeholder="Enter your email"
                    className="border border-black/15 h-[32px] bg-transparent "
                    type="email"
                    disabled={loadingForm}
                    onClick={() => setErrorForm("")}
                  />
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />
            <Controller
              name="password"
              control={formLogin.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel
                    htmlFor="form-login-password"
                    className="font-medium text-lg"
                  >
                    Password
                  </FieldLabel>
                  <Input
                    {...field}
                    id="form-login-password"
                    aria-invalid={fieldState.invalid}
                    placeholder="Enter your password"
                    className="border border-black/15 h-[32px] bg-transparent "
                    type="password"
                    disabled={loadingForm}
                    onClick={() => setErrorForm("")}
                  />
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />
          </FieldGroup>
        </form>
      </CardContent>
      <CardFooter className="bg-transparent border-0 w-full">
        <Field orientation="vertical">
          <ErrorForm message={errorForm} />
          <SuccessForm message={successForm} />
          <Button
            disabled={loadingForm}
            className="cursor-pointer font-medium text-base w-full p-4"
            type="submit"
          >
            Login
          </Button>

          {loadingForm && <LoaderLine />}

          <Button
            type="button"
            disabled={loadingForm}
            onClick={setActive}
            variant="link"
            className="h-[24px] cursor-pointer"
          >
            Create account
          </Button>
        </Field>
      </CardFooter>
    </Card>
  );
};

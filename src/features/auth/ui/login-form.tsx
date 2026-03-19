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
    <Card className="flex justify-center items-center">
      <CardHeader className="w-full">
        <CardTitle className="text-3xl font-bold">Login Form</CardTitle>
        <CardDescription>Login to your account</CardDescription>
      </CardHeader>
      <CardContent>
        <form
          id="form-login"
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
            form="form-login"
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

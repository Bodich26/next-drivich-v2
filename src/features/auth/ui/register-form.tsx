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
import { useRegisterForm } from "../model/use-register-form";

export const RegisterForm = ({ setActive }: { setActive: () => void }) => {
  const {
    formRegister,
    successForm,
    setErrorForm,
    errorForm,
    loadingForm,
    handleRegister,
  } = useRegisterForm();

  return (
    <Card className="flex justify-center items-center ">
      <CardHeader className="w-full">
        <CardTitle className="text-3xl font-bold">Register Form</CardTitle>
        <CardDescription>Register your account</CardDescription>
      </CardHeader>
      <CardContent>
        <form
          className="w-[308px]"
          onSubmit={formRegister.handleSubmit(handleRegister)}
        >
          <FieldGroup>
            <Controller
              name="email"
              control={formRegister.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel
                    htmlFor="form-register-email"
                    className="font-medium text-lg"
                  >
                    Email Address
                  </FieldLabel>
                  <Input
                    {...field}
                    id="form-register-email"
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
              name="firstName"
              control={formRegister.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel
                    htmlFor="form-register-name"
                    className="font-medium text-lg"
                  >
                    First Name
                  </FieldLabel>
                  <Input
                    {...field}
                    id="form-register-name"
                    aria-invalid={fieldState.invalid}
                    placeholder="Enter your first name"
                    type="text"
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
              control={formRegister.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel
                    htmlFor="form-register-password"
                    className="font-medium text-lg"
                  >
                    Password
                  </FieldLabel>
                  <Input
                    {...field}
                    id="form-register-password"
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
            className="cursor-pointer font-medium text-base w-full p-4"
            type="submit"
            disabled={loadingForm}
          >
            Create
          </Button>

          {loadingForm && <LoaderLine />}

          <Button
            type="button"
            disabled={loadingForm}
            onClick={setActive}
            variant="link"
            className="h-[24px] cursor-pointer"
          >
            Login account
          </Button>
        </Field>
      </CardFooter>
    </Card>
  );
};

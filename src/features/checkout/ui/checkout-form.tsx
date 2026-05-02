"use client";
import { Controller } from "react-hook-form";
import PhoneInput from "react-phone-input-2";

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
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/shared";
import { useCheckout } from "../model/use-checkout";

export const CheckoutForm = () => {
  const {
    formCheckout,
    successForm,
    errorForm,
    loadingForm,
    handleCheckout,
    setErrorForm,
  } = useCheckout();

  return (
    <Card className="w-full max-w-[520px]">
      <CardHeader>
        <CardTitle className="text-2xl font-bold">Order Checkout</CardTitle>
        <CardDescription>
          Fill in your details to complete the order
        </CardDescription>
      </CardHeader>

      <CardContent>
        <form
          id="form-checkout"
          onSubmit={formCheckout.handleSubmit(handleCheckout)}
        >
          <FieldGroup>
            {/* --- NAME --- */}
            <div className="flex gap-4">
              <Controller
                name="firstName"
                control={formCheckout.control}
                render={({ field, fieldState }) => (
                  <Field className="w-full" data-invalid={fieldState.invalid}>
                    <FieldLabel>First name</FieldLabel>
                    <Input
                      {...field}
                      placeholder="John"
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
                name="lastName"
                control={formCheckout.control}
                render={({ field, fieldState }) => (
                  <Field className="w-full" data-invalid={fieldState.invalid}>
                    <FieldLabel>Last name</FieldLabel>
                    <Input
                      {...field}
                      placeholder="Doe"
                      disabled={loadingForm}
                      onClick={() => setErrorForm("")}
                    />
                    {fieldState.invalid && (
                      <FieldError errors={[fieldState.error]} />
                    )}
                  </Field>
                )}
              />
            </div>

            {/* --- PHONE --- */}
            <Controller
              name="phoneNumber"
              control={formCheckout.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel>Phone number</FieldLabel>
                  <PhoneInput
                    country={"ug"}
                    value={field.value}
                    onChange={field.onChange}
                    disabled={loadingForm}
                    inputClass="!w-full !h-[40px]"
                  />
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />

            {/* --- ADDRESS --- */}
            <div className="flex gap-4">
              <Controller
                name="country"
                control={formCheckout.control}
                render={({ field, fieldState }) => (
                  <Field className="w-full" data-invalid={fieldState.invalid}>
                    <FieldLabel>Country</FieldLabel>
                    <Input
                      {...field}
                      placeholder="Uganda"
                      disabled={loadingForm}
                    />
                    {fieldState.invalid && (
                      <FieldError errors={[fieldState.error]} />
                    )}
                  </Field>
                )}
              />

              <Controller
                name="city"
                control={formCheckout.control}
                render={({ field, fieldState }) => (
                  <Field className="w-full" data-invalid={fieldState.invalid}>
                    <FieldLabel>City</FieldLabel>
                    <Input
                      {...field}
                      placeholder="Momo"
                      disabled={loadingForm}
                    />
                    {fieldState.invalid && (
                      <FieldError errors={[fieldState.error]} />
                    )}
                  </Field>
                )}
              />
            </div>

            <Controller
              name="address"
              control={formCheckout.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel>Address</FieldLabel>
                  <Input
                    {...field}
                    placeholder="Street, house, apartment"
                    disabled={loadingForm}
                  />
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />

            {/* --- PAYMENT --- */}
            <Controller
              name="payment"
              control={formCheckout.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel>Payment method</FieldLabel>

                  <Select
                    value={field.value}
                    onValueChange={field.onChange}
                    disabled={loadingForm}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select payment" />
                    </SelectTrigger>

                    <SelectContent>
                      <SelectItem value="Cash">Cash</SelectItem>
                      <SelectItem value="Online">Online</SelectItem>
                    </SelectContent>
                  </Select>

                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />
          </FieldGroup>
        </form>
      </CardContent>

      <CardFooter className="flex flex-col gap-3">
        <ErrorForm message={errorForm} />
        <SuccessForm message={successForm} />

        <Button
          form="form-checkout"
          type="submit"
          disabled={loadingForm}
          className="w-full cursor-pointer"
          size={"lg"}
        >
          Confirm Order
        </Button>

        {loadingForm && <LoaderLine />}
      </CardFooter>
    </Card>
  );
};

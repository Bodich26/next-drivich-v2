"use server";
import {
  ActionResult,
  calculateDiscountedPrice,
  calculateTotalPrice,
  sessionUserId,
} from "@/shared";
import { CheckoutFormData, CheckoutSchema } from "../model/checkout-schema";
import { prisma } from "@/../prisma/prisma-client";
import { revalidatePath } from "next/cache";
import { PUBLIC_ROUTES } from "@/../routes";

export const createOrder = async (
  formData: CheckoutFormData,
): Promise<ActionResult> => {
  try {
    const userId = await sessionUserId();
    if (!userId) {
      return {
        success: false,
        error: "LogIn to the site",
      };
    }

    const parsed = CheckoutSchema.safeParse(formData);
    if (!parsed.success) {
      return {
        success: false,
        error: "Invalid fields: " + parsed.error.message,
      };
    }

    const {
      firstName,
      lastName,
      phoneNumber,
      country,
      city,
      address,
      payment,
    } = parsed.data;

    const userCart = await prisma.cart.findUnique({
      where: { userId },
      include: {
        products: {
          include: {
            product: true,
          },
          orderBy: {
            createdAt: "desc",
          },
        },
      },
    });

    if (!userCart || userCart.products.length === 0) {
      return { success: false, error: "No product in cart" };
    }

    const totalPrice = calculateTotalPrice(
      userCart.products.map((cartItem) => ({
        price: cartItem.product.price,
        discount: cartItem.product.discount,
        quantity: cartItem.quantity,
      })),
    );

    await prisma.order.create({
      data: {
        userId,
        firstName,
        lastName,
        phoneNumber,
        country,
        city,
        address,
        payment,
        status: "PENDING",
        totalPrice,
        orderItems: {
          create: userCart.products.map((cartItem) => {
            const discountedPrice = calculateDiscountedPrice(
              cartItem.product.price,
              cartItem.product.discount,
            );

            return {
              productId: cartItem.product.id,
              quantity: cartItem.quantity,
              price: discountedPrice * cartItem.quantity,
            };
          }),
        },
      },
    });

    await prisma.cart.update({
      where: { userId },
      data: {
        products: {
          deleteMany: {},
        },
      },
    });

    revalidatePath(`${PUBLIC_ROUTES.PROFILE}`);

    return {
      success: true,
      message: "Order created successfully",
    };
  } catch (err: unknown) {
    console.error(err);
    return {
      success: false,
      error: "An unexpected error occurred. Please try again later",
    };
  }
};

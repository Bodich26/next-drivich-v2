/**
 * Вычисляет финальную цену товара с учётом скидки
 */
export const calculateDiscountedPrice = (
  price: number,
  discount: number | null | undefined = 0,
): number => {
  const multiplier = (100 - (discount ?? 0)) / 100;
  return Math.round(price * multiplier); // округляем до целого
};

/**
 * Возвращает общую стоимость ОДНОГО товара (цена × количество × скидка)
 */
export const calculateItemTotal = (
  price: number,
  discount: number | null | undefined,
  quantity: number,
): number => {
  const discountedPrice = calculateDiscountedPrice(price, discount);
  return discountedPrice * quantity;
};

/**
 * Считает общую сумму всей корзины
 */
export const calculateTotalPrice = (
  items: Array<{
    price: number;
    discount?: number | null;
    quantity: number;
  }>,
): number => {
  return items.reduce((sum, item) => {
    return sum + calculateItemTotal(item.price, item.discount, item.quantity);
  }, 0);
};

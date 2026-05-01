export const formatPrice = (price: number): string =>
  new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(price);

export const formatNaira = (price: number): string =>
  new Intl.NumberFormat("en-NG", { style: "currency", currency: "NGN" }).format(price);

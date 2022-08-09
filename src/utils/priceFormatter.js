export const priceFormatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  minimumFractionDigits: 2,
});
export const btcFormatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "BTC",
  minimumFractionDigits: 8,
});

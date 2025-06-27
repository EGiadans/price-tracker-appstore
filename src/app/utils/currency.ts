export const convertCurrencyToNumber = (currency: string) => {
  return Number(currency.replace("$", "")).toFixed(2);
};

export const formatCurrency = (currency: number) => {
  const validateCents = currency.toFixed(2);
  return `$${validateCents}`;
};

export interface CurrentCurrency {
  id: number;
  name: string;
  currency: string;
  symbol: string;
}
export interface CurrencyState {
  currentCurrency: CurrentCurrency;
  exchangeRates?: object;
}

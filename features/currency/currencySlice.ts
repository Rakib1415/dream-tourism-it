import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { CurrencyState, CurrentCurrency } from "./types";

const initialState: CurrencyState = {
  currentCurrency: {
    id: 1,
    name: "United States dollar",
    currency: "USD",
    symbol: "$",
  },
  exchangeRates: {},
};

export const currencySlice = createSlice({
  name: "currency",
  initialState,
  reducers: {
    addCurrency: (
      state: CurrencyState,
      action: PayloadAction<CurrentCurrency>
    ) => {
      state.currentCurrency = action.payload;
    },
    addExchangeRates: (state: CurrencyState, action: PayloadAction<object>) => {
      state.exchangeRates = action.payload;
    },
  },
});

export const { addCurrency, addExchangeRates } = currencySlice.actions;
export default currencySlice.reducer;

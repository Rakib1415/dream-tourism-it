import { BASE_URL } from "@/constant/constants";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
  }),
  tagTypes: [],
  keepUnusedDataFor: 120,
  endpoints: () => ({}),
});

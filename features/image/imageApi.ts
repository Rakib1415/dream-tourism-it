import { GET_IMAGE_BY_MENU_ID, GET_SLIDERSETTINGS } from "@/constant/constants";
import { apiSlice } from "../api/apiSlice";
import { HomepageSlider } from "./types";

export const imageApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getImagesByMenuId: builder.query({
      query: (menuId) => ({
        url: `${GET_IMAGE_BY_MENU_ID}/${menuId}`,
        method: "GET",
      }),
    }),
    getSliderImages: builder.query<HomepageSlider, null>({
      query: () => ({
        url: GET_SLIDERSETTINGS,
        method: "GET",
      }),
    }),
  }),
});

export const { useGetImagesByMenuIdQuery, useGetSliderImagesQuery } = imageApi;

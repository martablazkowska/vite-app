// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export type Cat = {
  name: string;
  image_link: string;
};

// Define a service using a base URL and expected endpoints
export const catsApi = createApi({
  reducerPath: "catsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.api-ninjas.com/v1/",
    prepareHeaders: (headers) => {
      headers.set("X-Api-Key", "1Ye+TnThlYmQs18F00KY4w==Rb1g7vXjlZFqJcPC");
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getAll: builder.query<Cat[], void>({
      query: () => `cats?shedding=1`,
    }),
    getCatByName: builder.query<Cat, string>({
      query: (name) => `cats?name=${name}`,
      transformResponse: (response: Cat[]) => response[0],
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetAllQuery, useGetCatByNameQuery } = catsApi;

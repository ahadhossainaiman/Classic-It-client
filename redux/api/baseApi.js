import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseApi = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:8000",
  }),
  tagTypes: ["login"],
  endpoints: (builder) => ({
    createUser: builder.mutation({
      query: ({ email, password, username, photoUrl }) => ({
        url: "/register",
        method: "POST",
        body: { email, password, username, photoUrl },
      }),
    }),
    loginUser: builder.mutation({
      query: ({ email, password }) => ({
        url: "/login",
        method: "POST",
        body: { email, password },
      }),
      providesTags: ["login"],
    }),
    getUser: builder.query({
      query: () => ({ url: `/user` }),
      invalidatesTags: ["login"],
    }),
  }),
});

export const { useCreateUserMutation, useLoginUserMutation, useGetUserQuery } =
  baseApi;

export default baseApi;

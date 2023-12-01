// redux
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
// constants
import { REGISTER_TOKEN } from "../libs/constants/registerToken";

export const frontendAssignmentAPI = createApi({
  reducerPath: "frontendAssignmentAPI",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://frontend-test-assignment-api.abz.agency/api/v1",
    prepareHeaders: (headers) => {
      headers.set("Token", `${localStorage.getItem(REGISTER_TOKEN)}`);

      return headers;
    },
  }),

  endpoints: (_builder) => ({}),
});

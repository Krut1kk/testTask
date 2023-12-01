// api
import { frontendAssignmentAPI } from "@/shared/api/frontendAssignmentAPI";
// constants
import { REGISTER_TOKEN } from "@/shared/libs/constants/registerToken";
// types
import { PositionsData, TokenData, UserData } from "../model/types/signUp";

const signUpAPI = frontendAssignmentAPI.injectEndpoints({
  endpoints: (build) => ({
    getToken: build.query<TokenData, void | null>({
      query: () => ({
        url: "/token",
        method: "GET",
      }),
      transformResponse: (response: TokenData) => {
        localStorage.setItem(REGISTER_TOKEN, response.token);

        return response;
      },
    }),

    registerUser: build.mutation<void, UserData>({
      query: (data) => ({
        url: "/users",
        method: "POST",
        body: data,
      }),
    }),

    getPositions: build.query<PositionsData, void>({
      query: () => ({
        url: "/positions",
        method: "GET",
      }),
    }),
  }),
});

export const {
  useGetPositionsQuery,
  useRegisterUserMutation,
  useGetTokenQuery,
} = signUpAPI;

// api
import { frontendAssignmentAPI } from "@/shared/api/frontendAssignmentAPI";
// types
import { UsersData } from "../model/types/user";

const userAPI = frontendAssignmentAPI.injectEndpoints({
  endpoints: (build) => ({
    getUsers: build.query<UsersData, number | void>({
      query: (usersCount) => ({
        url: "/users",
        params: {
          count: usersCount,
        },
        method: "GET",
      }),
    }),
  }),
});

export const { useGetUsersQuery } = userAPI;

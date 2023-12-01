// api
import { frontendAssignmentAPI } from "@/shared/api/frontendAssignmentAPI";

export interface StateSchema {
  [frontendAssignmentAPI.reducerPath]: ReturnType<
    typeof frontendAssignmentAPI.reducer
  >;
}

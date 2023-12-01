// redux
import { configureStore, ReducersMapObject } from "@reduxjs/toolkit";
// types
import { StateSchema } from "./StateSchema";
// reducers
import { frontendAssignmentAPI } from "@/shared/api/frontendAssignmentAPI";

export function createReduxStore(initialState?: StateSchema) {
  const rootReducers: ReducersMapObject<StateSchema> = {
    frontendAssignmentAPI: frontendAssignmentAPI.reducer,
  };

  const store = configureStore({
    reducer: rootReducers,
    preloadedState: initialState,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({}).concat(frontendAssignmentAPI.middleware),
  });

  return store;
}

export type AppDispatch = ReturnType<typeof createReduxStore>["dispatch"];

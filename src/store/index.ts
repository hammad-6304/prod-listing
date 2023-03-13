import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import rootRtkQuery from "./rootRtkQuery";

const storeHoc = () =>
  configureStore({
    reducer: {
      // Add the generated reducer as a specific top-level slice
      [rootRtkQuery.reducerPath]: rootRtkQuery.reducer,
    },
    // Adding the api middleware enables caching, invalidation, polling,
    // and other useful features of `rtk-query`.
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(rootRtkQuery.middleware),
  });

export const store = storeHoc();

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

setupListeners(store.dispatch);

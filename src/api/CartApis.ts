import rootRtkQuery from "../store/rootRtkQuery";
import { IProduct } from "../types/Cart.types";

// This is responsinble for the network calls and caching data
export const CartApi = rootRtkQuery.injectEndpoints({
  endpoints: (build) => ({
    getCart: build.query<IProduct[], void>({
      query: () => `/products`,
    }),
  }),

  overrideExisting: false,
});

export const { useGetCartQuery } = CartApi;

import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

//  Base URL
const BASE_URL = "https://my-json-server.typicode.com/benirvingplt/products";

const rootRtkQuery = createApi({
  // configuration for api calls, Can add Authorizationi token here as well.
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  endpoints: () => ({}),
  reducerPath: "apis",
});

export default rootRtkQuery;

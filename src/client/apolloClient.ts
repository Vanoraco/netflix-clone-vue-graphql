import { ApolloClient, InMemoryCache } from "@apollo/client";
import { RestLink } from "apollo-link-rest";

const cache = new InMemoryCache();
const API_KEY = import.meta.env.VITE_API_KEY;

const customFetch = (uri: RequestInfo, options: RequestInit) => {
    return fetch(`${uri}?api_key=${API_KEY}`, options);
}

const restLink = new RestLink({
    uri: "https://api.themoviedb.org/3",
    customFetch,
}

)
export const apolloClient = new ApolloClient({
  link: restLink,
  cache
})
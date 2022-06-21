import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
    uri: 'https://api-sa-east-1.graphcms.com/v2/cl4oesa0z20r901xm2ur6fd25/master',
    cache: new InMemoryCache()
})
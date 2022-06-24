import { ApolloClient, InMemoryCache } from "@apollo/client";
export const client = new ApolloClient({
    uri: 'https://api-sa-east-1.graphcms.com/v2/cl4rp2hn11eww01z153mz26rc/master',
    cache: new InMemoryCache()
})
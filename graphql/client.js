import { ApolloClient, InMemoryCache } from "@apollo/client"
import { urls } from "../utils/config";


const apolloClient = new ApolloClient({
    uri: urls.uri + "api/graphql",
    cache: new InMemoryCache(),
});

export default apolloClient;
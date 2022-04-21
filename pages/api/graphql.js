import { ApolloServer } from "apollo-server-micro";
import { PrismaClient } from '@prisma/client'
import { typeDefs } from '../../graphql/typeDefs'
import { resolvers } from '../../graphql/resolvers'
import {
    ApolloServerPluginLandingPageDisabled
} from "apollo-server-core";

import { production } from "../../utils/config";
import Cors from "micro-cors";

const cors = Cors()

const prisma = new PrismaClient()

const apolloServer = new ApolloServer({
    typeDefs,
    resolvers,
    context: {
        prisma
    },
    plugins: production ? [
        ApolloServerPluginLandingPageDisabled(),
    ] : [],
});

const startServer = apolloServer.start()

export default cors(async function handler(req, res) {

    if (req.method === 'OPTIONS') {
        res.end()
        return false
    }
    await startServer
    await apolloServer.createHandler({
        path: "/api/graphql",
    })(req, res);
})

export const config = {
    api: {
        bodyParser: false,
    },
};

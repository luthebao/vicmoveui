import { gql } from "apollo-server-micro";

export const typeDefs = gql`
    scalar Date
    scalar Long
    
    type Account {
        id: Int
        email: String
        displayname: String
        password: String
        piecebox: Int
        vim: Float
        createat: Date
        status: String
        provider: String?
    }

    type Box {
        id: Int
        accid: Int
        buyboxid: Int
        type: Int
        status: Int
        buyat: Date
        unboxat:Date
        note:String
    }

    type Query {
    }
`;
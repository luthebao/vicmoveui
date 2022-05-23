import { gql } from "apollo-server-micro";

export const typeDefs = gql`
    scalar Date
    scalar Long
    
    type AccountInfo {
        accid: Int
        email: String
        name: String
        provider: String
    }

    type AccountDetail {
        id: Int
        piecebox: Float
        vim: Float
        createat: Date
        status: String
        energy: Int
        address: String
        maxE: Int
        maxExp: Int
    }

    type Box {
        id: Int
        accid: Int
        buyboxid: Int
        type: Int
        status: Int
        buyat: Date
        unboxat:Date
    }

    type Shoes {
        id: Int
        nftid: Long
        level: Int
        exp: Int
        comfort: Float
        stamina: Float
        lucky: Int
        fabric: String
        sole: String
        brand: String
        img: String
        accid: Int
        type: Int
        maxExp: Int
        maxComfort: Int
        maxStamina: Int
        createat: Date
        countchild: Int
        nextclone: Date
        parentsid: Int
    }

    type VimLog {
        id: Int
        accid: Int
        amount: Float   
        type: String 
        refid: Int     
        description: String
        createat: Date
        sync: Boolean
        balance: Float    
    }

    type WithdrawRequest {
        id: Int
        accid: Int
        amount: Float
        fee: Float
        status: String
        createAt: Date
        tranhash: String
    }

    type WithdrawRequest2 {
        id: Int
        accid: Int
        amount: Float
        fee: Float
        status: String
        createAt: Date
        tranhash: String
        address: String
    }

    type Config {
        box0price: Float
        box1price: Float
        box2price: Float
        box3price: Float
    }

    type Query {
        accountinfo(email: String!): AccountInfo,
        accountdetail(id: Int!): AccountDetail,
        box(id: Int!): Box,
        boxs(accid: Int!): [Box],
        sneaker(id: Int!): Shoes,
        sneakers(accid: Int!): [Shoes],
        activities(token: String!, page: Int, size: Int): [VimLog],
        withdraws(token: String!): [WithdrawRequest],
        config: Config
    }
`;
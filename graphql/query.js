import { gql } from "@apollo/client";

export const get_account = gql`
query Accountinfo($accountdetailId: Int!) {
    accountdetail(id: $accountdetailId) {
        id
        piecebox
        vim
        createat
        status
        energy
        address
    }
}`

export const get_account_sneakers = gql`
query AccountSneaker($accountdetailId: Int!) {
    sneakers(accid: $accountdetailId) {
        id
        nftid
        level
        exp
        comfort
        stamina
        lucky
        fabric
        sole
        img
        brand
        accid
        createat
        type
    }
}`

export const get_account_boxs = gql`
query AccountBox($accountdetailId: Int!) {
    boxs(accid: $accountdetailId) {
        id
        accid
        buyboxid
        type
        status
        buyat
        unboxat
    }
}`

export const get_box_detail = gql`
query Box($boxId: Int!) {
    box(id: $boxId) {
        id
        accid
        buyboxid
        type
        status
        buyat
        unboxat
    }
}`


export const get_activities_account = gql`
query Activities($token: String!, $page: Int, $size: Int) {
    activities(token: $token, page: $page, size: $size) {
        id
        accid
        amount
        type
        refid
        description
        createat
        sync
        balance
    }
}`

export const get_withdraw_request = gql`
query Withdraws($token: String!) {
    withdraws(token: $token) {
        id
        accid
        amount
        fee
        status
        createAt
        tranhash
    }
}`
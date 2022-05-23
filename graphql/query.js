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
        maxE
        maxExp
    }
    sneakers(accid: $accountdetailId) {
        id
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
        brand
        img
        accid
        type
        maxExp
        maxComfort
        maxStamina
        createat
        countchild
        nextclone
        parentsid
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


export const get_shoes_detail = gql`
query Sneaker($sneakerId: Int!) {
    sneaker(id: $sneakerId) {
        id
        nftid
        level
        exp
        comfort
        stamina
        lucky
        fabric
        sole
        brand
        img
        accid
        type
        maxExp
        maxComfort
        maxStamina
        createat
        countchild
        nextclone
        parentsid
    }
}`
import * as actionTypes from './actionTypes'
import apolloClient from "../../graphql/client"
import { gql } from '@apollo/client'

export const authStart = () => {
    return {
        type: actionTypes.AUTH_START,
    }
}


export const authSuccess = (detail) => {
    return {
        type: actionTypes.AUTH_SUCCESS,
        detail: detail,
    }
}

export const authFail = () => {
    return {
        type: actionTypes.AUTH_SUCCESS,
    }
}


export const handleGetDetail = (id) => {
    return async dispatch => {
        dispatch(authStart())
        const acc_detail = await apolloClient.query({
            query: gql`
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
                    boxs(accid: $accountdetailId) {
                        id
                        accid
                        buyboxid
                        type
                        status
                        buyat
                        unboxat
                    }
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
                }
            `,
            variables: {
                "accountdetailId": id
            }
        })
        if (acc_detail && acc_detail.data && acc_detail.data.accountdetail)
        {
            dispatch(authSuccess(acc_detail.data))
        } else {
            dispatch(authFail())
        }
    }
}
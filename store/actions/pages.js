import * as actionTypes from './actionTypes'
import apolloClient from "../../graphql/client"
import { gql } from '@apollo/client'
import { get_account } from '../../graphql/query'

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
            query: get_account,
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
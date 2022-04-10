import * as actionTypes from './actionTypes'

export const updateMenuMobile = menumobile => {
    return {
        type: actionTypes.CHANGE_MENU_MOBILE,
        menumobile: menumobile
    }
}

export const updateAccountPop = accountinfopop => {
    return {
        type: actionTypes.ACCOUNT_INFO_POPUP,
        accountinfopop: accountinfopop
    }
}


export const resetAllMenuState = () => {
    return dispatch => {
        dispatch(updateMenuMobile(false))
        dispatch(updateAccountPop(false))
    }
}




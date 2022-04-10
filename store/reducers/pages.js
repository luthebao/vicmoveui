import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';

const initialState = {
    menumobile: false,
    accountinfopop: false,
}


const changeMenuMobile = (state, action) => {
    return updateObject(state, {
        menumobile: action.menumobile,
    });
}

const changeAccountPop = (state, action) => {
    return updateObject(state, {
        accountinfopop: action.accountinfopop,
    });
}


export const pagesReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.CHANGE_MENU_MOBILE: return changeMenuMobile(state, action);
        case actionTypes.ACCOUNT_INFO_POPUP: return changeAccountPop(state, action);
        default:
            return state;
    }
}
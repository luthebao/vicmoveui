import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';

const initialState = {
    loading: true,
    detail: null,
    authstatus: 0,
}

const authStart = (state, action) => {
    return updateObject(state, {
        loading: true
    });
}

const authFail = (state, action) => {
    return updateObject(state, {
        loading: false,
        detail: null,
        authstatus: -1,
    });
}

const authSuccess = (state, action) => {
    return updateObject(state, {
        detail: action.detail,
        loading: false,
    });
}

export const pagesReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.AUTH_START: return authStart(state, action);
        case actionTypes.AUTH_SUCCESS: return authSuccess(state, action);
        case actionTypes.AUTH_FAIL: return authFail(state, action);
        default:
            return state;
    }
}
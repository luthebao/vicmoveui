import { useLazyQuery } from '@apollo/client';
import { createContext, useContext, useState, useRef, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { get_account, get_account_boxs, get_account_sneakers } from '../graphql/query';
import { authSuccess } from '../store/actions/pages';

const AppContext = createContext();


export function AppStateExternal({ children }) {

    const dispatch = useDispatch()
    const [getSneakers, sneakers] = useLazyQuery(get_account_sneakers)
    const [getBoxes, boxes] = useLazyQuery(get_account_boxs)
    const [popup, setPopup] = useState(null)
    const [loadAccount, infoAccount] = useLazyQuery(get_account)

    useEffect(() => {
        if (infoAccount && infoAccount.data)
        {
            dispatch(authSuccess(infoAccount.data))
        }
    }, [infoAccount])

    const sharedState = {
        acc_sneakers: [getSneakers, sneakers],
        acc_boxes: [getBoxes, boxes],
        noti_popup: [popup, setPopup],
        info_account: [loadAccount, infoAccount]
    }

    return (
        <AppContext.Provider value={sharedState}>
            {children}
        </AppContext.Provider>
    );
}

export function useAppContext() {
    return useContext(AppContext);
}
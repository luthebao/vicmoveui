import { useLazyQuery } from '@apollo/client';
import { createContext, useContext, useState, useRef, useEffect } from 'react';
import { get_account_boxs, get_account_sneakers } from '../graphql/query';

const AppContext = createContext();


export function AppStateExternal({ children }) {

    const [getSneakers, sneakers] = useLazyQuery(get_account_sneakers)
    const [getBoxes, boxes] = useLazyQuery(get_account_boxs)
    const [popup, setPopup] = useState(null)

    const sharedState = {
        acc_sneakers: [getSneakers, sneakers],
        acc_boxes: [getBoxes, boxes],
        noti_popup: [popup, setPopup],
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
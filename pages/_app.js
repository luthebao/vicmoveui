import 'react-toastify/dist/ReactToastify.css';
import '../styles/index.css'

import { SessionProvider } from "next-auth/react"
import SEOLayout from '../layouts/seo'
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { Backdrop, CircularProgress } from '@mui/material';
import NotificationPopup from '../containers/section/notipopup';
import { ToastContainer } from 'react-toastify';
import { ApolloProvider } from '@apollo/client'

// region redux
import { Provider } from 'react-redux'
import { createWrapper } from 'next-redux-wrapper'
import store from '../store/stores';
import apolloClient from '../graphql/client';
// endregion redux

import { Web3ReactProvider } from '@web3-react/core'
import Web3 from 'web3';
import { AppStateExternal } from '../utils/store';

function getLibrary(provider) {
    return new Web3(provider)
}


function MyApp({ Component, pageProps }) {
    const [rounting, setRounting] = useState(false)
    const router = useRouter()

    useEffect(() => {

        let routeChangeStart = () => {
            setRounting(true)
        }

        let routeChangeComplete = () => {
            setRounting(false)
        }

        router.events.on("routeChangeStart", routeChangeStart);
        router.events.on("routeChangeComplete", routeChangeComplete);
        router.events.on("routeChangeError", routeChangeComplete);

        return () => {
            router.events.off("routeChangeStart", routeChangeStart);
            router.events.off("routeChangeComplete", routeChangeComplete);
            router.events.off("routeChangeError", routeChangeComplete);
        };
    }, []);



    return (

        <ApolloProvider client={apolloClient}>
            <Web3ReactProvider getLibrary={getLibrary}>
                <AppStateExternal>
                    <SessionProvider session={pageProps.session}>
                        <Provider store={store}>
                            <SEOLayout>
                                <Component {...pageProps} />
                                <Backdrop open={rounting}>
                                    <div className='flex justify-center m-auto flex flex-col'>
                                        <CircularProgress color="inherit" />
                                    </div>
                                </Backdrop>
                                <NotificationPopup />
                                <ToastContainer
                                    className="p-4"
                                    position="top-left"
                                    autoClose={4000}
                                    hideProgressBar={false}
                                    newestOnTop={false}
                                    closeOnClick
                                    rtl={false}
                                    pauseOnFocusLoss
                                    draggable
                                    pauseOnHover
                                />
                            </SEOLayout>
                        </Provider>
                    </SessionProvider>
                </AppStateExternal>
            </Web3ReactProvider>
        </ApolloProvider>
    )
}

const makestore = () => store

const wrapper = createWrapper(makestore);

export default wrapper.withRedux(MyApp)
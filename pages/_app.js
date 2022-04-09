import '../styles/globals.css'
import '../styles/index.css'

import { SessionProvider } from "next-auth/react"
import SEOLayout from '../layouts/seo'
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { Backdrop, CircularProgress } from '@mui/material';

export default function App({
    Component, pageProps: { session, ...pageProps }
}) {
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
        <SessionProvider session={session}>
            <SEOLayout>
                <Component {...pageProps} />
                <Backdrop open={rounting}>
                    <div className='flex justify-center m-auto flex flex-col'>
                        <CircularProgress color="inherit" />
                    </div>
                </Backdrop>

            </SEOLayout>
        </SessionProvider>
    )
}


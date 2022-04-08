import '../styles/globals.css'
import '../styles/index.css'

import { SessionProvider } from "next-auth/react"
import SEOLayout from '../layouts/seo'

export default function App({
  Component, pageProps: { session, ...pageProps }
}) {
  return (
    <SessionProvider session={session}>
      <SEOLayout>
        <Component {...pageProps} />
      </SEOLayout>
    </SessionProvider>
  )
}


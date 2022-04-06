import Link from "next/link"
import { useSession, signIn, signOut } from "next-auth/react"
import LoginLayout from "./login"

const MainLayout = ({ children, type, bottom}) => {
    const { data: session } = useSession()
    if (session) {
        return <>
            <div className="body-overlay"></div>
            <div id="panel-left"></div>
            <div className="page page--main">
                <header className="header header--fixed">
                    {type === 2 ?
                        <div className="header__inner">
                            <div className="header__icon">
                                <Link href={"/"}><a><img src="/images/icons/arrow-back.svg" alt="image" title="image" /></a></Link>
                            </div>
                        </div>
                        : <div className="header__inner">
                            <div className="header__logo header__logo--text">
                                <a>Vic<strong>Move</strong></a>
                            </div>
                            <div className="header__icon open-panel" data-panel="left" onClick={signOut}>
                                <img src="/images/icons/logout.svg" alt="image" title="image" />
                            </div>
                        </div>}
                </header>
                <div className={type === 2 ? "page__content page__content--with-header page__content--with-bottom-nav" : "page__content page__content--full page__content--with-bottom-nav"}>
                    {children}
                </div>
            </div>

            {bottom}

            <div id="bottom-toolbar" className="bottom-toolbar"></div>

            <div id="popup-social"></div>

            <div id="popup-alert"></div>

            <div id="popup-notifications"></div>
        </>
    }
    return <LoginLayout />
}

export default MainLayout
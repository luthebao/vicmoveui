import Link from "next/link"
import { signIn } from "next-auth/react"

const LoginLayout = () => {

    return (
        <div className="h-screen bg-gradient-to-t from-[#21a7b3] to-[#35ddd3]">
            
        </div>
        // <div className="page page--splash mt-[60px]" data-page="splash">
        //     <div className="splash">
        //         <div className="splash__content">
        //             <div className="splash__logo">Vic<strong>Move</strong></div>
        //             <div className="splash__image">
        //                 <img src="/images/logo.png" alt="" title="" />
        //             </div>
        //             <div className="splash__text">VicMove is your favourite Move to Earn App</div>
        //             <div className="splash__buttons">
        //                 <button className="button button--full button--main" onClick={signIn}>
        //                     SIGN IN
        //                 </button>
        //                 <a className="button button--full bg-gradient-to-r from-[#336699] to-[#003366]">
        //                     REGISTER
        //                 </a>
        //             </div>
        //             <div className="splash__social-login">
        //                 <div className="splash__social-icons">
        //                     <a className="icon icon--social">
        //                         <img src="/images/icons/facebook.svg" alt="" title="" />
        //                     </a>
        //                     <a className="icon icon--social">
        //                         <img src="/images/icons/twitter.svg" alt="" title="" />
        //                     </a>
        //                     <a className="icon icon--social">
        //                         <img src="/images/icons/instagram.svg" alt="" title="" />
        //                     </a>
        //                 </div>
        //             </div>
        //         </div>
        //     </div>
        // </div>
    )
}

export default LoginLayout
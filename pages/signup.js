import BackgroundContainer from "../containers/background/backgroundcontainer"
import { FiX } from 'react-icons/fi';
import PageNavigateBtn from "../components/button/pagenavigate";
import Header from "../components/header/default";
import InputDefault from "../components/input/default";
import ButtonDefault from "../components/button/default";
import { signIn, useSession } from "next-auth/react"
import Link from "next/link";
import { useState } from "react";
import { toast } from "react-toastify";
import { useRouter } from "next/router";
import Home from ".";

const SignupPage = () => {

    const router = useRouter()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [password1, setPassword1] = useState("")
    const { data: status } = useSession()

    const handleErrorLogin = (type) => {
        if (type.status === 200) {
            router.push("/")
            return
        }
        if (type.error === "CredentialsSignin") {
            toast("Password or email invalid")
        } else {
            toast("Can not authenticate with this email")
        }
    }

    const handleSignup = async () => {
        if (password !== password1) {
            toast("Confirm password 's not correct")
        }

        const fet_signup = await fetch("/api/user/signup", {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            method: "POST",
            body: JSON.stringify({
                "email": email,
                "password": password,
                "password1": password1,
            })
        })

        const res_signup = await fet_signup.json()
        if (res_signup && res_signup.code === 1) {
            toast("Signup successful!")
            signIn("credentials", {
                redirect: "/",
                email: email,
                password: password,
            }).then(data => {
                handleErrorLogin(data)
            }).catch(() => {
                handleErrorLogin("1")
            });
        } else {
            toast(res_signup.message)
        }
    }

    if (status === "authenticated")
        return <Home />

    return (
        <BackgroundContainer type='light' className='text-center'>
            <PageNavigateBtn>
                <Link href={"/"}>
                    <FiX />
                </Link>
            </PageNavigateBtn>
            <Header size='lg' classes='text-left'>Sign up</Header>
            <form onSubmit={(e) => {
                e.preventDefault()
                handleSignup()
            }}>
                <InputDefault type='text' name='email' placeholder='Email' value={email} onChange={e => setEmail(e.target.value)} required />
                <InputDefault type='password' name='password' placeholder='Password' value={password} onChange={e => setPassword(e.target.value)} required />
                <InputDefault type='password' name='password2' placeholder='Confirm password' value={password1} onChange={e => setPassword1(e.target.value)} required />
                <ButtonDefault type='submit' className='w-full bg-primary'>Sign up</ButtonDefault>
            </form>
            <div className='text-divider font-semibold py-8'>OR</div>
            <ButtonDefault type='submit' className='w-full bg-[#FF5733]' callback={() => signIn("google", {
                redirect: "/"
            })}>
                Login with Google
            </ButtonDefault>
            {/* <div className='flex justify-center'>
                <img src={"/images/logo/fingerprint.png"} width='80' />
            </div>
            <div>Scan</div> */}
        </BackgroundContainer>
    )
}

export async function getServerSideProps(context) {
    // const ss = await getSession(context)

    // if (ss) {
    //     return {
    //         redirect: {
    //             destination: '/',
    //             permanent: true,
    //         },
    //     }
    // }

    return {
        props: {

        }
    }
}

export default SignupPage
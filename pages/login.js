import BackgroundContainer from "../containers/background/backgroundcontainer"
import { FiX } from 'react-icons/fi';
import PageNavigateBtn from "../components/button/pagenavigate";
import Header from "../components/header/default";
import InputDefault from "../components/input/default";
import ButtonDefault from "../components/button/default";
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import HyperLink from "../components/text/hyperlink";
import { signIn, useSession } from "next-auth/react"
import Link from "next/link";
import { useState } from "react";
import { toast } from "react-toastify";
import { useRouter } from "next/router";
import Home from ".";

const LoginPage = () => {
    const router = useRouter()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
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

    if (status === "authenticated")
        return <Home />

    return (
        <BackgroundContainer type='light' className='text-center '>
            <PageNavigateBtn>
                <Link href={"/"}>
                    <a>
                        <FiX /></a>
                </Link>
            </PageNavigateBtn>
            <Header size='lg' classes='text-left'>Login</Header>
            <form onSubmit={(e) => {
                e.preventDefault()
                signIn("credentials", {
                    redirect: "/",
                    email: email,
                    password: password,
                }).then(data => {
                    handleErrorLogin(data)
                }).catch(() => {
                    handleErrorLogin("1")
                });
            }}>
                <InputDefault type='email' name='email' placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} required />

                <InputDefault type='password' name='password' placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} required />

                <div className='pt-2 pb-6 pl-2 text-left'>
                    <FormControlLabel control={<Switch defaultChecked />} label='Save my info?' />
                </div>
                <ButtonDefault type='submit' className='w-full bg-primary'>Sign in</ButtonDefault>
            </form>
            <div className='pt-6'>
                <span>Forgot password? </span>
                <HyperLink path='#'>Click here</HyperLink>
            </div>
            <div className='text-divider font-semibold py-8'>OR</div>

            <ButtonDefault className='w-full bg-[#FF5733]'
                callback={() => {
                    signIn("google", {
                        redirect: "/",
                    })
                }}
            >
                Sign in with Google
            </ButtonDefault>
        </BackgroundContainer>
    )
}

export default LoginPage
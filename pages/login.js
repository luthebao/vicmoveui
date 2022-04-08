import BackgroundContainer from "../containers/background/backgroundcontainer"
import { FiX } from 'react-icons/fi';
import PageNavigateBtn from "../components/button/pagenavigate";
import Header from "../components/header/default";
import InputDefault from "../components/input/default";
import ButtonDefault from "../components/button/default";
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import HyperLink from "../components/text/hyperlink";
import { signIn, getSession } from "next-auth/react"
import Link from "next/link";

const LoginPage = () => {

    return (
        <BackgroundContainer type='light' className='text-center'>
            <PageNavigateBtn>
                <Link href={"/"}>
                    <a>
                        <FiX /></a>
                </Link>
            </PageNavigateBtn>
            <Header size='lg' classes='text-left'>Login</Header>
            <InputDefault type='email' name='email' placeholder='Email' required />
            <InputDefault type='password' name='password' placeholder='Password' required />
            <div className='pt-2 pb-6 pl-2 text-left'>
                <FormControlLabel control={<Switch defaultChecked />} label='Save my info?' />
            </div>
            <ButtonDefault type='submit' className='w-full bg-primary'>Sign in</ButtonDefault>
            <div className='pt-6'>
                <span>Forgot password? </span>
                <HyperLink path='#'>Click here</HyperLink>
            </div>
            <div className='text-divider font-semibold py-8'>OR</div>
            <ButtonDefault className='w-full bg-[#FF5733]' callback={() => signIn("google", {
                redirect: "/"
            })}>
                Sign in with Google
            </ButtonDefault>
            {/* <div className='flex justify-center'>
                <img src={"/images/logo/fingerprint.png"} width='80' />
            </div>
            <div>Scan</div> */}
        </BackgroundContainer>
    )
}

export async function getServerSideProps(context) {
    const ss = await getSession(context)

    if (ss) {
        return {
            redirect: {
                destination: '/',
                permanent: true,
            },
        }
    }

    return {
        props: {

        }
    }
}

export default LoginPage
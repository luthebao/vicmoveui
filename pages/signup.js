import BackgroundContainer from "../containers/background/backgroundcontainer"
import { FiX } from 'react-icons/fi';
import PageNavigateBtn from "../components/button/pagenavigate";
import Header from "../components/header/default";
import InputDefault from "../components/input/default";
import ButtonDefault from "../components/button/default";
import { signIn } from "next-auth/react"
import Link from "next/link";

const SignupPage = () => {


    return (
        <BackgroundContainer type='light' className='text-center'>
            <PageNavigateBtn>
                <Link href={"/"}>
                    <FiX />
                </Link>
            </PageNavigateBtn>
            <Header size='lg' classes='text-left'>Sign up</Header>
            <form>
                <InputDefault type='text' name='email' placeholder='Email' />
                <InputDefault type='password' name='password' placeholder='Password' />
                <InputDefault type='password' name='password2' placeholder='Confirm password' />
                <ButtonDefault type='submit' className='w-full bg-primary'>Sign up</ButtonDefault>
            </form>
            <div className='text-divider font-semibold py-8'>OR</div>
            <ButtonDefault type='submit' className='w-full bg-[#FF5733]' callback={() => signIn("google")}>
                Login with Google
            </ButtonDefault>
            {/* <div className='flex justify-center'>
                <img src={"/images/logo/fingerprint.png"} width='80' />
            </div>
            <div>Scan</div> */}
        </BackgroundContainer>
    )
}

export default SignupPage
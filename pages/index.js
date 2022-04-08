import ButtonLink from "../components/button/btnlink";
import CircleImage from "../components/image/circle";
import ParagraphDecoration from "../components/paragraph/decoration";
import BackgroundContainer from "../containers/background/backgroundcontainer";
import { useSession, signIn, signOut } from "next-auth/react"
import { useEffect } from "react";
import HeaderContainer from "../containers/header/default";
import UserAvatar from "../components/user/avatar";
import { FiPlus } from 'react-icons/fi';
import { AiOutlineDollar, AiOutlineLogout } from "react-icons/ai";
import SectionContainer from "../containers/section/section";
import BoxCard from "../components/card/box";
import ButtonDefault from "../components/button/default";
import TextHeader from "../components/text/textheader";
import VerticalListContainer from "../components/list/vertical";
import Menu from "../containers/menu/default";

export default function Home() {
    const { data: session } = useSession()

    if (session) {
        return (
            <BackgroundContainer type='light-2' padding='none' hasMenu={true}>
                <HeaderContainer>
                    <div className='flex items-center'>
                        <UserAvatar />
                        <span className='ml-4 text-black'>
                            {session.user.name}
                        </span>
                    </div>
                    <div className='flex items-center'>
                        <AiOutlineDollar className='text-2xl text-vicm-green-500 mr-4' />
                        <AiOutlineLogout className='text-2xl text-vicm-green-500 mr-4' onClick={signOut} />
                    </div>
                </HeaderContainer>
                <SectionContainer className='basis-full'>
                    <BoxCard className='box-decoration flex justify-center' style={{ height: '80vw' }}>
                        <ButtonDefault className='absolute top-4 right-4 bg-primary text-2xl' shapes='circle'>
                            <FiPlus />
                        </ButtonDefault>
                        <img src={"/images/icons/bw.png"} />
                    </BoxCard>

                    <TextHeader size='sm' className='mt-8'>Mystery Box</TextHeader>

                    <VerticalListContainer>
                        <BoxCard className='inline-block text-center mr-4'>
                            <img src={"/images/box/00.png"} />
                            <ButtonDefault className='bg-primary' size='sm'>Open</ButtonDefault>
                        </BoxCard>
                        <BoxCard className='inline-block text-center mr-4'>
                            <img src={"/images/box/00.png"} />
                            <ButtonDefault className='bg-primary' size='sm'>Open</ButtonDefault>
                        </BoxCard>
                        <BoxCard className='inline-block text-center mr-4'>
                            <img src={"/images/box/00.png"} />
                            <ButtonDefault className='bg-primary' size='sm'>Open</ButtonDefault>
                        </BoxCard>
                        <BoxCard className='inline-block text-center mr-4'>
                            <img src={"/images/box/00.png"} />
                            <ButtonDefault className='bg-primary' size='sm'>Open</ButtonDefault>
                        </BoxCard>
                    </VerticalListContainer>
                </SectionContainer>
                <Menu />
            </BackgroundContainer>
        )
    }

    return (
        <BackgroundContainer type='gradient'>
            <div className='flex justify-center pt-8 pb-4'>
                <CircleImage src={"/images/logo/1_trans.png"} width='260' height='260'></CircleImage>
            </div>

            <h1 className="text-5xl py-2">VicMove</h1>

            <p>
                Top Move to Earn Game & NFT Game on Binance Smart Chain
            </p>

            <ParagraphDecoration />

            <div className='w-full text-center flex flex-col mt-4 pt-8'>
                <ButtonLink href='/login' className='w-full bg-white-09 text-[#000]'>Login</ButtonLink>
                <ButtonLink href='/signup' className='w-full bg-white-025 mt-6 bg-primary'>Sign up</ButtonLink>
            </div>
            <p className='border-t-2 mt-12 pt-4 border-vicm-green-500 text-center'>
                Powered by VicMove
            </p>
        </BackgroundContainer>
    )
}
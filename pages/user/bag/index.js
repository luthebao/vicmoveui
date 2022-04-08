import ButtonLink from "../../../components/button/btnlink";
import CircleImage from "../../../components/image/circle";
import ParagraphDecoration from "../../../components/paragraph/decoration";
import BackgroundContainer from "../../../containers/background/backgroundcontainer";
import { useSession, signIn, signOut } from "next-auth/react"
import HeaderContainer from "../../../containers/header/default";
import UserAvatar from "../../../components/user/avatar";
import { AiOutlineDollar, AiOutlineLogout } from "react-icons/ai";
import SectionContainer from "../../../containers/section/section";
import LoadingContainer from "../../../containers/loading";
import LayoutMenu from "../../../layouts/layoutmenu";
import { AppBar, Tab, Tabs } from "@mui/material";
import { useState } from "react";
import SneakersList from "../../../containers/user/bag/sneakers";
import BoxesList from "../../../containers/user/bag/boxes";
import GemsList from "../../../containers/user/bag/gems";

export default function BagIndex() {
    const { data: session, status } = useSession()
    const [tabindex, setTabindex] = useState(0)

    if (status === "loading")
        return <LoadingContainer />

    if (session) {
        return (
            <LayoutMenu active={"bag"}>
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
                <AppBar position="static" className="w-auto mx-auto bg-vicm-green-90 mb-[20px] rounded-full border-[2px] border-white normal-case">
                    <Tabs className="normal-case" value={tabindex} onChange={(event, newValue) => setTabindex(newValue)} aria-label="simple tabs example" TabIndicatorProps={{ style: { backgroundColor: "transparent" } }}>
                        <Tab value={0} className={tabindex === 0 ? "bg-vicm-green-600 rounded-full text-white normal-case" : "text-white normal-case"} label="Sneaker" />
                        <Tab value={1} className={tabindex === 1 ? "bg-vicm-green-600 rounded-full text-white normal-case" : "text-white normal-case"} label="Box" />
                        <Tab value={2} className={tabindex === 2 ? "bg-vicm-green-600 rounded-full text-white normal-case" : "text-white normal-case"} label="Gem" />
                    </Tabs>
                </AppBar>
                <SectionContainer className='basis-full'>
                    {tabindex === 0 && <SneakersList />}
                    {tabindex === 1 && <BoxesList />}
                    {tabindex === 2 && <GemsList />}
                </SectionContainer>
            </LayoutMenu>
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
                <ButtonLink href='/login' className='w-full bg-white-09 text-black'>Login</ButtonLink>
                <ButtonLink href='/signup' className='w-full bg-white-025 mt-6 bg-primary text-white'>Sign up</ButtonLink>
            </div>
            <p className='border-t-2 mt-12 pt-4 border-vicm-green-500 text-center'>
                Powered by VicMove
            </p>
        </BackgroundContainer>
    )
}
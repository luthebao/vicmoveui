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
import WelcomePage from "../../welcome";
import HeaderUser from "../../../containers/header/headeruser";

export default function BagIndex() {
    const { data: session, status } = useSession()
    const [tabindex, setTabindex] = useState(0)

    if (status === "loading")
        return <LoadingContainer />

    if (session) {
        return (
            <LayoutMenu active={"bag"}>
                <HeaderUser session={session} signOut={() => signOut({ redirect: true, callbackUrl: "/" })} />
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

    return <WelcomePage />
    
}
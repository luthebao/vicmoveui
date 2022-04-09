import { useSession, signIn, signOut } from "next-auth/react"
import HeaderContainer from "../../../containers/header/default";
import UserAvatar from "../../../components/user/avatar";
import { AiOutlineDollar, AiOutlineLogout } from "react-icons/ai";
import SectionContainer from "../../../containers/section/section";
import LoadingContainer from "../../../containers/loading";
import LayoutMenu from "../../../layouts/layoutmenu";
import { AppBar, Tab, Tabs } from "@mui/material";
import { useState } from "react";
import SneakersListMarket from "../../../containers/user/market/sneakers";
import WelcomePage from "../../welcome";
import HeaderUser from "../../../containers/header/headeruser";
import BoxesListMarket from "../../../containers/user/market/boxes";
import GemsListMarket from "../../../containers/user/market/gems";

export default function MarketIndex() {
    const { data: session, status } = useSession()
    const [tabindex, setTabindex] = useState(0)

    if (status === "loading")
        return <LoadingContainer />

    if (session) {
        return (
            <LayoutMenu active={"market"}>
                <HeaderUser session={session} signOut={() => signOut({ redirect: true, callbackUrl: "/" })} />
                <AppBar position="static" className="w-auto mx-auto bg-vicm-green-90 mb-[20px] rounded-full border-[2px] border-white normal-case">
                    <Tabs className="normal-case" value={tabindex} onChange={(event, newValue) => setTabindex(newValue)} aria-label="simple tabs example" TabIndicatorProps={{ style: { backgroundColor: "transparent" } }}>
                        <Tab value={0} className={tabindex === 0 ? "bg-vicm-green-600 rounded-full text-white normal-case" : "text-white normal-case"} label="Sneaker" />
                        <Tab value={1} className={tabindex === 1 ? "bg-vicm-green-600 rounded-full text-white normal-case" : "text-white normal-case"} label="Box" />
                        <Tab value={2} className={tabindex === 2 ? "bg-vicm-green-600 rounded-full text-white normal-case" : "text-white normal-case"} label="Gem" />
                    </Tabs>
                </AppBar>
                <SectionContainer className='basis-full mb-10'>
                    {tabindex === 0 && <SneakersListMarket />}
                    {tabindex === 1 && <BoxesListMarket />}
                    {tabindex === 2 && <GemsListMarket />}
                </SectionContainer>
            </LayoutMenu>
        )
    }

    return <WelcomePage />
    
}
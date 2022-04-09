import { useSession, signIn, signOut } from "next-auth/react"
import SectionContainer from "../../../containers/section/section";
import LoadingContainer from "../../../containers/loading";
import LayoutMenu from "../../../layouts/layoutmenu";
import { useState } from "react";
import SneakersList from "../../../containers/user/bag/sneakers";
import WelcomePage from "../../welcome";
import HeaderBack from "../../../containers/header/headerback";

export default function ChangeShose() {
    const { data: session, status } = useSession()

    if (status === "loading")
        return <LoadingContainer />

    if (session) {
        return (
            <LayoutMenu active={"bag"}>
                <HeaderBack />

                <SectionContainer className='basis-full'>
                    <SneakersList />
                </SectionContainer>
            </LayoutMenu>
        )
    }

    return <WelcomePage />

}
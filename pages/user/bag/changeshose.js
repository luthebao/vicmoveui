import { useSession } from "next-auth/react"
import SectionContainer from "../../../containers/section/section";
import LoadingContainer from "../../../containers/loading";
import LayoutMenu from "../../../layouts/layoutmenu";
import WelcomePage from "../../welcome";
import HeaderBack from "../../../containers/header/headerback";
import ChangeShoseList from "../../../containers/user/bag/changeshose";

export default function ChangeShose() {
    const { data: session, status } = useSession()

    if (status === "loading")
        return <LoadingContainer />

    if (session) {
        return (
            <LayoutMenu active={"bag"} session={session}>
                <HeaderBack />
                <SectionContainer className='basis-full mb-10'>
                    <ChangeShoseList />
                </SectionContainer>
            </LayoutMenu>
        )
    }

    return <WelcomePage />

}
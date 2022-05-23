import { useSession } from "next-auth/react"
import SectionContainer from "../../../containers/section/section"
import LoadingContainer from "../../../containers/loading"
import LayoutMenu from "../../../layouts/layoutmenu"
import WelcomePage from "../../welcome"
import HeaderBack from "../../../containers/header/headerback"
import BreedSneakerList from "../../../containers/user/bag/listbreed"

export default function ListToBreed() {
    const { data: session, status } = useSession()

    if (status === "loading")
        return <LoadingContainer />

    if (session) {
        return (
            <LayoutMenu active={"profile"} session={session}>
                <HeaderBack title='Breed' />
                <SectionContainer className='basis-full mb-10'>
                    <BreedSneakerList />
                </SectionContainer>
            </LayoutMenu>
        )
    }

    return <WelcomePage />

}
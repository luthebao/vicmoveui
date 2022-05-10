import { useSession } from "next-auth/react"
import SectionContainer from "../../../../../containers/section/section";
import LoadingContainer from "../../../../../containers/loading";
import LayoutMenu from "../../../../../layouts/layoutmenu";
import WelcomePage from "../../../../welcome";
import HeaderBack from "../../../../../containers/header/headerback";
import EncrustGemCard from "../../../../../components/card/bag/encrustgem";

export default function MarketIndex() {
    const { data: session, status } = useSession()

    if (status === "loading")
        return <LoadingContainer />

    if (session) {
        return (
            <LayoutMenu active={"bag"} session={session}>
                <HeaderBack title="Encrusted" />
                <SectionContainer className='basis-full mb-10'>
                    <div className="flex flex-wrap">
                    
                    </div>
                </SectionContainer>
            </LayoutMenu>
        )
    }

    return <WelcomePage />

}
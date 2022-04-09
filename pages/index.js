import { useSession, signIn, signOut } from "next-auth/react"
import { FiPlus } from 'react-icons/fi';
import SectionContainer from "../containers/section/section";
import BoxCard from "../components/card/box";
import ButtonDefault from "../components/button/default";
import TextHeader from "../components/text/textheader";
import VerticalListContainer from "../components/list/vertical";
import LoadingContainer from "../containers/loading";
import LayoutMenu from "../layouts/layoutmenu";
import WelcomePage from "./welcome";
import HeaderUser from "../containers/header/headeruser";
import ButtonLink from "../components/button/btnlink";

export default function Home() {
    const { data: session, status } = useSession()

    if (status === "loading")
        return <LoadingContainer />

    if (session) {
        return (
            <LayoutMenu>
                <HeaderUser session={session} signOut={() => signOut({ redirect: true, callbackUrl: "/" })} />

                <SectionContainer className='basis-full'>
                    <BoxCard className='box-decoration flex justify-center '>
                        <ButtonLink href={"/user/bag/changeshose"} className='shadow-2xl border-2 rounded-full p-2 rounded-full p-2  uppercase btn text-white hover:opacity-90 absolute top-4 right-4 bg-primary text-2xl' shapes='circle'>
                            <FiPlus />
                        </ButtonLink>
                        <img src={"/images/icons/bw.png"} />
                    </BoxCard>
                    <TextHeader size='sm' className='mt-8'>Mystery Box</TextHeader>
                    <VerticalListContainer className={"mb-5"}>
                        <BoxCard className='inline-block text-center mr-4'>
                            <img src={"/images/box/walking.png"} width={115} />
                            <ButtonDefault className='bg-primary' size='sm'>Open</ButtonDefault>
                        </BoxCard>
                        <BoxCard className='inline-block text-center mr-4'>
                            <img src={"/images/box/running.png"} width={115} />
                            <ButtonDefault className='bg-primary' size='sm'>Open</ButtonDefault>
                        </BoxCard>
                        <BoxCard className='inline-block text-center mr-4'>
                            <img src={"/images/box/versatile.png"} width={115} />
                            <ButtonDefault className='bg-primary' size='sm'>Open</ButtonDefault>
                        </BoxCard>
                        <BoxCard className='inline-block text-center mr-4'>
                            <img src={"/images/box/cycling.png"} width={115} />
                            <ButtonDefault className='bg-primary' size='sm'>Open</ButtonDefault>
                        </BoxCard>
                    </VerticalListContainer>
                </SectionContainer>
            </LayoutMenu>
        )
    }

    return <WelcomePage />
}
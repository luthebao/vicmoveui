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
import ProgressBar from "../components/card/progressbar"
import Chip from "../components/card/chip"
import CircleNumber from "../components/text/circlenumber"
import { AiOutlineDollar, AiFillTags } from "react-icons/ai";
import { useState } from "react";

export default function Home() {
    const { data: session, status } = useSession()

    const [type, setType] = useState(1)

    if (status === "loading")
        return <LoadingContainer />

    if (session) {
        return (
            <LayoutMenu active={"profile"}>
                <HeaderUser session={session} signOut={() => signOut({ redirect: true, callbackUrl: "/" })} />

                <SectionContainer className='basis-full mb-10'>
                    {type === 0 && <BoxCard className='box-decoration flex justify-center '>
                        <ButtonLink href={"/user/bag/changeshose"} className='shadow-2xl border-2 rounded-full p-2 rounded-full p-2  uppercase btn text-white hover:opacity-90 absolute top-4 right-4 bg-primary text-2xl' shapes='circle'>
                            <FiPlus />
                        </ButtonLink>
                        <img src={"/images/icons/bw.png"} />
                    </BoxCard>}
                    {type === 1 && <BoxCard className='box-decoration flex flex-col justify-between min-h-[80vw] p-[1rem]'>
                        <div className='flex'>
                            <ProgressBar percentage='70' className='w-1/3' />
                            <Chip className='mx-6 text-sm'>Lv.10</Chip>
                            <ButtonDefault className='bg-primary' size='sm'>Change</ButtonDefault>
                        </div>
                        <div className='flex flex-col absolute top-16'>
                            <CircleNumber className='mb-2 border-red-300' size='sm'>40</CircleNumber>
                            <CircleNumber className='mb-2 border-yellow-300' size='sm'>20</CircleNumber>
                            <CircleNumber className='mb-2 border-emerald-300' size='sm'>10</CircleNumber>
                        </div>
                        <img className='mt-12' src={"/images/s/NFT2.png"} />
                        <div className='flex flex-wrap justify-between items-end'>
                            <Chip className='bg-vicm-green-600 text-white'>
                                <AiFillTags className='text-2xl mr-2' /> #123456789
                            </Chip>
                            <Chip className="text-vicm-violet-100 bg-vicm-green-90" >
                                <img src={"/images/icons/foot.svg"} className='mr-2' />Walking
                            </Chip>
                        </div>
                    </BoxCard>}
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
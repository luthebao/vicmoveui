import { useSession, signOut } from "next-auth/react"
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
import { AiFillTags } from "react-icons/ai";
import { useEffect, useState } from "react";
import Link from "next/link";
import { shoes_data } from '../utils/data'

export default function Home() {
    const { data: session, status } = useSession()
    const [checking, setChecking] = useState(true)
    const [currentShoes, setCurrentShoes] = useState(null)

    useEffect(() => {
        new Promise(async (resolve, reject) => {
            const getcurrent = localStorage.getItem("currentShoes")
            if (getcurrent) {
                setCurrentShoes(shoes_data.find(val => val.id === Number(getcurrent)))
            }
            resolve(true);
        }).then(() => {
            setChecking(false)
        }).catch(() => {
            setChecking(false)
        })
    }, [session])

    if (status === "loading" || checking)
        return <LoadingContainer />

    if (session) {
        return (
            <LayoutMenu active={"profile"}>
                <HeaderUser session={session} />
                <SectionContainer className='basis-full'>
                    {currentShoes === null && <BoxCard className='box-decoration flex justify-center '>
                        <ButtonLink href={"/user/bag/changeshose"} className='shadow-2xl border-2 rounded-full p-2 rounded-full p-2  uppercase btn text-white hover:opacity-90 absolute top-4 right-4 bg-primary text-2xl' shapes='circle'>
                            <FiPlus />
                        </ButtonLink>
                        <img src={"/images/icons/bw.png"} />
                    </BoxCard>}
                    {currentShoes && <BoxCard className='box-decoration flex flex-col  min-h-[80vw] p-[1rem]'>
                        <div className='flex justify-between'>
                            <ProgressBar percentage={100} className='w-1/3' />
                            <div className="bg-vicm-green-600 text-white rounded-full px-1 flex text-xs">
                                <p className="my-auto px-2 text-xs">Lv: {currentShoes.level}</p>
                            </div>
                            <Link href={"/user/bag/changeshose"}>
                                <button className='bg-vicm-green-600 w-1/4 rounded-full text-xs shadow-2xl text-white hover:opacity-90 px-1' size='sm'>
                                    Change
                                </button>
                            </Link>
                        </div>
                        <div className='flex flex-col absolute top-16'>
                            <CircleNumber className='mb-2 border-red-300' size='sm'>{currentShoes.stats.comfort}</CircleNumber>
                            <CircleNumber className='mb-2 border-yellow-300' size='sm'>{currentShoes.stats.lucky + currentShoes.gems.reduce((a, b) => a + (b.stat * currentShoes.level || 0), 0)}</CircleNumber>
                            <CircleNumber className='mb-2 border-emerald-300' size='sm'>{currentShoes.stats.stamina}</CircleNumber>
                        </div>
                        <Link href={`/user/bag/item/${currentShoes.id}/detail`}>
                            <img className='mt-12 ml-10' src={`/images/s/${currentShoes.pic}.png`} />
                        </Link>
                        <div className='flex flex-wrap justify-between items-end'>
                            <Chip className='bg-vicm-green-600 text-white'>
                                <AiFillTags className='text-xl mr-2' /> #{currentShoes.id}
                            </Chip>
                            <Chip className="text-vicm-violet-100 bg-vicm-green-90 capitalize" >
                                <img src={"/images/icons/foot.svg"} className='mr-2 ' />{currentShoes.style}
                            </Chip>
                        </div>
                    </BoxCard>}
                    <TextHeader size='sm' className='mt-8'>Shoes Box</TextHeader>
                    <VerticalListContainer className={"mb-5 noscroll"}>
                        {
                            shoes_data.filter(val => val.type === "box").map(val => (
                                <BoxCard key={`boxindex-${val.id}`} className='inline-block text-center mr-4'>
                                    <img src={`/images/box/${val.style}.png`} width={115} />
                                    <Link href={`/user/bag/item/${val.id}/detail`}>
                                        <button className="rounded-full text-xs px-6 py-1 shadow-2xl border-2 uppercase btn text-white hover:opacity-90 bg-vicm-green-600">Open</button>
                                    </Link>
                                </BoxCard>
                            ))
                        }
                    </VerticalListContainer>
                </SectionContainer>
            </LayoutMenu>
        )
    }

    return <WelcomePage />
}
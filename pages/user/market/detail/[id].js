import { useSession } from "next-auth/react"
import SectionContainer from "../../../../containers/section/section";
import LoadingContainer from "../../../../containers/loading";
import LayoutMenu from "../../../../layouts/layoutmenu";
import WelcomePage from "../../../welcome";
import HeaderBack from "../../../../containers/header/headerback";
import BoxCard from "../../../../components/card/box";
import Chip from "../../../../components/card/chip";
import { AiFillTags } from "react-icons/ai";
import ProgressBar from "../../../../components/card/progressbar";
import CircleNumber from "../../../../components/text/circlenumber";
import ButtonDefault from "../../../../components/button/default";
import React, { useEffect, useState } from "react";
import { shoes_data } from '../../../../utils/data'
import { FiPlus } from 'react-icons/fi';
import Link from "next/link";
import { toast } from "react-toastify";


export default function SneakerDetail(props) {
    const { data: session, status } = useSession()
    const [checking, setChecking] = useState(true)
    const [info, setInfo] = useState(null)

    useEffect(() => {
        new Promise(async (resolve, reject) => {
            if (props.id) {
                setInfo(shoes_data.find(val => val.id === Number(props.id)))
            }
            resolve(true);
        }).then(() => {
            setChecking(false)
        }).catch(() => {
            setChecking(false)
        })
    }, [])


    if (status === "loading" || checking)
        return <LoadingContainer />

    if (session) {
        return (
            <LayoutMenu active={"market"} session={session}>
                <HeaderBack title="Detail" />
                <SectionContainer className='basis-full mb-10'>
                    <BoxCard className='flex flex-col justify-between' type='flat-border' style={{ 'minHeight': '80vw', 'padding': '1rem' }}>
                        <div className='flex justify-between'>
                            <div className='flex flex-col items-center'>
                                <Chip className='mb-2 bg-vicm-green-600 text-white'>
                                    <AiFillTags className='text-xl mr-2' /> #{info.id}
                                </Chip>
                                <Chip className='text-sm bg-vicm-green-90 text-vicm-violet-100 capitalize w-[80%] justify-center'>
                                    <img src={"/images/icons/foot.svg"} className='mr-2' />
                                    {info.style}
                                </Chip>
                            </div>
                            <ProgressBar percentage={100} className='w-24' />
                        </div>
                        <div>
                            <div className='image-decoration mt-4'>
                                <img src={`/images/s/${info.pic}.png`} />
                            </div>
                            {info.gems.length > 0 && <div className='flex justify-around'>
                                <div className='bg-vicm-light-green-20004 w-1/4 max-w-[150px] min-h-[70px] p-2 m-1 rounded-xl flex items-center justify-center'>
                                    {info.gems.length > 0 && <img src={`/images/gem/${info.gems[0].type}.png`} />}
                                </div>
                                <div className='bg-vicm-light-green-20004 w-1/4 max-w-[150px] p-2 m-1 rounded-xl flex items-center justify-center'>
                                    {info.gems.length > 1 && <img src={`/images/gem/${info.gems[1].type}.png`} />}
                                </div>
                                <div className='bg-vicm-light-green-20004 w-1/4 max-w-[150px] p-2 m-1 rounded-xl flex items-center justify-center'>
                                    {info.gems.length > 2 && <img src={`/images/gem/${info.gems[2].type}.png`} />}
                                </div>
                                <div className='bg-vicm-light-green-20004 w-1/4 max-w-[150px] p-2 m-1 rounded-xl flex items-center justify-center'>
                                    {info.gems.length > 3 && <img src={`/images/gem/${info.gems[3].type}.png`} />}
                                </div>
                            </div>}
                            <BoxCard className='flex flex-col mt-6 items-center w-full'>
                                <div>Attributes</div>
                                <div className='grid4'>
                                    <div>
                                        <CircleNumber className='mb-2 border-red-300' size='lg'>
                                            {info.stats.comfort}
                                        </CircleNumber>
                                        <span className='text-xs'>Comfort</span>
                                    </div>
                                    <div>
                                        <CircleNumber className='mb-2 border-yellow-300' size='lg'>
                                            {info.stats.lucky + info.gems.reduce((a, b) => a + (b.stat || 0), 0)}
                                        </CircleNumber>
                                        <span className='text-xs'>Luck</span>
                                    </div>
                                    <div>
                                        <CircleNumber className='mb-2 border-emerald-300' size='lg'>
                                            {info.stats.stamina}
                                        </CircleNumber>
                                        <span className='text-xs'>Stamina</span>
                                    </div>
                                    <div>
                                        <CircleNumber className='mb-2 border-gray-300' size='lg' border='thin'>?</CircleNumber>
                                        <span className='text-xs'>Coming soon</span>
                                    </div>
                                </div>
                            </BoxCard>
                        </div>
                        <div className='flex justify-between items-center mt-6'>
                            <span className="text-orange-400 text-xl">1 BNB</span>

                            <ButtonDefault className='bg-vicm-green-600 h-12' size='md' callback={() => toast("Comming soon")}>Buy</ButtonDefault>
                        </div>
                    </BoxCard>
                </SectionContainer>
            </LayoutMenu>
        )
    }

    return <WelcomePage />

}


export async function getServerSideProps(context) {

    const id = context.query.id ? context.query.id : null

    return {
        props: {
            id
        }
    }
}
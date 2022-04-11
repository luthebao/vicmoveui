import { useSession } from "next-auth/react"
import SectionContainer from "../../../../../containers/section/section";
import LoadingContainer from "../../../../../containers/loading";
import LayoutMenu from "../../../../../layouts/layoutmenu";
import WelcomePage from "../../../../welcome";
import HeaderBack from "../../../../../containers/header/headerback";
import BoxCard from "../../../../../components/card/box";
import Chip from "../../../../../components/card/chip";
import { AiFillTags } from "react-icons/ai";
import ProgressBar from "../../../../../components/card/progressbar";
import CircleNumber from "../../../../../components/text/circlenumber";
import ButtonDefault from "../../../../../components/button/default";
import React, { useEffect, useState } from "react";
import { shoes_data } from '../../../../../utils/data'
import { FiChevronLeft, FiPlus } from 'react-icons/fi';
import Link from "next/link";
import { toast } from "react-toastify";


export default function SneakerDetail(props) {
    const { data: session, status } = useSession()
    const [checking, setChecking] = useState(true)
    const [price, setPrice] = useState(() => props?.price || 1)
    const [edit, setEdit] = useState(false)
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
            <LayoutMenu active={"bag"}>
                <HeaderBack title="Bag" />
                <SectionContainer className='basis-full mb-10'>
                    {info && info.type === "shoes" && <BoxCard className='flex flex-col justify-between' type='flat-border' style={{ 'minHeight': '80vw', 'padding': '1rem' }}>
                        <div className='flex justify-between'>
                            <div className='flex flex-col items-center'>
                                <Chip className='text-sm mb-2 bg-vicm-green-600 text-white'>
                                    <AiFillTags className=' mr-2' /> #{info.id}
                                </Chip>
                                <Chip className='text-sm bg-vicm-green-90 text-vicm-violet-100 capitalize w-[80%] justify-center'>
                                    <img src={"/images/icons/foot.svg"} className='mr-2' />
                                    {info.style}
                                </Chip>
                            </div>
                            <div className='flex flex-wrap items-start'>
                                <Chip className='text-sm mx-auto bg-vicm-green-600 text-white capitalize justify-center'>
                                    Lvl {info.level}
                                </Chip>
                                <ProgressBar percentage={100} className='ml-2 w-24' />
                            </div>
                        </div>
                        <div>
                            <div className='image-decoration mt-4'>
                                <img src={`/images/s/${info.pic}.png`} />
                            </div>
                            <div className='flex justify-around'>
                                <div className='bg-vicm-light-green-20004 w-1/4 max-w-[150px] min-h-[70px] p-2 m-1 rounded-xl flex items-center justify-center'>
                                    {info.gems.length > 0 ? <img src={`/images/gem/${info.gems[0].type}.png`} /> :
                                        <Link href={`/user/bag/item/${info.id}/encrusted`}>
                                            <FiPlus className="text-[50px]" />
                                        </Link>
                                    }
                                </div>
                                <div className='bg-vicm-light-green-20004 w-1/4 max-w-[150px] p-2 m-1 rounded-xl flex items-center justify-center'>
                                    {info.gems.length > 1 ? <img src={`/images/gem/${info.gems[1].type}.png`} /> :
                                        <Link href={`/user/bag/item/${info.id}/encrusted`}>
                                            <FiPlus className="text-[50px]" />
                                        </Link>}
                                </div>
                                <div className='bg-vicm-light-green-20004 w-1/4 max-w-[150px] p-2 m-1 rounded-xl flex items-center justify-center'>
                                    {info.gems.length > 2 ? <img src={`/images/gem/${info.gems[2].type}.png`} /> :
                                        <Link href={`/user/bag/item/${info.id}/encrusted`}>
                                            <FiPlus className="text-[50px]" />
                                        </Link>}
                                </div>
                                <div className='bg-vicm-light-green-20004 w-1/4 max-w-[150px] p-2 m-1 rounded-xl flex items-center justify-center'>
                                    {info.gems.length > 3 ? <img src={`/images/gem/${info.gems[3].type}.png`} /> :
                                        <Link href={`/user/bag/item/${info.id}/encrusted`}>
                                            <FiPlus className="text-[50px]" />
                                        </Link>}
                                </div>
                            </div>
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
                                            {info.stats.lucky + info.gems.reduce((a, b) => a + (b.stat*info.level || 0), 0)}
                                        </CircleNumber>
                                        <span className='text-xs'>Lucky</span>
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
                            {!edit && <ButtonDefault className='bg-vicm-yellow-100 h-12' size='md' callback={() => toast("Comming soon")}>Repair</ButtonDefault>}
                            {!edit && <span className="text-orange-400 text-xl" onClick={() => setEdit(true)}>{price} BNB</span>}
                            {edit && <React.Fragment>
                                <input type="number" min={1} step={0.1} value={price} onChange={(e) => setPrice(e.target.value)} className="text-xl rounded-xl h-12 px-2 w-full bg-transparent border-2 border-gray-400 focus-visible:outline-vicm-green-500 text-orange-400" />
                                <select className="mx-1 flex text-xl h-12 text-white items-center bg-vicm-gray-100 rounded-xl" >
                                    <option>BNB</option>
                                    <option>ETH</option>
                                    <option>MATIC</option>
                                </select>
                            </React.Fragment>}
                            {!edit && <ButtonDefault className='bg-vicm-red-100 h-12' size='md' callback={() => toast("Comming soon")}>Sell</ButtonDefault>}
                            {edit && <ButtonDefault className='bg-vicm-red-100 h-12' size='md' callback={() => setEdit(false)}>SET</ButtonDefault>}
                        </div>
                    </BoxCard>}
                    {info && info.type === "box" && <BoxCard className='flex flex-col justify-between' type='flat-border' style={{ 'minHeight': '80vw', 'padding': '1rem' }}>
                        <div className='flex justify-between'>
                            <Chip className='mb-2 bg-vicm-green-600 text-white'>
                                <AiFillTags className='text-2xl mr-2' /> #{info.id}
                            </Chip>
                            <Chip className='text-sm bg-vicm-green-90 text-vicm-violet-100 capitalize'>
                                <img src={"/images/icons/foot.svg"} className='mr-2' />
                                {info.style}
                            </Chip>
                        </div>
                        <div>
                            <div className='image-decoration mt-4'>
                                <img src={`/images/box/${info.pic}.png`} />
                            </div>
                        </div>
                        <div className='flex justify-center items-center '>
                            {<ButtonDefault className='bg-vicm-green-600 h-12' size='md' callback={() => toast("Comming soon")}>Open</ButtonDefault>}
                        </div>
                    </BoxCard>}
                    {info && info.type === "gem" && <BoxCard className='flex flex-col justify-between md:w-1/2 m-auto' type='flat-border' style={{ 'padding': '1rem' }}>
                        <div className='flex justify-between'>
                            <Chip className='mb-2 bg-vicm-green-600 text-white'>
                                <AiFillTags className='text-2xl mr-2' /> #{info.id}
                            </Chip>
                            <Chip className='text-sm bg-vicm-green-90 text-vicm-violet-100 capitalize'>
                                {info.style} + {info.level}
                            </Chip>
                        </div>
                        <div className="flex image-decoration ">
                            <div className='mt-4 mx-auto'>
                                <img src={`/images/gem/${info.pic}.png`} />
                            </div>
                        </div>
                        <div className='flex justify-between items-center mt-6'>
                            {!edit && <span className="text-orange-400 text-xl" onClick={() => setEdit(true)}>{price} BNB</span>}
                            {edit && <React.Fragment>
                                <input type="number" min={0} value={price} onChange={(e) => setPrice(e.target.value)} className="text-xl rounded-xl h-12 px-2 w-full bg-transparent border-2 border-gray-400 focus-visible:outline-vicm-green-500 text-orange-400" />
                                <select className="mx-1 flex text-xl h-12 text-white items-center bg-vicm-gray-100 rounded-xl" >
                                    <option>BNB</option>
                                    <option>ETH</option>
                                    <option>MATIC</option>
                                </select>
                            </React.Fragment>}
                            {!edit && <ButtonDefault className='bg-vicm-red-100 h-12' size='md' callback={() => toast("Comming soon")}>Sell</ButtonDefault>}
                            {edit && <ButtonDefault className='bg-vicm-red-100 h-12' size='md' callback={() => setEdit(false)}>SET</ButtonDefault>}
                        </div>
                    </BoxCard>}
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
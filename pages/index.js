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
import { useSelector } from "react-redux";
import { AppBar, Tab, Tabs } from "@mui/material";
import { useAppContext } from "../utils/store";
import UpgradeLevelPopup from "../components/item/popup/upgradelevel";
import { toast } from "react-toastify";

export default function Home() {
    const { data: session, status } = useSession()
    const [checking, setChecking] = useState(true)
    const [currentShoes, setCurrentShoes] = useState(null)
    const { pages } = useSelector(state => state)
    const [tabindex, setTabindex] = useState(0)

    // context
    const { acc_sneakers, acc_boxes, noti_popup } = useAppContext()
    const [getSneakers, sneakers] = acc_sneakers
    const [getBoxes, boxes] = acc_boxes
    const [popup, setPopup] = noti_popup

    useEffect(() => {
        if (session) {
            getSneakers({
                variables: {
                    "accountdetailId": session.id
                }
            })
            getBoxes({
                variables: {
                    "accountdetailId": session.id
                }
            })
        }
    }, [session])

    useEffect(() => {

        new Promise(async (resolve, reject) => {
            if (sneakers && sneakers.data) {
                const getcurrent = localStorage.getItem("currentShoes")
                if (getcurrent && pages.detail) {
                    setCurrentShoes((sneakers && sneakers.data && sneakers.data.sneakers.find(val => val.id === Number(getcurrent))) || null)
                }
            }
            resolve(true);
        }).then(() => {
            setChecking(false)
        }).catch(() => {
            setChecking(false)
        })

    }, [sneakers])

    if (status === "loading" || checking)
        return <LoadingContainer />

    if (session) {
        return (
            <LayoutMenu session={session} active={"profile"}>
                <HeaderUser session={session} />
                {/* {currentShoes && <AppBar position="static" className="w-auto mx-auto bg-vicm-green-90 mb-[20px] rounded-full border-[2px] border-white normal-case block md:hidden">
                    <Tabs className="normal-case" value={tabindex} onChange={(event, newValue) => setTabindex(newValue)} aria-label="simple tabs example" TabIndicatorProps={{ style: { backgroundColor: "transparent" } }}>
                        <Tab value={0} className={tabindex === 0 ? "bg-vicm-green-600 rounded-full text-white normal-case" : "text-white normal-case"} label="Current" />
                        <Tab value={1} className={tabindex === 1 ? "bg-vicm-green-600 rounded-full text-white normal-case" : "text-white normal-case"} label="Upgrade" />
                    </Tabs>
                </AppBar>} */}
                <SectionContainer className='basis-full'>
                    {currentShoes === null &&
                        <BoxCard className='box-decoration flex justify-center w-full md:w-1/2'>
                            <ButtonLink href={"/user/bag/changeshose"} className='shadow-2xl border-2 rounded-full p-2 rounded-full p-2  uppercase btn text-white hover:opacity-90 absolute top-4 right-4 bg-primary text-2xl' shapes='circle'>
                                <FiPlus />
                            </ButtonLink>
                            <img src={"/images/icons/bw.png"} />
                        </BoxCard>}
                    {currentShoes &&
                        <BoxCard className='box-decoration flex flex-col w-full md:w-1/2 p-[6px] m-[4px]'>
                            <div className='flex justify-between'>
                                <ProgressBar min={currentShoes.exp} max={currentShoes.maxExp} className='w-1/3'
                                    upgrade={() => {
                                        setPopup({
                                            title: "Upgrade level",
                                            render: <UpgradeLevelPopup session={session} level={currentShoes.level} itemid={currentShoes.id} onClose={() => {
                                                setPopup(null)
                                                sneakers.refetch({
                                                    variables: {
                                                        "accountdetailId": session.id
                                                    }
                                                })
                                            }} />
                                        })
                                    }}
                                />
                                <div className="bg-vicm-green-600 text-white rounded-full px-1 flex text-xs">
                                    <p className="my-auto px-2 text-xs">Lv: {currentShoes.level}</p>
                                </div>
                                <Link href={"/user/bag/changeshose"}>
                                    <button className='bg-vicm-green-600 w-1/4 rounded-full text-xs shadow-2xl text-white hover:opacity-90 px-1' size='sm'>
                                        Switch
                                    </button>
                                </Link>
                            </div>
                            <div className='flex flex-col absolute top-16'>
                                <CircleNumber className='mb-2 border-red-300' size='sm'>{parseInt(currentShoes.comfort)}</CircleNumber>
                                <CircleNumber className='mb-2 border-emerald-300' size='sm'>{parseInt(currentShoes.stamina)}</CircleNumber>
                                <CircleNumber className='mb-2 border-yellow-300' size='sm'>{currentShoes.lucky}</CircleNumber>
                            </div>
                            <Link href={`/user/bag/item/${currentShoes.id}/detail`}>
                                <img className='mt-12 ml-10' src={`/images/s/${currentShoes.img}.png`} />
                            </Link>
                            <div className='flex flex-wrap justify-between items-end'>
                                <Chip className='bg-vicm-green-600 text-white'>
                                    <AiFillTags className='text-xl mr-2' /> #{currentShoes.id}
                                </Chip>
                                <Chip className="text-vicm-violet-100 bg-vicm-green-90 capitalize" >
                                    <img src={"/images/icons/foot.svg"} className='mr-2 ' />{currentShoes.type === 0 ? "walking" : currentShoes.type === 1 ? "running" : currentShoes.type === 2 ? "cycling" : "versatile"}
                                </Chip>
                            </div>
                        </BoxCard>
                    }
                    <TextHeader size='sm' className='mt-8'>Shoes Box</TextHeader>
                    <VerticalListContainer className={"mb-5 noscroll"}>
                        {
                            boxes && boxes.data && boxes.data.boxs.map(val => (
                                <BoxCard key={`boxindex-${val.id}`} className='inline-block text-center mr-4'>
                                    <img src={`/images/box/${val.type === 0 ? "walking" : val.type === 1 ? "running" : val.type === 2 ? "cycling" : "versatile"}.png`} width={115} />
                                    <Link href={`/user/bag/box/${val.id}/detail`}>
                                        <button className="rounded-full text-xs px-6 py-1 shadow-2xl border-2 uppercase btn text-white hover:opacity-90 bg-vicm-green-600">Open</button>
                                    </Link>
                                </BoxCard>
                            ))
                        }
                        <BoxCard key={`boxindex-getmore`} className='inline-block text-center mr-4 w-[147px] h-full'>
                            <FiPlus className="text-[115px] m-auto" />
                            {/* <a href="https://marketplace.vicmove.com/" target={"_blank"} rel="noreferrer">
                                <button className="rounded-full text-xs px-6 py-1 shadow-2xl border-2 uppercase btn text-white hover:opacity-90 bg-vicm-green-600">Get more </button>
                            </a> */}
                            <a target={"_blank"} rel="noreferrer" onClick={() => toast("We don not have event to claim boxes right now")}>
                                <button className="rounded-full text-xs px-6 py-1 shadow-2xl border-2 uppercase btn text-white hover:opacity-90 bg-vicm-green-600">Get more</button>
                            </a>
                        </BoxCard>
                    </VerticalListContainer>
                </SectionContainer>
            </LayoutMenu>
        )
    }

    return <WelcomePage />
}
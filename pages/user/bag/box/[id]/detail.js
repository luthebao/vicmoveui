import { useSession } from "next-auth/react"
import SectionContainer from "../../../../../containers/section/section";
import LoadingContainer from "../../../../../containers/loading";
import LayoutMenu from "../../../../../layouts/layoutmenu";
import WelcomePage from "../../../../welcome";
import HeaderBack from "../../../../../containers/header/headerback";
import BoxCard from "../../../../../components/card/box";
import Chip from "../../../../../components/card/chip";
import { AiFillTags } from "react-icons/ai";
import ButtonDefault from "../../../../../components/button/default";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { Backdrop, CircularProgress } from "@mui/material";
import { handleGetDetail } from "../../../../../store/actions/pages";
import { useAppContext } from "../../../../../utils/store";


export default function SneakerDetail(props) {
    const { data: session, status } = useSession()
    const [checking, setChecking] = useState(true)
    const [result, setResult] = useState(null)
    const [info, setInfo] = useState(null)
    const [opening, setOpening] = useState(false)
    const { pages } = useSelector(state => state)
    const dispatch = useDispatch()

    const { acc_boxes } = useAppContext()
    const [getBoxes, boxes] = acc_boxes

    useEffect(() => {
        if (session)
            new Promise(async (resolve, reject) => {
                if (boxes && boxes.data) {
                    boxes.refetch({
                        variables: {
                            "accountdetailId": session.id,
                        }
                    })
                } else {
                    getBoxes({
                        variables: {
                            "accountdetailId": session.id,
                        }
                    })
                }
                if (props.id && pages && pages.detail && pages.detail.boxs) {
                    // setInfo(pages.detail.boxs.find(val => val.id === Number(props.id)))
                }
                resolve(true);
            }).then(() => {
                setChecking(false)
            }).catch(() => {
                setChecking(false)
            })
    }, [session])

    useEffect(() => {
        if (boxes && boxes.data && props.id) {
            setInfo(boxes.data.boxs.find(val => val.id === Number(props.id)))
        }
    }, [boxes])

    const handleOpenBox = async () => {
        // toast("Coming soon")
        // return
        setOpening(true)
        try {
            const fet_unbox = await fetch("/api/user/openbox", {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'token': session.token,
                },
                method: "POST",
                body: JSON.stringify({
                    boxid: Number(props.id)
                })
            })
            const res_unbox = await fet_unbox.json()
            if (res_unbox.code === 1) {
                dispatch(handleGetDetail(session.id))
                setResult(res_unbox.data)
                setInfo(null)
                toast("Unbox success, check your reward and make a move")
            } else {
                toast(res_unbox.message)
            }
            setOpening(false)
        } catch (error) {
            toast("There is some misstake while unboxing, please contact to support")
        }
    }


    if (status === "loading" || checking)
        return <LoadingContainer />

    if (session) {
        return (
            <LayoutMenu active={"bag"} session={session}>
                <HeaderBack title="Box" />
                <SectionContainer className='basis-full mb-10' >
                    {info && <BoxCard className='flex flex-col justify-between ' type='flat-border' style={{ 'padding': '1rem' }}>
                        <div className='flex justify-between'>
                            <Chip className='mb-2 bg-vicm-green-600 text-white'>
                                <AiFillTags className='text-2xl mr-2' /> #{info.id}
                            </Chip>
                            <Chip className='text-sm bg-vicm-green-90 text-vicm-violet-100 capitalize'>
                                <img src={"/images/icons/foot.svg"} className='mr-2' />
                                {info.type === 0 ? "walking" : info.type === 1 ? "running" : info.type === 2 ? "cycling" : "versatile"}
                            </Chip>
                        </div>
                        <div >
                            <div className='image-decoration mt-4'>
                                <img src={`/images/box/${info.type === 0 ? "walking" : info.type === 1 ? "running" : info.type === 2 ? "cycling" : "versatile"}.png`} />
                            </div>
                        </div>
                        <div className='flex justify-center items-center '>
                            {<ButtonDefault className='bg-vicm-green-600 h-12' size='md' callback={handleOpenBox}>Confirm Open</ButtonDefault>}
                        </div>
                    </BoxCard>}
                    {
                        result && <BoxCard className='flex flex-col justify-between ' type='flat-border' style={{ 'padding': '1rem' }}>
                            <div className='flex justify-between'>
                                <Chip className='mb-2 bg-vicm-green-600 text-white'>
                                    <AiFillTags className='text-2xl mr-2' /> #{result.id}
                                </Chip>
                                <Chip className='text-sm bg-vicm-green-90 text-vicm-violet-100 capitalize'>
                                    <img src={"/images/icons/foot.svg"} className='mr-2' />
                                    {result.type === 0 ? "walking" : result.type === 1 ? "running" : result.type === 2 ? "cycling" : "versatile"}
                                </Chip>
                            </div>
                            <div >
                                <div className='image-decoration mt-4'>
                                    <img src={`/images/s/${result.img}.png`} />
                                </div>
                            </div>
                        </BoxCard>
                    }
                    <Backdrop open={opening}>
                        <div className='flex justify-center m-auto flex-col'>
                            <p className="text-white font-bold w-2/3 m-auto text-center">
                                Do not refresh this page while system is processing
                            </p>
                            <CircularProgress className="m-auto text-white" color="inherit" />
                        </div>
                    </Backdrop>
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
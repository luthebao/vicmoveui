import HeaderBack from '../../../containers/header/headerback'
import LayoutMenu from '../../../layouts/layoutmenu'
import { FiPlus } from 'react-icons/fi';
import { FaPuzzlePiece } from 'react-icons/fa';
import { useSession } from "next-auth/react"
import LoadingContainer from '../../../containers/loading';
import WelcomePage from '../../welcome';
import BoxCard from '../../../components/card/box';
import { useSelector } from 'react-redux';
import { useAppContext } from '../../../utils/store';
import { GiConverseShoe, GiCardRandom } from 'react-icons/gi';
import { ImArrowDown } from "react-icons/im";
import ButtonDefault from "../../../components/button/default";
import { useEffect } from 'react';
import ConfirmBreedPopup from '../../../components/item/popup/confirmbreed';
import Link from 'next/link';


const BreedInfo = ({ sneakerId }) => {

    const [checking, setChecking] = useState(true)

    const { pages } = useSelector(state => state)
    const { data: session, status } = useSession()
    const { noti_popup, acc_sneakers } = useAppContext()
    const [info, setInfo] = useState(null)
    const [child, setChild] = useState(null)
    const [popup, setPopup] = noti_popup
    const [getSneakers, sneakers] = acc_sneakers

    useEffect(() => {
        if (session)
            new Promise(async (resolve, reject) => {
                if (sneakers && sneakers.data)
                    sneakers.refetch({
                        variables: {
                            "accountdetailId": session.id,
                        }
                    })
                else
                    getSneakers({
                        variables: {
                            "accountdetailId": session.id,
                        }
                    })
                // 
                resolve(true);
            }).then(() => {
                setChecking(false)
            }).catch(() => {
                setChecking(false)
            })
    }, [session])

    useEffect(() => {
        if (sneakers && sneakers.data) {
            setInfo(sneakers.data.sneakers.find(val => val.id === Number(sneakerId)))
        }
    }, [sneakers])

    if (status === "loading" || checking)
        return <LoadingContainer />
    if (session && info)
        return (
            <LayoutMenu active="profile" session={session}>
                <HeaderBack title='Breed' />
                <div className='place-items-center'>
                    <div className='flex flex-row mb-12 justify-evenly'>
                        <BoxCard className='mb-8'>
                            <div className='flex justify-between relative'>
                                <div className='rounded-full h-16 w-16 flex items-center justify-center relative'>
                                    <FaPuzzlePiece className='text-3xl text-vicm-green-500' />
                                </div>
                                <div className='absolute bottom-0 right-0'>
                                    {(pages.detail && parseFloat(pages.detail.accountdetail.piecebox).toFixed(1)) || 0}
                                </div>
                            </div>
                        </BoxCard>
                        <div className='mb-8 flex'>
                            <FiPlus className='text-4xl m-auto text-black' />
                        </div>
                        <BoxCard className='mb-8'>
                            <div className='flex justify-between relative'>
                                <div className='h-16 w-16 flex items-center justify-center relative'>
                                    {
                                        info ?
                                            <img src={`/images/s/${info.img}.png`} />
                                            :
                                            <GiConverseShoe className='text-3xl text-vicm-green-500' />
                                    }
                                </div>
                                {info && <div className='absolute bottom-0 right-0'>
                                    {info.countchild} / 7
                                </div>}
                            </div>
                        </BoxCard>
                    </div>
                    <div className='flex mb-12'>
                        <div className='m-auto mb-8 flex'>
                            <ImArrowDown className='text-6xl m-auto text-vicm-green-500' />
                        </div>
                    </div>
                    <div className='flex justify-evenly'>
                        <BoxCard className='mb-8'>
                            <div className='flex justify-between relative'>
                                <div className='h-16 w-16 flex items-center justify-center relative'>
                                    {
                                        child ?
                                            <Link href={`/user/bag`}>
                                                <GiCardRandom className='text-3xl text-vicm-green-500' />
                                            </Link>
                                            :
                                            <GiConverseShoe className='text-3xl text-vicm-green-500' />
                                    }
                                </div>
                            </div>
                        </BoxCard>
                    </div>
                    <div className='flex justify-evenly'>
                        <ButtonDefault className='bg-emerald-300 h-12' size='md' callback={() => {
                            setPopup({
                                title: "Confirm to breed",
                                render: <ConfirmBreedPopup session={session} itemid={info.id}
                                    onChild={setChild}
                                    onClose={() => {
                                        setPopup(null)
                                        sneakers.refetch({
                                            variables: {
                                                "accountdetailId": session.id
                                            }
                                        })
                                    }} />
                            })
                        }}>
                            Breed
                        </ButtonDefault>
                    </div>
                </div>
            </LayoutMenu>
        )
    return <WelcomePage />
}

export async function getServerSideProps(context) {

    const id = context.query.id ? context.query.id : null

    return {
        props: {
            sneakerId: id
        }
    }
}


export default BreedInfo

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
import { GiConverseShoe } from 'react-icons/gi';
import { ImArrowDown } from "react-icons/im";


const ProfileIndex = () => {
    const { pages } = useSelector(state => state)
    const { data: session, status } = useSession()
    const { noti_popup, info_account } = useAppContext()
    const [popup, setPopup] = noti_popup
    const [loadAccount, infoAccount] = info_account


    if (status === "loading")
        return <LoadingContainer />
    if (session)
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
                                    <GiConverseShoe className='text-3xl text-vicm-green-500' />
                                </div>
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
                                    <GiConverseShoe className='text-3xl text-vicm-green-500' />
                                </div>
                            </div>
                        </BoxCard>
                    </div>
                    <div className='flex justify-evenly'>
                        <p>Coming soon</p>
                    </div>
                </div>
            </LayoutMenu>
        )
    return <WelcomePage />
}

export async function getServerSideProps(context) {

    return {
        props: {

        }
    }
}


export default ProfileIndex

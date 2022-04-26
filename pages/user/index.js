import HeaderBack from '../../containers/header/headerback'
import LayoutMenu from '../../layouts/layoutmenu'
import { IconButton, Avatar, LinearProgress } from '@mui/material';
import { FiPlus, FiLogOut } from 'react-icons/fi';
import { FaPuzzlePiece } from 'react-icons/fa';
import { AiFillEdit } from "react-icons/ai";
import { useSession, signOut } from "next-auth/react"
import LoadingContainer from '../../containers/loading';
import WelcomePage from '../welcome';
import TextHeader from '../../components/text/textheader';
import ButtonLink from '../../components/button/btnlink';
import { HiOutlineLightningBolt } from "react-icons/hi";
import SectionContainer from '../../containers/section/section';
import BoxCard from '../../components/card/box';
import { DiVim } from "react-icons/di";
import { useDispatch, useSelector } from 'react-redux';
import { useAppContext } from '../../utils/store';
import BuyEnergyPopup from '../../components/item/popup/fillenergy';
import { handleGetDetail } from '../../store/actions/pages';


const ProfileIndex = () => {
    const { pages } = useSelector(state => state)
    const { data: session, status } = useSession()
    const dispatch = useDispatch()
    const { noti_popup, info_account } = useAppContext()
    const [popup, setPopup] = noti_popup
    const [loadAccount, infoAccount] = info_account
    

    if (status === "loading")
        return <LoadingContainer />
    if (session)
        return (
            <LayoutMenu active="profile" session={session}>
                <HeaderBack title='profile' />
                <div className='flex flex-col items-center mb-12'>
                    <div className='relative'>
                        <Avatar sx={{ width: '100px', height: '100px' }} src={session.user.image} />
                        <label htmlFor="icon-button-file" className='absolute -bottom-[0.5rem] left-[1rem]'>
                            <input accept="image/png, image/jpeg" id="icon-button-file" type="file" className='hidden' />
                            <IconButton className='bg-primary shadow-2xl w-[20px] h-[20px] p-0' aria-label="upload picture" component="span">
                                <FiPlus className='text-white' />
                            </IconButton>
                        </label>
                    </div>
                    <div className='mt-6 text-center'>
                        <TextHeader size='sm' className='text-center'>{session.user.name}</TextHeader>
                        <div className='flex justify-center'>
                            <img className='text-vicm-green-500' src={"/images/icons/wallet.svg"} />
                            <div className='ml-4 text-vicm-green-500'>{pages.detail?.accountdetail?.address.slice(0, 7)}...{pages.detail?.accountdetail?.address.slice(pages.detail?.accountdetail?.address.length - 7, pages.detail?.accountdetail?.address.length)} </div>
                        </div>
                        <div className='flex'>
                            <ButtonLink href='/' size='md' className='mx-2 inline-block items-center bg-primary mt-4 text-white px-5'>
                                <AiFillEdit className='text-2xl pb-1 inline' />&nbsp;Edit
                            </ButtonLink>
                            <button className='mx-2 inline-block items-center bg-primary mt-4 text-white px-5 rounded-xl px-2 py-2 shadow-2xl uppercase btn hover:opacity-90' onClick={() => signOut({ redirect: true, callbackUrl: "/" })}>
                                <FiLogOut className='text-2xl pb-1 inline' />&nbsp;Logout
                            </button>
                        </div>
                    </div>
                </div>
                <SectionContainer className='basis-full shadow-t-lg p-8' bgColor='bg-white'>
                    <a href="https://marketplace.vicmove.com/" target={"_blank"} rel="noreferrer">
                        <BoxCard className='mb-8'>
                            <div className='flex justify-between'>
                                <div className='rounded-full shadow-t-lg border-2 border-gray-300 h-16 w-16 flex items-center justify-center'>
                                    <DiVim className='text-3xl text-vicm-green-500' />
                                </div>
                                <div className='grow ml-6'>
                                    <div className='text-gray-700'>VIM (account)</div>
                                    <LinearProgress className='my-2' variant="determinate" color='success' value={100} />
                                    <div>{(pages.detail && pages.detail.accountdetail.vim) || 0}</div>
                                </div>
                            </div>
                        </BoxCard>
                    </a>
                    <BoxCard className='mb-8' callback={() => {
                        setPopup({
                            title: "Buy Energy",
                            render: <BuyEnergyPopup session={session} onClose={() => {
                                setPopup(null)
                                if (session) {
                                    loadAccount({
                                        variables: {
                                            "accountdetailId": session.id
                                        }
                                    })
                                }
                            }} />
                        })
                    }}>
                        <div className='flex justify-between'>
                            <div className='rounded-full shadow-t-lg border-2 border-gray-300 h-16 w-16 flex items-center justify-center'>
                                <HiOutlineLightningBolt className='text-3xl text-vicm-green-500' />
                            </div>

                            <div className='grow ml-6'>
                                <div className='text-gray-700'>Energy</div>
                                <LinearProgress className='my-2' variant="determinate" color='success' value={((pages.detail && pages.detail.accountdetail.energy) || 0) * 100 / ((pages.detail && pages.detail.sneakers.length * 30) || 1)} />
                                <div>{(pages.detail && pages.detail.accountdetail.energy) || 0}/{(pages.detail && pages.detail.sneakers.length * 30) || 1}</div>
                            </div>
                        </div>
                    </BoxCard>
                    <BoxCard className='mb-8'>
                        <div className='flex justify-between'>
                            <div className='rounded-full shadow-t-lg border-2 border-gray-300 h-16 w-16 flex items-center justify-center'>
                                <FaPuzzlePiece className='text-3xl text-vicm-green-500' />
                            </div>
                            <div className='grow ml-6'>
                                <div className='text-gray-700'>Box Pieces</div>
                                <LinearProgress className='my-2' variant="determinate" color='success' value={100} />
                                <div>{(pages.detail && pages.detail.accountdetail.piecebox) || 0}</div>
                            </div>
                        </div>
                    </BoxCard>
                </SectionContainer>
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

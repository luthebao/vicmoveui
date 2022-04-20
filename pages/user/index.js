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


const ProfileIndex = () => {

    const { data: session, status } = useSession()

    if (status === "loading")
        return <LoadingContainer />
    if (session)
        return (
            <LayoutMenu active="profile">
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
                        {/* <div className='flex justify-center'>
                            <img className='text-vicm-green-500' src={"/images/icons/wallet.svg"} />
                            <div className='ml-4 text-vicm-green-500'>Create Wallet</div>
                        </div> */}
                        <div className='flex'>
                            <ButtonLink href='/' size='md' className='mx-2 inline-block items-center bg-primary mt-4 text-white px-5'>
                                <AiFillEdit className='text-2xl pb-1 inline' />&nbsp; Edit
                            </ButtonLink>
                            <button className='mx-2 inline-block items-center bg-primary mt-4 text-white px-5 rounded-xl px-2 py-2 shadow-2xl uppercase btn hover:opacity-90' onClick={() => signOut({ redirect: true, callbackUrl: "/" })}>
                                <FiLogOut className='text-2xl pb-1 inline' />&nbsp;Logout
                            </button>
                        </div>
                    </div>
                </div>
                <SectionContainer className='basis-full shadow-t-lg p-8' bgColor='bg-white'>
                    <BoxCard className='mb-8'>
                        <div className='flex justify-between'>
                            <div className='rounded-full shadow-t-lg border-2 border-gray-300 h-16 w-16 flex items-center justify-center'>
                                <HiOutlineLightningBolt className='text-3xl text-vicm-green-500' />
                            </div>
                            <div className='grow ml-6'>
                                <div className='text-gray-700'>Energy</div>
                                <LinearProgress className='my-2' variant="determinate" color='success' value={80} />
                                <div>50/60</div>
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
                                <LinearProgress className='my-2' variant="determinate" color='success' value={80} />
                                <div>200</div>
                            </div>
                        </div>
                    </BoxCard>
                </SectionContainer>
            </LayoutMenu>
        )
    return <WelcomePage />
}


export default ProfileIndex

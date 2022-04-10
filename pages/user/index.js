import HeaderBack from '../../containers/header/headerback'
import LayoutMenu from '../../layouts/layoutmenu'
import { IconButton, Avatar, LinearProgress } from '@mui/material';
import { FiChevronLeft, FiPlus } from 'react-icons/fi';
import { useSession } from "next-auth/react"
import LoadingContainer from '../../containers/loading';
import WelcomePage from '../welcome';


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
                </div>
            </LayoutMenu>
        )
    return <WelcomePage />
}


export default ProfileIndex

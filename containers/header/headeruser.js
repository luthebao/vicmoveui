import UserAvatar from "../../components/user/avatar"
import HeaderContainer from "./default"
import { AiOutlineDollar, AiOutlineLogout } from "react-icons/ai";
import PropTypes from 'prop-types';


const HeaderUser = ({ session, signOut }) => {

    return (
        <HeaderContainer>
            <div className='flex items-center'>
                <UserAvatar src={session.user.image} />
                <span className='ml-4 text-black'>
                    {session.user.name}
                </span>
            </div>
            <div className='flex items-center'>
                <AiOutlineDollar className='text-2xl text-vicm-green-500 mr-4' />
                <AiOutlineLogout className='text-2xl text-vicm-green-500 mr-4' onClick={signOut} />
            </div>
        </HeaderContainer>
    )
}

HeaderUser.propTypes = {
    session: PropTypes.object,
    signOut: PropTypes.func
};

export default HeaderUser
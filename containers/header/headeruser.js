import UserAvatar from "../../components/user/avatar"
import HeaderContainer from "./default"
import { AiOutlineDollar, AiOutlineLogout } from "react-icons/ai";
import { FiMenu } from "react-icons/fi";
import PropTypes from 'prop-types';
import Link from "next/link";


const HeaderUser = ({ session, signOut }) => {

    return (
        <HeaderContainer>
            <Link href={"/user"}>
                <div className='flex items-center'>
                    <UserAvatar src={session.user.image} />
                    <span className='ml-4 text-black'>
                        {session.user.name}
                    </span>
                </div>
            </Link>
            <div className='flex items-center'>
                <AiOutlineDollar className='text-3xl text-vicm-green-500 mr-4' />
                <Link href={"/menu"}>
                    <FiMenu className='text-3xl' />
                </Link>
                {/* <AiOutlineLogout className='text-2xl text-vicm-green-500 mr-4' onClick={signOut} /> */}
            </div>

        </HeaderContainer>
    )
}

HeaderUser.propTypes = {
    session: PropTypes.object,
    signOut: PropTypes.func
};

export default HeaderUser
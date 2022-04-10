import HeaderContainer from "./default"
import { FiChevronLeft } from 'react-icons/fi';
import TextHeader from "../../components/text/textheader";
import { useRouter } from "next/router";
import PropTypes from 'prop-types';


const HeaderBack = ({ title }) => {

    const rounter = useRouter()

    return (
        <HeaderContainer>
            <div className='flex items-center absolute left-2' onClick={() => rounter.back()}>
                <FiChevronLeft className='text-4xl' />
            </div>
            <TextHeader className='w-full text-center m-auto capitalize' size='xs'>{title || "Back"}</TextHeader>
        </HeaderContainer>
    )
}

HeaderBack.propTypes = {
    title: PropTypes.string,
};

export default HeaderBack
import HeaderContainer from "./default"
import { FiChevronLeft } from 'react-icons/fi';
import TextHeader from "../../components/text/textheader";
import { useRouter } from "next/router";


const HeaderBack = () => {

    const rounter = useRouter()

    return (
        <HeaderContainer>
            <div className='flex items-center absolute left-2' onClick={() => rounter.back()}>
                <FiChevronLeft className='text-4xl' />
            </div>
            <TextHeader className='w-full text-center m-auto' size='xs'>Back</TextHeader>
        </HeaderContainer>
    )
}

export default HeaderBack
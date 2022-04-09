import ButtonLink from "../components/button/btnlink";
import CircleImage from "../components/image/circle";
import ParagraphDecoration from "../components/paragraph/decoration";
import BackgroundContainer from "../containers/background/backgroundcontainer";


const WelcomePage = () => (
    <BackgroundContainer type='gradient'>
        <div className='flex justify-center pt-8 pb-4'>
            <CircleImage src={"/images/logo/1_trans.png"} width='260' height='260'></CircleImage>
        </div>

        <h1 className="text-5xl py-2">VicMove</h1>

        <p>
            Top Move to Earn Game & NFT Game on Binance Smart Chain
        </p>

        <ParagraphDecoration />

        <div className='w-full text-center flex flex-col mt-4 pt-8'>
            <ButtonLink href='/login' className='w-full bg-white-09 text-black'>Login</ButtonLink>
            <ButtonLink href='/signup' className='w-full bg-white-025 mt-6 bg-primary text-white'>Sign up</ButtonLink>
        </div>
        <p className='border-t-2 mt-12 pt-4 border-vicm-green-500 text-center'>
            Powered by VicMove
        </p>
    </BackgroundContainer>
)

export default WelcomePage
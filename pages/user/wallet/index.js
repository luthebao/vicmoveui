import { useSession } from "next-auth/react";
import HeaderUser from "../../../containers/header/headeruser";
import SectionContainer from "../../../containers/section/section";
import LoadingContainer from "../../../containers/loading";
import WelcomePage from "../../welcome";
import BoxCard from "../../../components/card/box";
import ButtonLink from "../../../components/button/btnlink";
import ButtonDefault from "../../../components/button/default";
import { FiPlus } from 'react-icons/fi';
import VicmCheckbox from "../../../components/button/checkbox";
import LayoutMenu from "../../../layouts/layoutmenu";
import HeaderBack from "../../../containers/header/headerback";


function WalletIndex() {
    const { data: session, status } = useSession()


    if (status === "loading")
        return <LoadingContainer />

    if (session)
        return (
            <LayoutMenu active={"profile"}>
                <HeaderBack title="Wallet" />
                <SectionContainer type='full'>
                    <div className='p-4'>
                        <BoxCard className='flex flex-col justify-between m-4 mb-8'>
                            <div className='flex justify-between'>
                                <div>
                                    <div className='text-xs'>TOTAL BALANCE</div>
                                    <div className='text-3xl text-black'>100,000</div>
                                </div>
                                <div className='flex items-center'>
                                    <ButtonLink className='nowrap bg-primary drop-shadow-xl whitespace-nowrap' size='sm' shapes='circle'>
                                        <FiPlus className='text-white' />
                                    </ButtonLink>
                                </div>
                            </div>
                        </BoxCard>
                        <ButtonDefault className='bg-primary mb-4 basis-full w-full'>Transfer</ButtonDefault>
                    </div>
                </SectionContainer>
                <SectionContainer className='mt-2 basis-full'>
                    <div className='p-4 flex flex-col'>
                        <a className='text-vicm-green-500 underline mb-4 block'>Transactions</a>
                        <BoxCard className='flex flex-col basis-full justify-between'>
                            <div>
                                <div className='flex justify-between'>
                                    <div className=''>
                                        <VicmCheckbox />
                                    </div>
                                    <div className='grow ml-4 flex items-end'>
                                        <div>
                                            <label>Send to: </label><span className='text-vicm-green-500'>0x124..abc</span>
                                            <br />
                                            <label className='text-xl'>900</label>
                                        </div>
                                        <div>Pending...</div>
                                    </div>
                                </div>
                                <hr className='ml-14 mt-2 mb-4' />
                            </div>
                            <div>
                                <div className='flex justify-between'>
                                    <div className=''>
                                        <VicmCheckbox />
                                    </div>
                                    <div className='grow ml-4 flex items-end'>
                                        <div>
                                            <label>Deposit to: </label><span className='text-vicm-green-500'>User02</span>
                                            <br />
                                            <label className='text-xl'>150</label>
                                        </div>
                                        <div>02/04/2022</div>
                                    </div>
                                </div>
                                <hr className='ml-14 mt-2 mb-4' />
                            </div>
                        </BoxCard>
                    </div>
                </SectionContainer>
            </LayoutMenu>
        )

    return <WelcomePage />
}

export default WalletIndex;

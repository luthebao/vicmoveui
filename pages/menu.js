import React from "react"
import BoxCard from "../components/card/box"
import TextHeader from "../components/text/textheader"
import BackgroundContainer from '../containers/background/backgroundcontainer'
import HeaderBack from '../containers/header/headerback'
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import Link from "next/link"

const MenuExpand = () => {

    return (
        <BackgroundContainer type='gradient'>
            <HeaderBack title=" " />
            <TextHeader size='md-left' className='drop-shadow text-white'>Every Things <br /> You Need To Know</TextHeader>
            <div className='bg-white opacity-50 h-2 w-8 mt-4'></div>
            <BoxCard className='mt-12 bg-vicm-green-300'>

                <div>
                    <div className='flex justify-between items-center drop-shadow'>
                        <div className='rounded-full p-1 border-2 border-whiteTransparent-25 bg-whiteTransparent-25'>
                            <img src={"/images/icons/how-to.svg"} />
                        </div>
                        <div className='grow ml-4'>
                            <div className='text-xl text-white'>How to play?</div>
                        </div>
                        <FiChevronRight className='text-2xl' />
                    </div>
                </div>

            </BoxCard>
            <BoxCard className='mt-4 mb-6 bg-vicm-green-300'>
                <Link href={"https://whitepaper.vicmove.com/"}>
                    <a target={"_blank"} rel="noreferrer">
                        <div>
                            <div className='flex justify-between items-center drop-shadow'>
                                <div className='rounded-full p-1 border-2 border-whiteTransparent-25 bg-whiteTransparent-25'>
                                    <img src={"/images/icons/WP.svg"} />
                                </div>
                                <div className='grow ml-4'>
                                    <div className='text-xl text-white'>WhitePaper</div>
                                </div>
                                <FiChevronRight className='text-2xl' />
                            </div>
                        </div>
                    </a>
                </Link>
            </BoxCard>
        </BackgroundContainer>
    )
}

export default MenuExpand
import MainLayout from "../layouts/layoutmain";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import Link from "next/link";

export default function Home() {
    return (
        <MainLayout>
            <div className="account-info">
                <div className="account-info__title">TOTAL BALANCE</div>
                <div className="account-info__total">VMT 1,000.00</div>
                {/* <div className="account-info__stats"><span className="plus">+$235</span> | <span className="plus">+12%</span></div> */}
                <svg className="account-info__svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="none">
                    <path d="M0,0 Q50,201 100,0 L100,100 0,100 Z" fill="#0f0638" />
                </svg>
            </div>
            <div className="account-buttons">
                <Link href={"/buy"}>
                <a>
                    <img src="/images/icons/bottom.svg" alt="" title="" />
                    <span>BUY</span>
                </a>
                </Link>
                <a ahref="sell.html">
                    <img src="/images/icons/top.svg" alt="" title="" />
                    <span>Market</span>
                </a>
                <a ahref="transfer.html">
                    <img src="/images/icons/swap.svg" alt="" title="" />
                    <span>SWAP</span>
                </a>
            </div>

            <div className="page-inner">
                <div className="page__title-bar">
                    <h3>My NFT</h3>

                    <div className="page__title-right">
                        <div className="swiper-button-prev slider-portfolio__prev"></div>
                        <div className="swiper-button-next slider-portfolio__next"></div>
                    </div>
                </div>

                <Swiper
                    spaceBetween={15}
                    slidesPerView={2}
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}
                    className="swiper-container slider-portfolio slider-portfolio--round-corners slider-init mb-40"
                >
                    <SwiperSlide>
                        <div className="slider-portfolio__caption caption">
                            <div className="caption__content">
                                <a>
                                    <h2 className="caption__title">
                                        #123456
                                    </h2>
                                    <div className="caption__chart">
                                        <img src="/images/s/00.png" />
                                    </div>
                                    <div className="caption__info"><b>2.5 MVT</b> <b>$41,904</b></div>
                                    <div className="caption__info"><strong>$104,750</strong> <span className="plus">12%</span></div>
                                </a>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="slider-portfolio__caption caption">
                            <div className="caption__content">
                                <a>
                                    <h2 className="caption__title">
                                        #123457
                                    </h2>
                                    <div className="caption__chart">
                                        <img src="/images/s/00.png" />
                                    </div>
                                    <div className="caption__info"><b>3.5 MVT</b> <b>$41,904</b></div>
                                    <div className="caption__info"><strong>$104,750</strong> <span className="plus">12%</span></div>
                                </a>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="slider-portfolio__caption caption">
                            <div className="caption__content">
                                <a>
                                    <h2 className="caption__title">
                                        #123458
                                    </h2>
                                    <div className="caption__chart">
                                        <img src="/images/s/00.png" />
                                    </div>
                                    <div className="caption__info"><b>4.5 MVT</b> <b>$41,904</b></div>
                                    <div className="caption__info"><strong>$104,750</strong> <span className="plus">12%</span></div>
                                </a>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>


                <div className="page__title-bar">
                    <h3>Running</h3>
                    <div className="page__title-right">
                        <a className="button button--main button--ex-small">VIEW ALL</a>
                    </div>
                </div>

                

                <div className="w-100 text-center"><a>View all history running</a></div>

                <div className="page__title-bar mt-40">
                    <h3>Crypto News</h3>

                    <div className="page__title-right">
                        <div className="swiper-button-prev slider-cover__prev"></div>
                        <div className="swiper-button-next slider-cover__next"></div>
                    </div>
                </div>



            </div>
        </MainLayout>
    )
}
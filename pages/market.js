import React, { useState } from "react"
import MainLayout from "../layouts/layoutmain"

export default function MarketPage() {
    const [count, setCount] = useState(1)

    return (
        <MainLayout type={2}>
            <h2 className="page__title">Market</h2>
            <div className="flex flex-wrap">
                {
                    Array(15).fill(0).map((val, index) => (
                        <div className="w-1/2 p-2">
                            <div className="fieldset">
                                <div className="slider-portfolio__caption caption">
                                    <div className="caption__content">
                                        <h2 className="caption__title">
                                            #123456
                                        </h2>
                                        <div className="caption__chart">
                                            <img src="/images/s/00.png" />
                                        </div>
                                        <div className="caption__info flex justify-between">
                                            <div>2.5 MVT</div>
                                            <b>$41,904</b>
                                        </div>
                                        <div className="caption__info flex justify-between">
                                            <strong>$104,750</strong>
                                            <span className="plus">12%</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>

        </MainLayout>
    )
}
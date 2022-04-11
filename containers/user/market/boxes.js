import { toast } from "react-toastify";
import ItemCardBag from "../../../components/card/itembag";
import ItemCardMarket from "../../../components/card/market/itemmarket";


export default function BoxesListMarket(props) {

    return (
        <div className="flex flex-wrap">
            <div className="p-1 w-1/2 lg:w-1/3 xl:w-1/4">
                <div className="min-h-[150px] border-[2px] border-vicm-green-600 rounded-4xl flex flex-col p-2">
                    <div className="mx-auto mt-4 relative">
                        <img className="relative w-full m-auto" src="/images/bg/bg-item.svg" />
                        <img className="absolute top-0 w-full h-auto" src={"/images/box/walking.png"} />
                    </div>
                    <div className="mx-auto my-4">
                        <div className="rounded-4xl">
                            <p className="text-vicm-gray-100 text-xs px-4 py-1">Walking</p>
                        </div>
                    </div>
                    <div className="flex flex-wrap justify-between sm:justify-around">
                        <button className='bg-vicm-green-600 text-white rounded-full py-[5px] px-[19px] text-xs sm:text-base' onClick={() => toast("Comming soon...")}>BUY</button>
                        <div className='text-vicm-yellow-100 my-auto text-base'>
                            1 BNB
                        </div>
                    </div>
                </div>
            </div>
            <div className="p-1 w-1/2 lg:w-1/3 xl:w-1/4">
                <div className="min-h-[150px] border-[2px] border-vicm-green-600 rounded-4xl flex flex-col p-2">
                    <div className="mx-auto mt-4 relative">
                        <img className="relative w-full m-auto" src="/images/bg/bg-item.svg" />
                        <img className="absolute top-0 w-full h-auto" src={"/images/box/running.png"} />
                    </div>
                    <div className="mx-auto my-4">
                        <div className="rounded-4xl">
                            <p className="text-vicm-gray-100 text-xs px-4 py-1">Running</p>
                        </div>
                    </div>
                    <div className="flex flex-wrap justify-between sm:justify-around">
                        <button className='bg-vicm-green-600 text-white rounded-full py-[5px] px-[19px] text-xs sm:text-base' onClick={() => toast("Comming soon...")}>BUY</button>
                        <div className='text-vicm-yellow-100 my-auto text-base'>
                            1 BNB
                        </div>
                    </div>
                </div>
            </div>
            <div className="p-1 w-1/2 lg:w-1/3 xl:w-1/4">
                <div className="min-h-[150px] border-[2px] border-vicm-green-600 rounded-4xl flex flex-col p-2">
                    <div className="mx-auto mt-4 relative">
                        <img className="relative w-full m-auto" src="/images/bg/bg-item.svg" />
                        <img className="absolute top-0 w-full h-auto" src={"/images/box/cycling.png"} />
                    </div>
                    <div className="mx-auto my-4">
                        <div className="rounded-4xl">
                            <p className="text-vicm-gray-100 text-xs px-4 py-1">Cycling</p>
                        </div>
                    </div>
                    <div className="flex flex-wrap justify-between sm:justify-around">
                        <button className='bg-vicm-green-600 text-white rounded-full py-[5px] px-[19px] text-xs sm:text-base' onClick={() => toast("Comming soon...")}>BUY</button>
                        <div className='text-vicm-yellow-100 my-auto text-base'>
                            2 BNB
                        </div>
                    </div>
                </div>
            </div>
            <div className="p-1 w-1/2 lg:w-1/3 xl:w-1/4">
                <div className="min-h-[150px] border-[2px] border-vicm-green-600 rounded-4xl flex flex-col p-2">
                    <div className="mx-auto mt-4 relative">
                        <img className="relative w-full m-auto" src="/images/bg/bg-item.svg" />
                        <img className="absolute top-0 w-full h-auto" src={"/images/box/versatile.png"} />
                    </div>
                    <div className="mx-auto my-4">
                        <div className="rounded-4xl">
                            <p className="text-vicm-gray-100 text-xs px-4 py-1">Versatile</p>
                        </div>
                    </div>
                    <div className="flex flex-wrap justify-between sm:justify-around">
                        <button className='bg-vicm-green-600 text-white rounded-full py-[5px] px-[19px] text-xs sm:text-base' onClick={() => toast("Comming soon...")}>BUY</button>
                        <div className='text-vicm-yellow-100 my-auto text-base'>
                            1 BNB
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
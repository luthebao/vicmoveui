import Link from "next/link";
import { toast } from "react-toastify";
import ItemCardMarket from "../../../components/card/market/itemmarket";
import { shoes_data } from "../../../utils/data"
import WalletConnectProvider from "@walletconnect/web3-provider";
import Web3 from "web3";

export default function SneakersListMarket(props) {

    const handleBuy = async () => {
        //  Create WalletConnect Provider
        try {
            const provider = new WalletConnectProvider({
                infuraId: "27e484dcd9e3efcfd25a83a78777cdf1",
            });
            //  Enable session (triggers QR Code modal)
            await provider.enable();
            const web3 = new Web3(provider);
            const signedMessage = await web3.eth.sign("msg");
            toast(signedMessage)
        } catch {
            toast("Updating")
        }
    }

    return (
        <div className="flex flex-wrap">
            {shoes_data.filter(val => val.type === "shoes").map(val => (
                <div className="p-[2px] w-1/2 lg:w-1/3 xl:w-1/4" key={`market-${val.type}-${val.id}`}>
                    <div className="min-h-[150px] border-[2px] border-vicm-green-600 rounded-4xl flex flex-col p-2">
                        <div className="flex flex-wrap justify-between">
                            <div className="bg-vicm-green-600 text-white rounded-xl p-1 flex h-[24px] md:h-[34px]">
                                <img className="mr-1 my-auto h-full" src="/images/icons/tag.png" />
                                <p className="my-auto text-xs md:text-base">#{val.id}</p>
                            </div>
                            <div className="bg-vicm-green-600 text-white rounded-xl p-1 flex h-[24px] md:h-[34px]">
                                <p className="my-auto text-xs capitalize">Level {val.level}</p>
                            </div>
                        </div>
                        <Link href={`/user/market/detail/${val.id}`}>
                            <div className="mx-auto mt-4 relative">
                                <img className="relative w-full m-auto" src="/images/bg/bg-item.svg" />
                                <img className="absolute top-0 w-full h-auto" src={`/images/s/${val.pic}.png`} />
                            </div>
                        </Link>
                        <div className="mx-auto my-4">
                            <div className="bg-vicm-green-90 rounded-4xl">
                                <p className="text-vicm-violet-100 text-xs px-4 py-1 capitalize">{val.style}</p>
                            </div>
                        </div>
                        <div className="flex flex-wrap justify-between sm:justify-around">
                            <button className='bg-vicm-green-600 text-white rounded-full py-[5px] px-[19px] text-xs sm:text-base' onClick={() => {
                                toast("Comming soon...")
                                // handleBuy()
                            }}>BUY</button>
                            <div className='text-vicm-yellow-100 my-auto text-base'>
                                1 BNB
                            </div>
                        </div>
                    </div>
                </div>
            ))}

            <div className="p-[2px] w-1/2 lg:w-1/3 xl:w-1/4" key={`market-ssss-001`}>
                <div className="min-h-[150px] border-[2px] border-vicm-green-600 rounded-4xl flex flex-col p-2">
                    <div className="flex flex-wrap justify-between">
                        <div className="bg-vicm-green-600 text-white rounded-xl p-1 flex h-[24px] md:h-[34px]">
                            <img className="mr-1 my-auto h-full" src="/images/icons/tag.png" />
                            <p className="my-auto text-xs md:text-base">#00000021</p>
                        </div>
                        <div className="bg-vicm-green-600 text-white rounded-xl p-1 flex h-[24px] md:h-[34px]">
                            <p className="my-auto text-xs capitalize">Level 10</p>
                        </div>
                    </div>

                    <div className="mx-auto mt-4 relative">
                        <img className="relative w-full m-auto" src="/images/bg/bg-item.svg" />
                        <img className="absolute top-0 w-full h-auto" src={`/images/s/NFT12.png`} />
                    </div>
                    <div className="mx-auto my-4">
                        <div className="bg-vicm-green-90 rounded-4xl">
                            <p className="text-vicm-violet-100 text-xs px-4 py-1 capitalize">walking</p>
                        </div>
                    </div>
                    <div className="flex flex-wrap justify-between sm:justify-around">
                        <button className='bg-vicm-green-600 text-white rounded-full py-[5px] px-[19px] text-xs sm:text-base' onClick={() => {
                            //toast("Comming soon...")
                            handleBuy()
                        }}>BUY</button>
                        <div className='text-vicm-yellow-100 my-auto text-base'>
                            1 BNB
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
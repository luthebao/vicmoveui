import { gql, useQuery } from "@apollo/client";
import { toast } from "react-toastify";
import Web3 from "web3";
import { providers, utils } from "ethers";
import { useWeb3React } from "@web3-react/core"
import { injected } from "../../../components/wallet/connectors";
import { bsc_chain, store } from "../../../utils/config";
import { useState } from "react";
import { Backdrop, CircularProgress } from "@mui/material";
import { useSelector } from "react-redux";

export default function BoxesListMarket({ session }) {
    const [buying, setBuying] = useState(false)
    const makeweb3 = useWeb3React()
    const { pages } = useSelector(state => state)

    const { data, loading } = useQuery(gql`
    query Config {
        config {
            box0price
            box1price
            box2price
            box3price
        }
    }`)

    const handleBuyBox = async (type) => {
        if (pages.detail === null)
            return

        if (!makeweb3.active) {
            try {
                await makeweb3.activate(injected)
            } catch (error) {
                return
            }

        } else {
            const provider = await makeweb3.connector.getProvider()
            const web3Provider = new providers.Web3Provider(provider);
            const signer = web3Provider.getSigner()
            const my_address = await signer.getAddress()
            if (my_address.toLowerCase() !== pages.detail.accountdetail.address.toLowerCase()) {
                toast("Please connect to wallet you have connected to this account")
                makeweb3.deactivate()
                return
            }
            setBuying(true)
            signer.sendTransaction({
                to: "0x042d8008b651f4abd7f4a236c0f4d5529c97bfed",
                value: utils.parseUnits((type === 0 ? data.config.box0price : type === 1 ? data.config.box1price : 0).toString(), "ether").toHexString(),
                from: my_address
            }).then(async (e) => {
                try {
                    const receipt = await e.wait()
                    const fet_bb = await fetch("/api/user/buybox", {
                        headers: {
                            'Accept': 'application/json',
                            'Content-Type': 'application/json',
                            'token': session.token
                        },
                        method: "POST",
                        body: JSON.stringify({
                            type,
                            hash: receipt.transactionHash
                        })
                    })
                    const res_bb = await fet_bb.json()
                    if (res_bb.code === 1) {
                        toast("Buy successed ! Check your storage to open and get sneakers")
                    } else {
                        toast(res_bb.data.message)
                    }
                } catch (error) {
                    toast("Request failed, please contact with admin")
                }
                setBuying(false)
            }).catch(() => {
                setBuying(false)
                toast("Transaction ended")
            })
        }
    }

    return (
        <div className="flex flex-wrap">
            <div className="p-[2px] w-1/2 lg:w-1/3 xl:w-1/4">
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
                        <button className='bg-vicm-green-600 text-white rounded-full py-[5px] px-[19px] text-xs sm:text-base' onClick={() => handleBuyBox(0)}>BUY</button>
                        <div className='text-vicm-yellow-100 my-auto text-base'>
                            {data && data.config.box0price} BNB
                        </div>
                    </div>
                </div>
            </div>
            <div className="p-[2px] w-1/2 lg:w-1/3 xl:w-1/4">
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
                        <button className='bg-vicm-green-600 text-white rounded-full py-[5px] px-[19px] text-xs sm:text-base' onClick={() => handleBuyBox(1)}>BUY</button>
                        <div className='text-vicm-yellow-100 my-auto text-base'>
                            {data && data.config.box1price} BNB
                        </div>
                    </div>
                </div>
            </div>
            <div className="p-[2px] w-1/2 lg:w-1/3 xl:w-1/4">
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
                            {data && data.config.box2price} BNB
                        </div>
                    </div>
                </div>
            </div>
            <div className="p-[2px] w-1/2 lg:w-1/3 xl:w-1/4">
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
                            {data && data.config.box3price} BNB
                        </div>
                    </div>
                </div>
            </div>
            <Backdrop open={buying}>
                <div className='flex justify-center m-auto flex-col'>
                    <p className="text-white font-bold w-2/3 m-auto text-center">Please do not refresh this page while transaction is processing</p>
                    <CircularProgress className="m-auto text-white" color="inherit" />
                </div>
            </Backdrop>
        </div>
    )
}
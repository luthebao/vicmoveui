import Link from 'next/link';
import PropTypes from 'prop-types';
import WalletConnectProvider from "@walletconnect/web3-provider";
import Web3 from "web3";


const ItemCardMarket = ({ type }) => {

    const handleBuy = async () => {
        try {
            const provider = await new WalletConnectProvider({
                rpc: {
                    56: "https://bsc-dataseed1.binance.org",
                },
                chainId: 56,
            });
            await provider.enable();
            const web3 = new Web3(provider)
            const accounts = await web3.eth.getAccounts();
            console.log(accounts)
            // await provider.disconnect()
            const txhas = await web3.eth.sendTransaction({
                from: accounts[0],
                to: "0xd6E6F8997b4b725bbc73AE1f2Da2085890C8293b",
                value: web3.utils.toWei((0.001).toString().slice(0, 16)),
                gas: 57000,
                gasPrice: 30100000000
            })
            await provider.disconnect()
        }
        catch (err) {
            console.log("1", err)
        }
    }

    return (
        <div className="p-1 w-1/2 lg:w-1/3 xl:w-1/4">
            <div className="min-h-[150px] border-[2px] border-vicm-green-600 rounded-4xl flex flex-col p-2">
                {type === "shoes" && <div className="flex flex-wrap justify-between">
                    <div className="bg-vicm-green-600 text-white rounded-xl p-1 flex h-[24px] md:h-[34px]">
                        <img className="mr-1 my-auto h-full" src="/images/icons/tag.png" />
                        <p className="my-auto text-xs md:text-base">#12345678</p>
                    </div>
                    <div className="bg-vicm-green-600 text-white rounded-xl p-1 flex h-[24px] md:h-[34px]">
                        <p className="my-auto text-xs">Level 10</p>
                    </div>
                </div>}
                <Link href={"/user/bag/sneaker/12345678/sell"}>
                    <div className="mx-auto mt-4 relative">
                        <img className="relative w-full m-auto" src="/images/bg/bg-item.svg" />
                        <img className="absolute top-0 w-full h-auto" src={type === "shoes" ? "/images/s/NFT1.png" : type === "box" ? "/images/box/walking.png" : "/images/gem/stamina.svg"} />
                    </div>
                </Link>
                <div className="mx-auto my-4">
                    {type === "shoes" && <div className="bg-vicm-green-90 rounded-4xl">
                        <p className="text-vicm-violet-100 text-xs px-4 py-1">Walking</p>
                    </div>}
                    {type === "gem" && <div className="rounded-4xl">
                        <p className="text-vicm-gray-100 text-xs px-4 py-1">Comfort +1</p>
                    </div>}
                </div>
                <div className="flex flex-wrap justify-between sm:justify-around">
                    <button className='bg-vicm-green-600 text-white rounded-full py-[5px] px-[19px] text-xs sm:text-base' onClick={handleBuy}>BUY</button>
                    <div className='text-vicm-yellow-100 my-auto text-base'>
                        0.001 BNB
                    </div>
                </div>
            </div>
        </div>
    );
}

ItemCardMarket.propTypes = {
    type: PropTypes.string,
};

ItemCardMarket.defaultProps = {
    type: "shoes",
}


export default ItemCardMarket;

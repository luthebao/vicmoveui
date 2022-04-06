import Link from "next/link";
import React, { useState } from "react"
import MainLayout from "../layouts/layoutmain";
import WalletConnectProvider from "@walletconnect/web3-provider";
import Web3 from "web3";

export default function BuyPage() {
    const [count, setCount] = useState(1)

    const handleBuyBox = async () => {
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
                value: web3.utils.toWei((count * 0.001).toString().slice(0, 16)),
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
        <MainLayout type={2}>

            <h2 className="page__title">Buy</h2>
            <div className="fieldset">
                <div className="form">
                    <form id="Form" onSubmit={(e) => {
                        e.preventDefault();
                        handleBuyBox()
                    }}>
                        <div className="form__row">
                            <img src="/images/box/00.png" />
                        </div>
                        <div className="form__row d-flex align-items-center justify-space">
                            Count<input value={count} onChange={(e) => setCount(e.target.value)} type="number" name="count" className="form__input form__input--23" step={1} min={1} max={99} />

                        </div>

                        <div className="form__coin-total">
                            <div className="form__coin-icon">{count * 0.001}<img src="/images/logos/binance.png" alt="" className="ml-5" /><span>BNB</span></div>
                        </div>
                        <button className="button button--full button--main open-popup mt-5" type="submit">BUY</button>
                    </form>
                </div>
            </div>
        </MainLayout>
    )
}
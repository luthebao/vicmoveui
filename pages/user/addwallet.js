import HeaderBack from '../../containers/header/headerback'
import LayoutMenu from '../../layouts/layoutmenu'
import { FiKey } from 'react-icons/fi';
import { useSession, signOut } from "next-auth/react"
import LoadingContainer from '../../containers/loading';
import WelcomePage from '../welcome';
import { providers } from "ethers";
import { useWeb3React } from "@web3-react/core"
import { injected } from "../../components/wallet/connectors";
import { urls } from '../../utils/config';
import { useDispatch, useSelector } from 'react-redux';
import { handleGetDetail } from '../../store/actions/pages';
import { useRouter } from 'next/router';
import { toast } from 'react-toastify';

const toHex = (num) => {
    const val = Number(num);
    return "0x" + val.toString(16);
};

const AddWallet = () => {
    const router = useRouter()
    const makeweb3 = useWeb3React()
    const { data: session, status } = useSession()
    const dispatch = useDispatch()
    const { pages } = useSelector(state => state)

    const switchNetwork = async () => {
        try {
            await makeweb3.library.provider.request({
                method: "wallet_switchEthereumChain",
                params: [{ chainId: toHex(96) }]
            });
        } catch (switchError) {
            if (switchError.code === 4902) {
                try {
                    await makeweb3.library.provider.request({
                        method: "wallet_addEthereumChain",
                        params: [networkParams[toHex(96)]]
                    });
                } catch (error) {
                    console.log(error);
                }
            }
        }
    };

    const handleConnectWallet = async () => {
        if (typeof makeweb3.connector === "undefined") {
            await makeweb3.activate(injected)
        }
        else {
            await switchNetwork()
            const provider = await makeweb3.connector.getProvider()
            const web3Provider = new providers.Web3Provider(provider);
            const signer = web3Provider.getSigner()
            await signer.signMessage(`Connect wallet`)
            try {
                const fet_add = await fetch("/api/user/addwallet", {
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json',
                        'token': session.token,
                    },
                    method: "POST",
                    body: JSON.stringify({ "address": await signer.getAddress() })
                })
                const fet_res = await fet_add.json()
                dispatch(handleGetDetail(pages.detail.accountdetail.id))
                document.location = "/"
            } catch {
                toast("Cannot connect this address")
            }
        }
    }

    if (status === "loading")
        return <LoadingContainer />
    if (session)
        return (
            <LayoutMenu active="profile" session={session}>
                <HeaderBack title='Connect wallet' />
                <div className='flex flex-col items-center mb-12'>
                    <p className='text-center text-black'>One account can connect to only one crypto address</p>

                    <div className='mt-6 text-center'>
                        <div className='flex'>
                            <button className='mx-2 inline-block items-center bg-primary mt-4 text-white px-5 rounded-xl px-2 py-2 shadow-2xl uppercase btn hover:opacity-90' onClick={handleConnectWallet} >
                                <FiKey className='text-2xl pb-1 inline' />&nbsp;Connect
                            </button>
                        </div>
                    </div>
                </div>
            </LayoutMenu>
        )
    return <WelcomePage />
}


export default AddWallet

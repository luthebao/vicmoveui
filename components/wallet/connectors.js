import { WalletConnectConnector } from "@web3-react/walletconnect-connector"
import { bsc_chain, bsc_chain_test } from "../../utils/config"

export const injected = new WalletConnectConnector({
    rpc: {
        97: bsc_chain_test.rpc_url
    },
    chainId: 97,
    supportedChainIds: [97]
})

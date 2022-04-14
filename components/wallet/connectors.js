import { WalletConnectConnector } from "@web3-react/walletconnect-connector"

export const injected = new WalletConnectConnector({
    rpc: {
        56: 'https://bsc-dataseed1.binance.org/'
    },
    chainId: 56,
})

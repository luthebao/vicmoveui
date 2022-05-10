export const production = true

export const urls = {
    "uri": production ? "https://app.vicmove.io/" : "http://localhost:3000/",
    "api": production ? "http://10.201.0.199" : "https://testapi.vicmove.com"
}

export const apis = {
    "account_sign_up": urls.api + "/api/Account/signup",
    "account_sign_in": urls.api + "/api/Account/signin",
    "account_sign_in_google": urls.api + "/api/Account/signinwithgoogle",
    "account_sign_in_apple": urls.api + "/api/Account/signinwithapple",

    "account_set_wallet": urls.api + "/api/Account/setWalletAddress",
    "account_get_info": urls.api + "/api/Account/getInfo",
    "market_buybox": urls.api + "/api/Market/buyBox",
    "market_unbox": urls.api + "/api/Market/unbox",
    "market_deposit_vim": urls.api + "/api/Market/depositVIM",
    "market_withdraw_vim": urls.api + "/api/WithdrawRequest/createRequest",
    "market_coundown": urls.api + "/api/Market/countDownBox",

    "item_repair_comfort": urls.api + "/api/Shoes/buybackComfort",
    "item_repair_stamina": urls.api + "/api/Shoes/buybackStamina",
    "item_upgrade_level": urls.api + "/api/Shoes/upgradeShoes",

    "fake": urls.api + "/",
}

export const bsc_chain = {
    "rpc_url": "https://bsc-dataseed.binance.org/",
    "chainId": "0x38",
    "chainName": 'Smart Chain',
    "nativeCurrency": {
        "name": 'BNB',
        "symbol": 'BNB',
        "decimals": 18
    },
    "blockExplorerUrl": "https://bscscan.com/"
}

export const bsc_chain_test = {
    "rpc_url": "https://data-seed-prebsc-1-s1.binance.org:8545/",
    "chainId": "0x61",
    "chainName": 'Smart Chain Test',
    "nativeCurrency": {
        "name": 'BNB',
        "symbol": 'BNB',
        "decimals": 18
    },
    "blockExplorerUrl": "https://testnet.bscscan.com/"
}

export const bsc_network = {
    chainId: "0x38",
    rpcUrls: ["https://bsc-dataseed.binance.org/"],
    chainName: "Binance Smart Chain",
    nativeCurrency: { name: "BNB", decimals: 18, symbol: "BNB" },
    blockExplorerUrls: ["https://bscscan.com/"],
    iconUrls: ["https://s2.coinmarketcap.com/static/img/coins/64x64/1839.png"]
}

export const max_width = ''


export const contract = {
    'vim': '0x5bcd91C734d665Fe426A5D7156f2aD7d37b76e30',
}

export const store = {
    'bsc': '0x042D8008B651f4ABD7F4A236C0F4d5529c97Bfed',
    'shop': '0x042D8008B651f4ABD7F4A236C0F4d5529c97Bfed',
    'vim_receive': '0x5Afd603D7a1b1A0B19f54207329a6e053f9D5E02',
}

export const pages = {
    "bag": "bag",
    "store": "store",
}

export const item_type = {
    "shoes": {
        "name": "shoes",
    },
    "box": {
        "name": "box",
        "img": [
            {
                "walking": "/images/box/walking.png",
                "cycling": "/images/box/cycling.png",
                "versatile": "/images/box/versatile.png",
                "cycling": "/images/box/cycling.png",
            }
        ],
    },
    "gem": {
        "name": "gem",
        "img": [
            {
                "stone": "/images/gem/stone.png",
                "jewel": "/images/gem/jewel.png",
                "diamond": "/images/gem/diamond.png",
            }
        ]
    }
}

export const abi = [
    {
        "inputs": [],
        "stateMutability": "nonpayable",
        "type": "constructor"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "address",
                "name": "owner",
                "type": "address"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "spender",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "value",
                "type": "uint256"
            }
        ],
        "name": "Approval",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "address",
                "name": "previousOwner",
                "type": "address"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "newOwner",
                "type": "address"
            }
        ],
        "name": "OwnershipTransferred",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [],
        "name": "Pause",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "address",
                "name": "from",
                "type": "address"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "to",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "value",
                "type": "uint256"
            }
        ],
        "name": "Transfer",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [],
        "name": "Unpause",
        "type": "event"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "owner",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "spender",
                "type": "address"
            }
        ],
        "name": "allowance",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "spender",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "amount",
                "type": "uint256"
            }
        ],
        "name": "approve",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "account",
                "type": "address"
            }
        ],
        "name": "balanceOf",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "amount",
                "type": "uint256"
            }
        ],
        "name": "burn",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "decimals",
        "outputs": [
            {
                "internalType": "uint8",
                "name": "",
                "type": "uint8"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "spender",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "subtractedValue",
                "type": "uint256"
            }
        ],
        "name": "decreaseAllowance",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "spender",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "addedValue",
                "type": "uint256"
            }
        ],
        "name": "increaseAllowance",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "isOwner",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "name",
        "outputs": [
            {
                "internalType": "string",
                "name": "",
                "type": "string"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "owner",
        "outputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "pause",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "paused",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "renounceOwnership",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "symbol",
        "outputs": [
            {
                "internalType": "string",
                "name": "",
                "type": "string"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "totalSupply",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "recipient",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "amount",
                "type": "uint256"
            }
        ],
        "name": "transfer",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "sender",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "recipient",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "amount",
                "type": "uint256"
            }
        ],
        "name": "transferFrom",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "newOwner",
                "type": "address"
            }
        ],
        "name": "transferOwnership",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "unpause",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "stateMutability": "nonpayable",
        "type": "function"
    }
]
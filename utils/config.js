export const production = true

export const urls = {
    "uri": production ? "https://app.vicmove.com/" : "http://localhost:3000/",
    "api": "https://api.vicmove.com",
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

export const max_width = ''


export const contract = {
    'vim': '0x5bcd91C734d665Fe426A5D7156f2aD7d37b76e30',
}

export const store = {
    'bsc': '0x042D8008B651f4ABD7F4A236C0F4d5529c97Bfed',
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
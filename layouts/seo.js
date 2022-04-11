import Head from "next/head";
import React from "react";


export default function SEOLayout({ children }) {

    return (
        <React.Fragment>
            <Head>
                <meta charSet="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
                <link rel="icon" type="image/png" href="/favicon/favicon-32x32.png" id="favicon" />
                <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-icon.png?v=8" />
                <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png?v=8" />
                <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png?v=8" />
                <link rel="manifest" href="/favicon/site.webmanifest" />

                {/* SEO tags */}
                <title>VICMOVE</title>
                <meta name="description" content="VICMOVE - The Best Move to Earn NFT Game" />
                <meta name="keywords" content="VICMOVE, VICMOVE app, VICMOVE earn, VICMOVE crypto, VICMOVE blockchain, VICMOVE cryptocurrency, VICMOVE token, VIC MOVE coin, VICMOVE game, VICMOVE crypto, VICMOVE blockchain, VICMOVE cryptocurrency, VICMOVE token, VICMOVE coin, VIC game, VIC crypto, VIC blockchain, VIC cryptocurrency, VIC token, VIC coin, Movetoearn Game, Movetoearn Gaming, Movetoearn Games, Movetoearn Blockchain, Movetoearn Crypto, Movetoearn Cryptocurrency, Movetoearn VR, Movetoearn Virtual Reality, Movetoearn MMORPG, Movetoearn Blockchain Game, Movetoearn Crypto Game, Movetoearn Cryptocurrency Game, Movetoearn VR Game, Movetoearn Virtual Reality Game, Movetoearn MMORPG Game, Movetoearn Blockchain Gaming, Movetoearn Crypto Gaming, Movetoearn Cryptocurrency Gaming, Movetoearn VR Gaming, Movetoearn Virtual Reality Gaming, Movetoearn MMORPG Gaming, Move2earn Gaming, Move2earn Games, Move2earn Blockchain, Move2earn Crypto, Move2earn Cryptocurrency, Move2earn VR, Move2earn Virtual Reality, Move2earn MMORPG, Move2earn Blockchain Game, Move2earn Crypto Game, Move2earn Cryptocurrency Game, Move2earn VR Game, Move2earn Virtual Reality Game, Move2earn MMORPG Game, Move2earn Blockchain Gaming, Move2earn Crypto Gaming, Move2earn Cryptocurrency Gaming, Move2earn VR Gaming, Move2earn Virtual Reality Gaming, Move2earn MMORPG Gaming, Blockchain Game, Crypto Game, Cryptocurrency Game, VR Game, Virtual Reality Game, MMORPG Game, VICMOVE Whitepaper, VIC MOVE Whitepaper, VICMOVE litepaper, VIC MOVE litepaper, VICMOVE Crypto Whitepaper, VIC MOVE Crypto Whitepaper, VICMOVE Crypto Litepaper, VIC MOVE Crypto Litepaper, Buy VIC, Buy VIC Crypto, Buy VIC Cryptocurrency, Buy VIC Token, Buy VIC Coin, Buy VIC MOVE, Buy VIC MOVE Crypto, Buy VIC MOVE Cryptocurrency, Buy VIC MOVE Token, Buy VIC MOVE Coin, Buy VICMOVE, Buy VICMOVE Crypto, Buy VICMOVE Cryptocurrency, Buy VICMOVE Token, Buy VICMOVE Coin, VIC Pancakeswap, VICMOVE Pancakeswap, VIC MOVE Pancakeswap, Buy VIC Pancakeswap, Buy VICMOVE Pancakeswap, Buy VIC MOVE Pancakeswap, VIC swap, VICMOVE swap, VIC MOVE swap, VIC Token swap, VICMOVE Token swap, VIC MOVE Token swap, VIC Crypto swap, VICMOVE Crypto swap, VIC MOVE Crypto swap, VIC Coin swap, VICMOVE Coin swap, VIC MOVE Coin swap" />
                <meta name="author" content="VICMOVE" />

                {/* open graph */}
                <meta property="og:title" content="Top Move To Earn NFT Game on BSC - VICMOVE" />
                <meta property="og:type" content="website" />
                <meta property="og:description" content="VICMOVE - The Best Move to Earn NFT Game" />
                <meta property="og:image" content="/images/facebook.png?v=8" />
                <meta property="og:url" content="https://vicmove.com" />
                <meta property="og:site_name" content="VICMOVE" />

                {/* twitter */}
                <meta name="twitter:card" content="summary" />
                <meta name="twitter:site" content="@VICMOVEOfficial" />
                <meta name="twitter:creator" content="@VICMOVEOfficial" />
                <meta name="twitter:title" content="VICMOVE - The Best Move to Earn NFT Game" />
                <meta name="twitter:description"
                    content="VICMOVE - The Best Move to Earn NFT Game" />
                <meta name="twitter:image" content="/images/twitter.png?v=8" />

            </Head>
            {children}
        </React.Fragment>
    )
}
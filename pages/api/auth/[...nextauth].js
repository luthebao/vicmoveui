const jwt = require('jsonwebtoken');
import { SignJWT } from "jose";
import { createPrivateKey } from "crypto";

import NextAuth from 'next-auth'
import CredentialProvider from "next-auth/providers/credentials"
import GoogleProvider from "next-auth/providers/google";
import AppleProvider from "next-auth/providers/apple";
import { apis } from '../../../utils/config';

export default async function auth(req, res) {
    const jwt_secret = "bao*&^234dep)@$38@6trai!#5@55@"

    const getAppleToken = async () => {
        const appleToken = await new SignJWT({})
            .setAudience("https://appleid.apple.com")
            .setIssuer("JY9S9877S5")
            .setIssuedAt(new Date().getTime() / 1000)
            .setExpirationTime(new Date().getTime() / 1000 + 3600 * 2)
            .setSubject("com.vicmove.siwa.sid")
            .setProtectedHeader({
                alg: "ES256",
                kid: "BV66G65YA7",
            })
            .sign(createPrivateKey("-----BEGIN PRIVATE KEY-----\nMIGTAgEAMBMGByqGSM49AgEGCCqGSM49AwEHBHkwdwIBAQQgI7mlZ52XKXPoohO6\nXCkzr8ecCV96yopNymDvaJeCDNmgCgYIKoZIzj0DAQehRANCAAReAaQpAk87um90\n8BqIRUSS9uUpbpx0TR7/nXNTSNapOtKQtiGklRKQcvuGd8guWsoiFe7xYTyiO3Xk\naNfPnA5m\n-----END PRIVATE KEY-----"));
        return appleToken;
    };

    return await NextAuth(req, res, {
        providers: [
            CredentialProvider({
                credentials: {
                    email: {
                        label: "Email",
                        type: "email",
                        placeholder: "email@domain.com",
                    },
                    password: {
                        label: "Password", type: "password"
                    },
                },
                authorize: async (credentials) => {
                    const fet_login = await fetch(apis.account_sign_in, {
                        headers: {
                            'Accept': 'application/json',
                            'Content-Type': 'application/json',
                        },
                        method: "POST",
                        body: JSON.stringify({
                            "email": credentials.email,
                            "password": credentials.password,
                        })
                    })
                    const res_login = await fet_login.json()
                    // database look up
                    if (res_login.code === 1 && res_login.data) {
                        return {
                            id: res_login.data.id,
                            name: res_login.data.accInfo.name,
                            email: res_login.data.accInfo.email,
                        };
                    }

                    // login failed
                    return null;
                },
            }),
            GoogleProvider({
                clientId: '319536246246-3gjsfi0ubmsa0fl8o744907ip2a9ttr1.apps.googleusercontent.com',
                clientSecret: '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',
                authorization: {
                    params: {
                        prompt: "consent",
                        access_type: "offline",
                        response_type: "code"
                    }
                }
            }),
            AppleProvider({
                clientId: "com.vicmove.siwa.sid",
                clientSecret: await getAppleToken(),
            })
        ],
        secret: jwt_secret,
        jwt: {
            secret: jwt_secret,
            encryption: true,
            encode: async ({ secret, token }) => {
                return jwt.sign(token, secret, { algorithm: 'HS256' });
            },
            decode: async ({ secret, token }) => {
                return jwt.verify(token, secret, { algorithms: ['HS256'] });
            },
        },
        session: {
            jwt: true,
            strategy: "jwt",
            maxAge: 30 * 24 * 60 * 60, // 30 days
            updateAge: 24 * 60 * 60, // 24 hours
        },
        pages: {
            signIn: '/login',
            signOut: '/',
        },
        callbacks: {
            jwt: async ({ token, user }) => {
                // first time jwt callback is run, user object is available
                if (user) {
                    token.id = user.id;
                }

                return Promise.resolve(token);
            },
            session: async ({ session, token }) => {
                if (token) {
                    session.id = token.id;
                    session.token = jwt.sign(token, jwt_secret, { algorithm: 'HS256' });

                }
                return Promise.resolve(session);
            },
            async signIn({ account, profile, user }) {
                if (account.provider === "google") {
                    try {
                        const token = jwt.sign(user, jwt_secret, { algorithm: 'HS256' });
                        const user_fetch = await fetch(apis.account_sign_in_google, {
                            headers: {
                                'Accept': 'application/json',
                                'Content-Type': 'application/json',
                                'token': token,
                            },
                            method: "POST",
                        })
                        const user_result = await user_fetch.json()
                        if (user_result.code === 1 && user_result.data) {
                            user.id = user_result.data.id
                            return true
                        }
                        else
                            return false
                    } catch {
                        return false
                    }
                } else if (account.provider === "apple") {
                    try {
                        const token = jwt.sign(user, jwt_secret, { algorithm: 'HS256' });
                        const user_fetch = await fetch(apis.account_sign_in_apple, {
                            headers: {
                                'Accept': 'application/json',
                                'Content-Type': 'application/json',
                                'token': token,
                            },
                            method: "POST",
                        })
                        const user_result = await user_fetch.json()
                        if (user_result.code === 1 && user_result.data) {
                            user.id = user_result.data.id
                            return true
                        }
                        else
                            return false
                    } catch {
                        return false
                    }
                }
                return true // Do different verification for other providers that don't have `email_verified`
            },
        },
    })
}

// res: {
//     account: {
//       provider: 'apple',
//       type: 'oauth',
//       providerAccountId: '000701.06e21a89377d44be8603e60b96896710.0657',
//       access_token: 'a5711339bb3024e609828a4f51d93d45b.0.rxqr.d2OgNfpdXgaYw3o4NiZxXA',
//       token_type: 'Bearer',
//       expires_at: 1651928790,
//       refresh_token: 'rec5098841aba4486bed73eae2d9cef2a.0.rxqr.hui-rxAAp5SGDX55ztNyng',
//       id_token: 'eyJraWQiOiJXNldjT0tCIiwiYWxnIjoiUlMyNTYifQ.eyJpc3MiOiJodHRwczovL2FwcGxlaWQuYXBwbGUuY29tIiwiYXVkIjoiY29tLnZpY21vdmUuc2l3YS5zaWQiLCJleHAiOjE2NTIwMTE2MTQsImlhdCI6MTY1MTkyNTIxNCwic3ViIjoiMDAwNzAxLjA2ZTIxYTg5Mzc3ZDQ0YmU4NjAzZTYwYjk2ODk2NzEwLjA2NTciLCJhdF9oYXNoIjoiNTRpT3FiLW5NUUtpdDFRVFBXUjNsUSIsImVtYWlsIjoiOWZ5N203anE2NEBwcml2YXRlcmVsYXkuYXBwbGVpZC5jb20iLCJlbWFpbF92ZXJpZmllZCI6InRydWUiLCJpc19wcml2YXRlX2VtYWlsIjoidHJ1ZSIsImF1dGhfdGltZSI6MTY1MTkyNTIxMiwibm9uY2Vfc3VwcG9ydGVkIjp0cnVlfQ.cx94iSrpAYtSJuMQ0gJfsp0IxUqo2bAxGCRdSG1BZUt865h2ECpHuaIeWUntvZibSXaa1n9V9ntMLfow-0PZPo7NXuimGgpMVFE_4QcIJBVrlepOuv0Vy18J0uh3qJfcwIwcH_dZwnszG-OPmraoVGKlZV0US50_ilYQXYBiRrwn-egZObL8AEFWwNEHm3tYciwRGh9MnXkpEPha_x8kwhTFTbADOudbqWahKuVI3WP8k0g59eG7P9J14UeiwzZDZdjsA-Mk30JrSM396vbuhKHHfzetCc6A3ChXi3dAE0LNkh110OZBYr81aCf57kxx78WENzTxevaHB6LxoKZJaQ'
//     },
//     profile: {
//       iss: 'https://appleid.apple.com',
//       aud: 'com.vicmove.siwa.sid',
//       exp: 1652011614,
//       iat: 1651925214,
//       sub: '000701.06e21a89377d44be8603e60b96896710.0657',
//       at_hash: '54iOqb-nMQKit1QTPWR3lQ',
//       email: '9fy7m7jq64@privaterelay.appleid.com',
//       email_verified: 'true',
//       is_private_email: 'true',
//       auth_time: 1651925212,
//       nonce_supported: true
//     },
//     user: {
//       id: '000701.06e21a89377d44be8603e60b96896710.0657',
//       name: undefined,
//       email: '9fy7m7jq64@privaterelay.appleid.com',
//       image: null
//     }
//   }
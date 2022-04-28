const jwt = require('jsonwebtoken');
import NextAuth from 'next-auth'
import CredentialProvider from "next-auth/providers/credentials"
import GoogleProvider from "next-auth/providers/google";
import { apis, urls } from '../../../utils/config';

export default NextAuth({
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
        })
    ],
    secret: "bao*&^234dep)@$38@6trai!#5@55@",
    jwt: {
        secret: "bao*&^234dep)@$38@6trai!#5@55@",
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
                session.token = jwt.sign(token, "bao*&^234dep)@$38@6trai!#5@55@", { algorithm: 'HS256' });

            }
            return Promise.resolve(session);
        },
        async signIn({ account, profile, user }) {
            if (account.provider === "google") {
                try {
                    const token = jwt.sign(user, "bao*&^234dep)@$38@6trai!#5@55@", { algorithm: 'HS256' });
                    const user_fetch = await fetch(apis.account_sign_in_google, {
                        headers: {
                            'Accept': 'application/json',
                            'Content-Type': 'application/json',
                            'token': token,
                        },
                        method: "POST",
                    })
                    const user_result = await user_fetch.json()
                    console.log(token)
                    if (user_result.code === 1 && user_result.data) {
                        user.id = user_result.data.id
                        return profile.email_verified
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
const jwt = require('jsonwebtoken');
import NextAuth from 'next-auth'
import CredentialProvider from "next-auth/providers/credentials"
import GoogleProvider from "next-auth/providers/google";

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
            authorize: (credentials) => {
                // database look up
                if (
                    credentials.email === "admin@domain.com" &&
                    credentials.password === "admin"
                ) {
                    return {
                        id: 2,
                        name: "Admin",
                        email: "admin@domain.com",
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
        async signIn({ account, profile }) {
            if (account.provider === "google") {
                return profile.email_verified
            }

            return true // Do different verification for other providers that don't have `email_verified`
        },
    },

})
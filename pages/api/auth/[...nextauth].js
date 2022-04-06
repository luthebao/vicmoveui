import NextAuth from 'next-auth'
import CredentialProvider from "next-auth/providers/credentials"
import GoogleProvider from "next-auth/providers/google";

export default NextAuth({
    providers: [
        CredentialProvider({
            credentials: {
                username: {
                    label: "Email",
                    type: "text",
                    placeholder: "email@domain.com",
                },
                password: { label: "Password", type: "password" },
            },
            authorize: (credentials) => {
                // database look up
                if (
                    credentials.username === "admin" &&
                    credentials.password === "admin"
                ) {
                    return {
                        id: 2,
                        name: "Admin",
                        email: "admin@admin.com",
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
    callbacks: {
        jwt: ({ token, user }) => {
            // first time jwt callback is run, user object is available
            if (user) {
                token.id = user.id;
            }

            return token;
        },
        session: ({ session, token }) => {
            if (token) {
                session.id = token.id;
            }

            return session;
        },
        async signIn({ account, profile }) {
            if (account.provider === "google") {
                return profile.email_verified
            }
            return true // Do different verification for other providers that don't have `email_verified`
        },
    },
    secret: "test",
    jwt: {
        secret: "test",
        encryption: true,
    },
})
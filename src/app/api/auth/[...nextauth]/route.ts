import NextAuth from "next-auth/next";
import { AuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials"
import GoogleProvider from "next-auth/providers/google";
import { axiosInstance } from "../../axiosConf";
import { googleClientId, googleClientSecret } from "@/consts";


export const authOptions: AuthOptions = {
    debug: true,
    providers: [
        GoogleProvider({
            clientId: googleClientId,
            clientSecret: googleClientSecret
        }),
        CredentialsProvider({
            id: 'credential',
            name: 'Credentials',
            credentials: {
                email: { label: "メールアドレス", type: "email" },
                password: { label: "パスワード", type: "password" }
            },
            async authorize(credentials, req) {
                const res = await axiosInstance(
                    `${process.env.API_URL}/api/login`,
                    {
                        method: 'POST',
                        data: {
                            email: credentials?.email,
                            password: credentials?.password
                        }
                    }
                )
                .then( res => {
                    console.log(`route.ts側のレス: ${res.data}`)
                    return res.data
                })
                .catch( err => {
                    console.log(err.message)
                    return null
                })

                return res
            }
        })   
    ],
    session: {
        strategy: "jwt",
        maxAge: 30 * 24 * 60 * 60
    },
    jwt: {
        maxAge: 30 * 24 * 60 * 60
    },
    pages: {
        signIn: '/users/login',
        error: '/users/create'
    },
    callbacks: {
        session({ session }) {
            return session
        }
    },
}

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }
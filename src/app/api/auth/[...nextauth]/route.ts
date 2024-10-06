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
                    console.log(res.data)
                    const user = { 
                        id: "1", 
                        name: 'taro',
                        email: 'saiga0114@gmail.com'
                    }
                    return user
                })
                .catch( err => {
                    console.log(err.message)
                    return null
                })

                return res
            }
        })   
    ],
    pages: {
        signIn: '/users/login',
        error: '/users/create'
    },
    callbacks: {
        session({ session }) {
            return session
        }
    }
}

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }
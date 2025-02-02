import NextAuth from "next-auth/next";
import { AuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials"
import GoogleProvider from "next-auth/providers/google";
import { axiosInstance } from "../../axiosConf";
import { googleClientId, googleClientSecret } from "@/consts";


export const authOptions: AuthOptions = {
    debug: true,
    secret: process.env.AUTH_SECRET,
    providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
        CredentialsProvider({
            id: 'credentials',
            name: 'Credentials',
            credentials: {
                user_name: { label: "ユーザー名" },
                password: { label: "パスワード", type: "password" }
            },
            async authorize(credentials) {
                // const res = await axiosInstance(
                //     `${process.env.API_URL}/api/login`,
                //     {
                //         method: 'POST',
                //         data: {
                //             user_name: credentials?.user_name,
                //             password: credentials?.password
                //         }
                //     }
                // )
                // .then( res => {
                //     console.log(`route.ts側のレス: ${res.data}`)
                //     return res.data
                // })
                // .catch( err => {
                //     console.log(err.message)
                //     return null
                // })
                // const res = await axiosInstance.post(
                //     `${process.env.NEXT_PUBLIC_API_URL}/api/login`,
                //     {
                //         method: 'POST',
                //         data: {
                //             user_name: credentials?.user_name,
                //             password: credentials?.password
                //         }
                //     }
                // )
                

                console.log(res.data)

                if ( !res.data ) return null

                return res.data
            }
        })   
    ],
    // session: {
    //     strategy: "jwt",
    //     maxAge: 30 * 24 * 60 * 60
    // },
    // jwt: {
    //     maxAge: 30 * 24 * 60 * 60
    // },
    // pages: {
    //     // signIn: '/users/login',
    //     error: '/users/create'
    // },
    // callbacks: {
    //     session({ session }) {
    //         return session
    //     }
    // },
}

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }
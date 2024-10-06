'use client'

import React from 'react'
import { SessionProvider } from 'next-auth/react'
import { Session } from 'next-auth'
import { Header } from './Header'

interface NextAuthProvider {
    children: React.ReactNode
    session: Session | null
}

export const NextAuthProvider = ( props: NextAuthProvider ) => {
    const { children, session } = props
    return (
        <SessionProvider session={session}>
            <Header/>
            {children}
        </SessionProvider>
    )
}

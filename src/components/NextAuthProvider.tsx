'use client'

import React from 'react'
import { getSession, SessionProvider } from 'next-auth/react'

interface NextAuthProviderProps {
    children: React.ReactNode
}

export const NextAuthProvider = (props: NextAuthProviderProps) => {
    const { children } = props
    return (
        <SessionProvider>
            {children}
        </SessionProvider>
    )
}

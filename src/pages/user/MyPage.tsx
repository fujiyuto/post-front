import React from 'react'
import { getServerSession, Session } from 'next-auth'
import { authOptions } from '@/app/api/auth/[...nextauth]/route'

export const MyPage = async () => {
    const session: Session|null = await getServerSession(authOptions)
    console.log(session?.user)
    return (
        <div></div>
    )
}

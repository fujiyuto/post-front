'use client'

import React from 'react'
import { SessionProvider, useSession, signIn } from 'next-auth/react'
import Link from 'next/link'

export const Header = (sess: any) => {
    const  { data: session, status } = useSession()

    return (
        <header
            className='bg-theme h-16 flex justify-between items-center px-7'
        >
            <Link href='/'>
                <h1 className='text-4xl font-semibold text-white tracking-wider'>Tabelogish</h1>
            </Link>
            <ul className='flex text-lg text-white gap-8'>
                <li>ジャンルで探す</li>
                <li>地域で探す</li>
                {
                    status === "authenticated" && (
                        <li>
                            <Link href='/mypage'>マイページ</Link>
                        </li>
                    )
                }
                {
                    status === "unauthenticated" && (
                        
                        <>
                            <li>
                                <Link href='/users/create'>新規会員登録</Link>
                            </li>
                            <li>
                                <Link href='/users/login'>ログイン</Link>
                            </li>
                        </>
                    )
                }
                
            </ul>
        </header>
    )
}

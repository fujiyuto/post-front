"use client"

import React, { useState } from 'react'
import { SessionProvider, useSession, signIn } from 'next-auth/react'
import Link from 'next/link'
import { Modal } from '@mui/base/Modal'
import { Fade } from '@mui/material';
import { Search } from './Search'


export const Header = () => {
    const [openGenre, setOpenGenre] = useState<boolean>(false)
    const handleGenreOpen = () => setOpenGenre(true)
    const handleGenreClose = () => setOpenGenre(false)

    const [openLocate, setOpenLocate] = useState<boolean>(false)
    const handleLocateOpen = () => setOpenLocate(true)
    const handleLocateClose = () => setOpenLocate(false)

    const [openKeyword, setOpenkeyword] = useState<boolean>(false)
    const handleKeywordOpen = () => setOpenkeyword(true)
    const handleKeywordClose = () => setOpenkeyword(false)
    
    return (
        <header
            className='bg-theme h-16 flex justify-between items-center px-7'
        >
            <Link href='/'>
                <h1 className='text-4xl font-semibold text-white tracking-wider'>Tabelogish</h1>
            </Link>
            <ul className='flex text-lg text-white gap-8'>
                <li className='hover:cursor-pointer hover:opacity-80' onClick={handleGenreOpen}>ジャンルで探す</li>
                <li>地域で探す</li>
                <li>
                    <Link href='/mypage'>マイページ</Link>
                </li>
                <li>
                    <Link href='/users/create'>新規会員登録</Link>
                </li>
                <li>
                    <Link href='/users/login'>ログイン</Link>
                </li>
            </ul>
            <Modal
                open={openGenre}
                onClose={handleGenreClose}
                closeAfterTransition
            >
                <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
                    <Fade in={openGenre}>
                        <div>
                            <Search mode='genre'/>
                        </div>
                    </Fade>
                </div>
            </Modal>
            <Modal
                open={openLocate}
                onClose={handleLocateClose}
                closeAfterTransition
            >
                <Fade in={openLocate}>
                    <div>
                        <Search mode='locate'/>
                    </div>
                </Fade>
            </Modal>
            <Modal
                open={openKeyword}
                onClose={handleKeywordClose}
                closeAfterTransition
            >
                <Fade in={openKeyword}>
                    <div>
                        <Search mode='keyword'/>
                    </div>
                </Fade>
            </Modal>
        </header>
    )
}

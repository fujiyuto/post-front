'use client'

import clsx from 'clsx'
import React, { useState, createContext } from 'react'
import Link from 'next/link'
import { Modal } from '@mui/base'
import { Fade } from '@mui/material';
import { SearchGenre } from './Search/Search'
import { SearchGenreModal } from './Modal/SearchGenreModal'
import { signOut, useSession } from 'next-auth/react'
import { Button } from '@mui/base'
import { getServerSession } from "next-auth";
// import { signOut, Session } from "next-auth/react";


export const GenreContext = createContext<() => void>(() => { })
export const LocateContext = createContext<() => void>(() => { })

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

    const { data: session, status } = useSession()

    const logoutAction = async (): Promise<void> => {
        const data = await signOut({ redirect: false, callbackUrl: 'http://localhost:3000/' })

    }

    return (
        <header
            className='h-16 flex justify-between items-center px-7 text-theme border-b-4'
        >
            <Link href='/'>
                <h1 className='text-4xl font-semibold tracking-wider'>Tabelogish</h1>
            </Link>
            <ul className='flex text-lg gap-8'>
                <li className='hover:cursor-pointer hover:opacity-80' onClick={handleGenreOpen}>ジャンルで探す</li>
                <li>地域で探す</li>
                {session ? (
                    <>
                        <li>
                            <Link href="/mypage">マイページ</Link>
                        </li>
                        <li>
                            <form action={logoutAction}>
                                <Button type="submit">ログアウト</Button>
                            </form>
                        </li>
                    </>
                ) : (
                    <>
                        <li>
                            <Link href="/users/create">新規会員登録</Link>
                        </li>
                        <li>
                            <Link href="/users/login">ログイン</Link>
                        </li>
                    </>
                )}

            </ul>
            <GenreContext.Provider value={handleGenreClose}>
                <SearchGenreModal
                    open={openGenre}
                />
            </GenreContext.Provider>
            <Modal
                open={openLocate}
                onClose={handleLocateClose}
                closeAfterTransition
            >
                <Fade in={openLocate}>
                    <div>

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

                    </div>
                </Fade>
            </Modal>
        </header>
    )
}

interface BackdropProps {
    open: boolean
    onClick: () => void
}
const Backdrop = React.forwardRef<HTMLDivElement, BackdropProps>((props, ref) => {
    const { open, onClick } = props
    return (
        <div
            className={clsx({ 'base-Backdrop-open': open }, '-z-10 fixed inset-0 bg-black opacity-30')}
            ref={ref}
            onClick={onClick}
        />
    )
})

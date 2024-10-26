'use client'

import React, { useContext } from 'react'
import { useGetGenres } from '@/hooks'
import { GenreGroupDataValue } from '@/types'
import Link from 'next/link'
import { Modal } from '@mui/base'
import { Fade } from '@mui/material';
import clsx from 'clsx'
import { GenreContext } from '../Header'

interface SearchGenreModalProps {
    open: boolean
}

export const SearchGenreModal = (props: SearchGenreModalProps) => {
    const { open } = props
    const handleClose = useContext(GenreContext)
    return (
        <Modal
            open={open}
            onClose={handleClose}
            closeAfterTransition
            slots={{ backdrop: Backdrop }}
            className='z-20 fixed inset-0 w-2/3 mx-auto'
        >
            <Fade in={open} className='h-2/3 rounded absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white w-full overflow-auto focus-visible:outline-none shadow-lg'>
                <div>
                    <SearchGenre/>
                </div>
            </Fade>
        </Modal>
    )
}

const SearchGenre = () => {
    const { data, isLoading, isError } = useGetGenres()

    if ( isLoading ) {
        return (
            <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
                <svg className="w-[32px] h-[32px] fill-black opacity-50 animate-spin" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
                    <path d="M222.7 32.1c5 16.9-4.6 34.8-21.5 39.8C121.8 95.6 64 169.1 64 256c0 106 86 192 192 192s192-86 192-192c0-86.9-57.8-160.4-137.1-184.1c-16.9-5-26.6-22.9-21.5-39.8s22.9-26.6 39.8-21.5C434.9 42.1 512 140 512 256c0 141.4-114.6 256-256 256S0 397.4 0 256C0 140 77.1 42.1 182.9 10.6c16.9-5 34.8 4.6 39.8 21.5z"></path>
                </svg>
            </div>
        )
    }

    if ( isError || data === undefined ) {
        return <p>Error occur</p>
    }

    console.log(data)

    return (
        <>
            {
                Object.entries(data.genre_groups).map(([key, value]: [string, GenreGroupDataValue], index: number) => {
                    return (
                        <GenreGroupListItem key={index} unique={key} value={value}/>
                    )
                })
            }
        </>
    )   
}

const GenreGroupListItem = (props: { unique: string, value: GenreGroupDataValue }) => {
    const { unique, value } = props
    const handleClose = useContext(GenreContext)
    
    const genreList = value.genres.map(genre => {
        return (
            <li key={genre.unique_name}>
                <Link
                    onClick={handleClose}
                    href={`/restaurants/genre/${genre.unique_name}`}
                    className='hover:opacity-80 hover:underline hover:underline-offset-4'
                >{genre.genre_name}</Link>
            </li>
        )
    })
   
    return (
        <div key={unique} className='my-14'>
            <h2 className='text-xl font-bold text-center'>{value.group_name}</h2>
            <ul className='grid grid-cols-3 gap-6 mt-6 text-center text-black'>
                {genreList}
            </ul>
        </div>
    )
}

interface BackdropProps {
    open: boolean
    onClick: () => void
}
const Backdrop = React.forwardRef<HTMLDivElement,BackdropProps>((props, ref) => {
    const { open, onClick } = props
    return (
       <div 
        className={clsx({ 'base-Backdrop-open': open }, '-z-10 fixed inset-0 bg-black opacity-30')}
        ref={ref}
        onClick={onClick}
        />
    )
})

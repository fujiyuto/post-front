'use client'

import React, { useState } from 'react'
import { Tab, TabsList, TabPanel, Tabs } from '@mui/base'
import { useGetRestaurant } from '@/hooks'
import Image from 'next/image'
import Link from 'next/link'
import { Genre } from '@/types'
import { Star } from '@/components/Util/Star'

interface RestaurantDetailPageProps {
    id: string
}

export const RestaurantDetailPage = (props: RestaurantDetailPageProps) => {
    const { id } = props
    const { data, isLoading, isError } = useGetRestaurant(id)
    const [focusImg, setFocusImg] = useState<string>('')
    
    if ( isLoading ) {
        return <p>Loading...</p>
    }

    if ( isError || data === undefined ) {
        return <p>Error</p>
    }

    const tabList = Object.entries(data.images).map(([key, value]: [string, { name: string, image_urls: string[] }], index: number) => {
        return (
            <Tab 
                key={key} 
                value={key} 
                slotProps={{
                    root: ({ selected, disabled }: { selected: boolean, disabled: boolean }) => ({
                        className: `text-theme tracking-widest text-lg w-full ${selected ? 'border-b-2 border-theme' : 'focus:cursor-pointer'}`
                    })
                }}
            >{value.name}</Tab>
        )
    })

    const tabPanels = Object.entries(data.images).map(([key, value]: [string, { name: string, image_urls: string[] }], index: number) => {
        const imageList = value.image_urls.map((url: string, index: number) => {
            if ( focusImg === '' ) setFocusImg(url)
            return (
                <div key={index} className='hover:opacity-90 cursor-pointer' onMouseOver={() => setFocusImg(url)}>
                    <Image
                        alt=''
                        width={75}
                        height={75}
                        src={url}
                    />
                </div>
            )
        })
        return (
            <TabPanel key={key} value={key} className='py-8'>
                <div className='mb-4 w-fit mx-auto'>
                    <Image
                        alt=''
                        width={150}
                        height={150}
                        src={focusImg}
                    />
                </div>
                <div className='flex gap-4 w-fit mx-auto'>
                    {imageList}
                </div>
            </TabPanel>
        )
    })

    const genreList = data.genres.map((genre: Genre) => {
        return (
            <div key={genre.unique_name} className='flex'>
                <div className='text-xs text-black bg-neutral-200 flex justify-center items-center rounded-lg mr-1 p-1 hover:opacity-80'>
                    <Link
                        href={`/restaurants/genre/${genre.unique_name}`}
                    >{genre.genre_name}</Link>
                </div>
                <div className='text-xs text-black bg-neutral-200 flex justify-center items-center rounded-lg p-1'>あああ</div>
            </div>
        )
    })

    return (
        <div>
            <Tabs defaultValue={'1000'}>
                <TabsList className='flex justify-around gap-2'>
                    {tabList}
                </TabsList>
                {tabPanels}
            </Tabs>
            <h2 className='text-2xl font-semibold'>{data.restaurant_name}</h2> 
            <div>
                {genreList}
            </div>
            <div className='flex gap-4'>
                <Star point={data.point_avg}/>
                <Link
                    href={`/restaurants/${id}/posts`}
                    className='flex justify-center items-center hover:opacity-80'
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
                    </svg>
                    <span>{data.post_num}</span>
                </Link>
            </div> 
            <div className=''>
                <h3 className='text-lg font-semibold'>店情報</h3>
                <p>住所：{data.zip_cd.substring(0, 3)}-{data.zip_cd.substring(3)}　{data.address}{data.address_detail}</p>
                <p>メールアドレス：{data.email}</p>
                <p>電話番号：{data.tel_no}</p>
                <p>予算：{data.price_min}円〜{data.price_max}円</p>
                <p>最終更新日：{data.updated_at}</p>
            </div>
        </div>
    )
}



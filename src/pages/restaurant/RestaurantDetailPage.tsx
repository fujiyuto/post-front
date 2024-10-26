'use client'

import React, { useState } from 'react'
import { Tab, TabsList, TabPanel, Tabs } from '@mui/base'
import { useGetRestaurant } from '@/hooks'
import Image from 'next/image'

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
            <Tab key={key} value={key}>{value.name}</Tab>
        )
    })

    const tabPanels = Object.entries(data.images).map(([key, value]: [string, { name: string, image_urls: string[] }], index: number) => {
        const imageList = value.image_urls.map((url: string, index: number) => {
            return (
                <div key={index} className='hover:opacity-70 cursor-pointer' onMouseOver={() => setFocusImg(url)}>
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
            <TabPanel key={key} value={key} className='bg-white '>
                <div>
                    <Image
                        alt=''
                        width={150}
                        height={150}
                        src={focusImg}
                    />
                </div>
                <div className='flex gap-4 h-fit py-16'>
                    {imageList}
                </div>
            </TabPanel>
        )
    })

    return (
        <div>
            <Tabs defaultValue={'1000'}>
                <TabsList className='flex gap-2'>
                    {tabList}
                </TabsList>
                {tabPanels}
            </Tabs>
        </div>
    )
}


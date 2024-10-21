'use client'

import React from 'react'
import { Tab, TabsList, TabPanel, Tabs } from '@mui/base'
import { useGetRestaurant } from '@/hooks'

interface RestaurantDetailPageProps {
    id: string
}

export const RestaurantDetailPage =  (props: RestaurantDetailPageProps) => {
    const { id } = props
    // const res = await fetch(`${process.env.NEXT_PUBLIC_APP_URL}/api/restaurants/${id}`, { method: 'GET' })
    const { data, isLoading, isError } = useGetRestaurant(id)
    
    if ( isLoading ) {
        return <p>Loading...</p>
    }

    if ( isError ) {
        return <p>Error</p>
    }

    console.log(data)

    // const tabList = Object.entries(data.images).map(())

    return (
        <div>
            <Tabs defaultValue={1000}>
                <TabsList>
                    
                    
                </TabsList>
            </Tabs>
        </div>
    )
}


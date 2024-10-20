import React from 'react'
import { useGetRestaurant } from '@/hooks'

interface RestaurantDetailPageProps {
    id: string
}

export const RestaurantDetailPage = async (props: RestaurantDetailPageProps) => {
    const { id } = props
    const res = await fetch(`${process.env.NEXT_PUBLIC_APP_URL}/api/restaurants/${id}`, { method: 'GET' })
    const data = await res.json()

    console.log(data)

    return (
        <div>店の詳細ページ</div>
    )
}


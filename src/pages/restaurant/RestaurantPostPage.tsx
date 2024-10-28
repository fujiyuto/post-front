import React from 'react'
import { GetRestaurantPostsResponse } from '@/types'

interface RestaurantPostPageProps {
    id: string
}

export const RestaurantPostPage = async (props: RestaurantPostPageProps) => {
    const { id } = props
    const res = await fetch(`${process.env.NEXT_PUBLIC_APP_URL}/api/restaurants/${id}`)
    const data = await res.json()
    console.log(data)
    return (
        <div>RestaurantPostPage</div>
    )
}

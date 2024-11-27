import React from 'react'
import { RestaurantDetailPage } from '@/pages/restaurant/RestaurantDetailPage'

const Page = ({ params }: { params: { id: string } }) => {
    return (
        <RestaurantDetailPage id={params.id}/>
    )
}

export default Page
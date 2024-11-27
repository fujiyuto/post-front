import React from 'react'
import { RestaurantPostPage } from '@/pages/restaurant/RestaurantPostPage'

const Page = ({ params }: { params: { id: string } }) => {
    return (
        <RestaurantPostPage id={params.id}/>
    )
}

export default Page
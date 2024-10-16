'use client'

import { useGetRestaurants } from '@/hooks'
import React, { useEffect } from 'react'
import { GetRestaurant, GetRestaurants } from '@/types'
import Image from 'next/image'

interface SearchGenrePageProps {
    genreUniqueName: string
}

export const SearchGenrePage = (props: SearchGenrePageProps) => {
    const { data, isLoading, isError } = useGetRestaurants(props.genreUniqueName)
    console.log(data)

    // const restaurantList = data.restaurants.map((restaurant: GetRestaurant) => {
    //     return <ListItem key={restaurant.id}/>
    // })

    // return (
    //     <ListItem/>
    // )
}

interface ListItemProps {

}
const ListItem = () => {
    return (
        <div>
            <Image
                src={'https://placehold.jp/300*200.png'}
                width={300}
                height={200}
                alt=''
            />
        </div>
    )
}

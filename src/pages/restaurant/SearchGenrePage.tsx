'use client'

import { useGetRestaurants } from '@/hooks'
import React from 'react'
import { GetRestaurant, GetRestaurants, Genre } from '@/types'
import Image from 'next/image'
import Link from 'next/link'

interface SearchGenrePageProps {
    genreUniqueName: string
}

export const SearchGenrePage = (props: SearchGenrePageProps) => {
    const { data, isLoading, isError } = useGetRestaurants(props.genreUniqueName)

    if ( isLoading ) {
        return <p>Now Loading...</p>
    }

    if ( data.restaurants.length === 0 ) {
        return <p>表示するお店はありません。</p>
    }

    const restaurantList = data.restaurants.map((restaurant: GetRestaurant) => {
        return (
            <ListItem
                id={restaurant.id}
                restaurant_name={restaurant.restaurant_name}
                address={restaurant.address}
                price_min={restaurant.price_min}
                price_max={restaurant.price_max}
                post_num={restaurant.post_num}
                point_avg={restaurant.point_avg}
                updated_at={restaurant.updated_at}
                genres={restaurant.genres}
            />
        )
    })

    return (
        <div
            className='flex flex-col'
        >{restaurantList}</div>
    )
}

interface ListItemProps extends GetRestaurant {}
const ListItem = (props: ListItemProps) => {
    const { id, restaurant_name, address, price_min, price_max, post_num, point_avg, updated_at, genres } = props
    const genreList = genres.map((genre: Genre) => {
        return (
            <>
                <li className='text-xs text-black bg-neutral-200 flex justify-center items-center rounded-lg mr-1 p-1'>
                    <Link
                        href={`/restaurants/genre/${genre.unique_name}`}
                    >{genre.genre_name}</Link>
                </li>
                <li className='text-xs text-black bg-neutral-200 flex justify-center items-center rounded-lg p-1'>あああ</li>
            </>
        )
    })
    return (
        <div className='flex gap-4 py-4'>
            <Image
                src={'https://placehold.jp/300*200.png'}
                width={150}
                height={150}
                alt=''
            />
            <div>
                <ul className='flex'>
                    {genreList}
                </ul>
                <h2 className='font-semibold text-lg'>
                    <Link
                        href={`/restaurants/${id}`}
                        className='hover:text-sky-600'
                    >{restaurant_name}</Link>
                </h2>
                <p>{address}</p>
                {
                    (price_min != null && price_max != null) && (
                        <p>価格帯：¥{price_min}〜¥{price_max}</p>
                    )
                }
                {/* リンクをつけて店の投稿に遷移するようにした方が良いかも */}
                <div className='flex gap-1'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 0 1 .865-.501 48.172 48.172 0 0 0 3.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z" />
                    </svg>
                    <span>{post_num}</span>
                </div>

            </div>
        </div>
    )
}

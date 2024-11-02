import React from 'react'
import Link from 'next/link'
import { PeriodOfTime } from '../Util/PeriodOfTime'
import Image from 'next/image'
import { Star } from '../Util/Star'

interface PostListItemProps {
    id: number
    title: string
    visited_at: string|null
    period_of_time: number
    points: number
    price_min: number
    price_max: number
    image_url: string|null
    created_at: string
}

export const PostListItem = (props: PostListItemProps) => {
    const { id, title, visited_at, period_of_time, points, price_min, price_max, image_url, created_at } = props
    return (
        <div>
            <h2 className='text-xl font-semibold hover:opacity-80'>
                    <Link 
                        href={`/posts/${id}`}
                    >
                        {title}
                    </Link>
                </h2>
                <p>投稿日{created_at}</p>
                <div>
                    <div className='flex gap-2'>
                        <PeriodOfTime period={period_of_time}/>
                        <p>{price_min}〜{price_max}円</p>
                    </div>
                    {
                        visited_at && (
                            <p>訪問日: {visited_at}</p>
                        )
                    }
                    <Star point={points}/>
                    {
                        image_url && (
                            <Image
                                alt=''
                                src={image_url}
                                width={150}
                                height={150}
                            />
                        )
                    }
                </div>
        </div>
    )
}

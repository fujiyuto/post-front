import React from 'react'
import { GetRestaurantPostsResponse, RestaurantPost } from '@/types'
import Link from 'next/link'
import { Star } from '@/components/Util/Star'
import { PeriodOfTime } from '@/components/Util/PeriodOfTime'
import Image from 'next/image'
import { PostListItem } from '@/components/ListItem/PostListItem'

interface RestaurantPostPageProps {
    id: string
}

export const RestaurantPostPage = async (props: RestaurantPostPageProps) => {
    const { id } = props
    const res = await fetch(`${process.env.NEXT_PUBLIC_APP_URL}/api/restaurants/${id}/posts`, { method: 'get', cache: 'no-store' })
    const data: GetRestaurantPostsResponse = await res.json()

    const postList = data.posts.map((value: RestaurantPost, index: number) => {
        const user = value.user
        const post = value.post
        return (
            <div key={index} className='py-4'>
                <div>
                    <p>
                        投稿者:
                        <Link
                            href={`/users/${user.id}`}
                            className='hover:opacity-70 hover:underline hover:underline-offset-1'
                        >{user.user_name}</Link>
                    </p>
                    <div className='flex gap-2 text-xs'>
                        <p>投稿数: {user.post_num}</p>
                        <p>フォロワー数: {user.follower_num}</p>
                    </div>
                </div>
                <PostListItem
                    id={post.id}
                    title={post.title}
                    visited_at={post.visited_at}
                    period_of_time={post.period_of_time}
                    points={post.points}
                    price_min={post.price_min}
                    price_max={post.price_max}
                    image_url={post.image_url}
                    created_at={post.created_at}
                />
            </div>
        )
    })
    return (
        <div className='grid grid-cols-1 divide-y'>
            {postList}
        </div>
    )
}

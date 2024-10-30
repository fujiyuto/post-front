import React from 'react'
import { GetRestaurantPostsResponse, RestaurantPost } from '@/types'
import Link from 'next/link'
import { Star } from '@/components/Util/Star'
import { PeriodOfTime } from '@/components/Util/PeriodOfTime'
import Image from 'next/image'

interface RestaurantPostPageProps {
    id: string
}

export const RestaurantPostPage = async (props: RestaurantPostPageProps) => {
    const { id } = props
    const res = await fetch(`${process.env.NEXT_PUBLIC_APP_URL}/api/restaurants/${id}/posts`, { method: 'get', cache: 'no-store' })
    const data: GetRestaurantPostsResponse = await res.json()
    console.log(data.posts)
    const postList = data.posts.map((value: RestaurantPost, index: number) => {
        const user = value.user
        const post = value.post
        return (
            <div key={index} className='py-4'>
                <h2 className='text-xl font-semibold hover:opacity-80'>
                    <Link 
                        href={`/posts/${post.id}`}
                    >
                        {post.title}
                    </Link>
                </h2>
                <p>投稿日{post.created_at}</p>
                <div>
                    <p>
                        投稿者:
                        <Link
                            href={`/users/${user.id}`}
                            className='hover:opacity-70 hover:underline hover:underline-offset-1'
                        >{user.user_name}</Link>
                    </p>
                    <p>投稿数: {user.post_num}</p>
                    <p>フォロワー数: {user.follower_num}</p>
                </div>
                <div>
                    <div className='flex gap-2'>
                        <PeriodOfTime period={post.period_of_time}/>
                        {
                            post.visited_at && (
                                <p>訪問日: {post.visited_at}</p>
                            )
                        }
                    </div>
                    <Star point={post.points}/>
                    {
                        post.image_url && (
                            <Image
                                alt=''
                                src={post.image_url}
                            />
                        )
                    }
                </div>
            </div>
        )
    })
    return (
        <div className='grid grid-cols-1 divide-y'>
            {postList}
        </div>
    )
}

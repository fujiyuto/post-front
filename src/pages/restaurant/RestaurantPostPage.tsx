import React from 'react'
import { GetRestaurantPostsResponse, RestaurantPost } from '@/types'
import Link from 'next/link'
import { Star } from '@/components/Util/Star'
import Image from 'next/image'

interface RestaurantPostPageProps {
    id: string
}

export const RestaurantPostPage = async (props: RestaurantPostPageProps) => {
    const { id } = props
    const res = await fetch(`${process.env.NEXT_PUBLIC_APP_URL}/api/restaurants/${id}/posts`, { cache: 'no-store' })
    const data: GetRestaurantPostsResponse = await res.json()
    console.log(data.posts)
    const postList = data.posts.map((value: RestaurantPost, index: number) => {
        const user = value.user
        const post = value.post
        return (
            <div key={index}>
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
                        <Link
                            href={`/users/${user.id}`}
                        >{user.user_name}</Link>
                    </p>
                    <p>投稿数: {user.post_num}</p>
                    <p>フォロワー数: {user.follower_num}</p>
                </div>
                <div>
                    {
                        post.period_of_time === 1 && (
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" />
                                </svg>
                            </div>
                        )
                    }
                    {
                        post.period_of_time === 2 && (
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z" />
                                </svg>
                            </div>
                        )
                    }
                    {
                        post.visited_at && (
                            <p>訪問日: {post.visited_at}</p>
                        )
                    }
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

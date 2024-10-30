import React from 'react'
import { GetPostResponse } from '@/types'
import { Star } from '@/components/Util/Star'
import { PeriodOfTime } from '@/components/Util/PeriodOfTime'
import Link from 'next/link'
import Image from 'next/image'


interface PostDetailPageProps {
    id: string
}

export const PostDetailPage = async (props: PostDetailPageProps) => {
    const { id } = props
    // const res = await fetch(`${process.env.NEXT_PUBLIC_APP_URL}/api/posts/${id}`, { method: 'get', cache: 'no-store' })
    // const data: GetPostResponse = await res.json()
    // console.log(data)

    const data = {
        id: 42,
        user_id: 2,
        user_name: 'akira.idaka',
        restaurant_id: 42,
        restaurant_name: 'わかになるにしてや。',
        title: 'あせでぬれた天の川の水もそれがそのから。',
        content: 'びかりもしおまえると、すきとおりて遊あそうそしてカムパネルラ、僕ぼくたちました。その星雲せいの高い高いアスパラガスのようの花が、そのまんねんぐらいのですか。いいました。その奥おくからふらせて盤ばんに走って、こうへいの隅すみました。「さあ」「こどもが頭を出しました。にわからだがうか」「うん、けれども。',
        visited_at: '1997-12-21',
        period_of_time: 2,
        points: 3.6,
        price_min: 1000,
        price_max: 4000,
        images: [ null, null, null ],
        created_at: '2024-10-29'
    }

    const imageList: React.ReactNode[] = []
    if ( data.images.length !== 0 ) {
        data.images.map((image_url: string|null, index: number) => {
            if ( image_url !== null ) {
                return (
                    <div key={index}>
                        <Image
                            alt=''
                            src={image_url}
                        />
                    </div>
                )
            }
        })
    }
   
    return (
        <div className='grid grid-cols-1 divide-y divide-gray text-black'>
            <div className='flex gap-2 px-4 pb-2'>
                <p>
                    <Link
                        href={`/restaurants/${data.restaurant_id}`}
                        className='font-semibold text-lg hover:opacity-70 hover:underline hover:underline-offset-1'
                    >{data.restaurant_name}</Link>
                    
                </p>
                {
                    data.visited_at && (
                        <p>{data.visited_at} 訪問</p>
                    )
                }
            </div>
            <div className='px-4 py-2'>
                <h1 className='text-2xl font-bold'>{data.title}</h1>
                <div className='flex gap-4 items-center my-2'>
                    <Star point={data.points}/>
                    <div className='flex gap-1'>
                        <PeriodOfTime period={data.period_of_time}/>
                        <p>{data.price_min}円〜{data.price_max}円</p>
                    </div>
                </div>
                
                <p className='w-fit ml-auto'>
                    投稿者:
                    <Link
                        href={`/users/${data.user_id}`}
                        className='hover:opacity-70 hover:underline hover:underline-offset-1'
                    >{data.user_name}</Link>
                </p>
            </div>
            <div className='px-4 pt-1'>
                <p className='text-sm'>{data.created_at}</p>
                <p className='pt-4'>{data.content}</p>
                <div className='flex'>
                    {
                        imageList.length !== 0 && imageList
                    }
                </div>
            </div>
        </div>
    )
}

import React from 'react'
import { UserDetailResponsePost, GetUserDetailResponse } from '@/types'
import { PostListItem } from '@/components/ListItem/PostListItem'

interface UserDeatailPageProps {
    id: string
}

export const UserDetailPage = async (props: UserDeatailPageProps) => {
    const { id } = props
    // const res = await fetch(`${process.env.NEXT_PUBLIC_APP_URL}/api/users/${id}`, { method: 'get' })
    // const res = await fetch(`${process.env.NEXT_PUBLIC_APP_URL}/api/users/${id}`, { method: 'get', cache: 'no-store' })
    // const data = await res.json()
    const data: GetUserDetailResponse = {
        user: {
            user_name: 'naoki.watanabe',
            email: 'kana.matsumoto@example.net',
            tel_no: '045-258-2175',
            birthday: '1996-11-01',
            gender: '女性',
            user_type: '会員',
            post_num: 50,
            follower_num: 9,
            follow_num: 9,
            visited_num: 0
        },
        posts: [
            {
                id: 50,
                restaurant_id: 50,
                restaurant_name: 'くびっく調しらもし。',
                title: 'なみを立ててしまえるかったり、すっかさ。',
                visited_at: '2006-10-27',
                period_of_time: 2,
                points: 4.8,
                price_min: 1000,
                price_max: 4000,
                image_url: null,
                created_at: '2024-11-02'
            },
            {
                id: 49,
                restaurant_id: 49,
                restaurant_name: 'くおは、きみも、も。',
                title: '観さんとも言いって叫さけびました。「あ。',
                visited_at: '1979-08-17',
                period_of_time: 1,
                points: 1.3,
                price_min: 1000,
                price_max: 4000,
                image_url: null,
                created_at: '2024-11-02'
            },
            {
                id: 48,
                restaurant_id: 48,
                restaurant_name: 'と時計うでした狼煙。',
                title: 'ろふくとき出そうだろう。どうしろくてか。',
                visited_at: '1972-12-24',
                period_of_time: 1,
                points: 2.4,
                price_min: 1000,
                price_max: 4000,
                image_url: null,
                created_at: '2024-11-02'
            },
            {
                id: 47,
                restaurant_id: 47,
                restaurant_name: '言いいちれきしゃっ。',
                title: 'ョバンニはまだそうに立ち上がり、リトル。',
                visited_at: '2005-02-17',
                period_of_time: 1,
                points: 2.2,
                price_min: 1000,
                price_max: 4000,
                image_url: null,
                created_at: '2024-11-02'
            },
            {
                id: 46,
                restaurant_id: 46,
                restaurant_name: 'たとおいよじの銀河。',
                title: 'がふるえてる汽車を追おって行きますとし。',
                visited_at: '1987-02-09',
                period_of_time: 2,
                points: 0.5,
                price_min: 1000,
                price_max: 4000,
                image_url: null,
                created_at: '2024-11-02'
            },
            {
                id: 45,
                restaurant_id: 45,
                restaurant_name: 'くるっくり返かえっ。',
                title: 'イアは向むこうのとき先生が言いって、林。',
                visited_at: '1983-03-03',
                period_of_time: 2,
                points: 4.4,
                price_min: 1000,
                price_max: 4000,
                image_url: null,
                created_at: '2024-11-02'
            },
            {
                id: 44,
                restaurant_id: 44,
                restaurant_name: 'ジョバンニが学校か。',
                title: 'らずカムパネルラは、なんだろう。走ると。',
                visited_at: '1975-11-20',
                period_of_time: 1,
                points: 3.5,
                price_min: 1000,
                price_max: 4000,
                image_url: null,
                created_at: '2024-11-02'
            }
        ]
    }
    const postList: React.ReactNode[] = data.posts.map((post: UserDetailResponsePost, index: number) => {
        return (
            <PostListItem
                key={index}
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
        )
    })
    return (
        <div className='text-black'>
            <h2 className='text-3xl mb-4'>{data.user.user_name}</h2>
            <div className='mt-2 divide divide-y divide-gray'>
                <div className='flex gap-4 mb-10'>
                    <div className='text-center'>
                        <h3>投稿数</h3>
                        <p>{data.user.post_num}</p>
                    </div>
                    <div className='text-center'>
                        <h3>フォロワー数</h3>
                        <p>{data.user.follower_num}</p>
                    </div>
                    <div className='text-center'>
                        <h3>フォロー数</h3>
                        <p>{data.user.follow_num}</p>
                    </div>
                    <div className='text-center'>
                        <h3>訪問した店</h3>
                        <p>{data.user.visited_num}</p>
                    </div>
                </div>
                <div className='grid grid-cols-1 gap-6 pt-10 mb-10'>
                    <div className='grid grid-cols-1 gap-2'>
                        <h3>電話番号</h3>
                        <p>{data.user.tel_no}</p>
                    </div>
                    <div className='grid grid-cols-1 gap-2'>
                        <h3>生年月日</h3>
                        <p>{data.user.birthday}</p>
                    </div>
                    <div className='grid grid-cols-1 gap-2'>
                        <h3>性別</h3>
                        <p>{data.user.gender}</p>
                    </div>
                </div>
                <div className='pt-10 flex flex-col gap-6'>
                    {postList}
                </div>
            </div>
        </div>
    )
}

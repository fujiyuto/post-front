import React from 'react'
import { PostDetailPage } from '@/pages/post/PostDetailPage'

const Page = ({ params }: { params: { id: string } }) => {
    return (
        <PostDetailPage id={params.id}/>
    )
}

export default Page
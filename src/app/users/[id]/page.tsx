import React from 'react'
import { UserDetailPage } from '@/pages/user/UserDetailPage'

const Page = ({ params }: { params: { id: string } }) => {
    return (
        <UserDetailPage id={params.id}/>
    )
}

export default Page
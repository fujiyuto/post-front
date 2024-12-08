'use client'

import React from 'react'
import { Drawer } from '@mui/material'

interface UserFollowsPageProps {
    id: string
}

export const UserFollowPage = async ( props: UserFollowsPageProps ) => {
    const { id } = props
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/follows/${id}`, { method: 'get', cache: 'no-store' })
    const data = await res.json()
    const user = data.user
    const follows = data.follows

    return (
        <div>
        </div>
    )
}

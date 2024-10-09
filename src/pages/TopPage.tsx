"use client"

import React from 'react'
import { useEffect } from 'react'
import { Button } from '@mui/base'
import { signIn } from 'next-auth/react'

export const TopPage = () => {
    useEffect(() => {
        const getRestaurants = async () => {
            const res = await fetch(
                `${process.env.NEXT_PUBLIC_APP_URL}/api/restaurants`,
                {
                    method: "GET"
                }
                
            )

            console.log(res)
        }

        getRestaurants()
    }, [])

    return (
        <div>
            TopPage
            
        </div>
    )
}

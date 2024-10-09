'use client'

import React, { useState } from 'react'
import { FormControl, Button, Input } from '@mui/base'

const titleObj: { [key: string]: string } = {
    genre: 'ジャンル',
    locate: '地域',
    keyword: 'キーワード'
}

export const Search = ( props: { mode: string } ) => {
    const { mode } = props

    return (
        <div className='bg-black w-full'>
            <h2>{titleObj[mode]}で探す</h2>
            <form action="">
                <Input/>
            </form>
        </div>
    )   
}

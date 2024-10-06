"use client"

import React, { FormEventHandler, useEffect, useState } from 'react'
import { FormControl, Button, Input } from '@mui/base'
import Link from 'next/link'
import { signIn, getCsrfToken } from 'next-auth/react'
import { useRouter } from 'next/navigation'


export const LoginPage = () => {
    const [nextCsrf, setNextCsrf] = useState('')
    const router = useRouter()
    
    useEffect(() => {
        
        const getCsrf = async () => {
            const res = await fetch(
                `${process.env.NEXT_PUBLIC_APP_URL}/api/csrf`,
                {
                    method: "GET",
                }
                
            )
            console.log(res)
        }
        getCsrf()
        
    }, [])

    const handleSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
        console.log('bbb')

        e.preventDefault()

        const formData = new FormData(e.currentTarget)

        await signIn('credential', {
            email: formData.get('email'),
            password: formData.get('password'),
            callbackUrl: '/'
        })
        .then( res => {
            console.log(res)
        })
        .catch( err => {
            console.log(err)
        })
        
        // const res = await signIn(
        //     'Credentials', 
        //     { 
        //         email: formData.get('email'),
        //         password: formData.get('password'),
        //         redirect: false, 
        //         callbackUrl: 'http://localhost:3000' 
        //     }
        // )

        // if ( res?.error ) {
        //     console.log(res.error)
        // }
    }

    return (
        <div className='flex justify-center items-center h-screen text-black'>
            <div className='w-3/4 xl:w-[72rem] py-12 border-2 border-gray'>
                <h3 className='mb-6 text-2xl font-semibold text-center'>ログイン</h3>
                <div className='flex justify-center items-center divide-x divide-solid divide-gray'>
                    <div className='w-1/2 flex flex-col items-center gap-24'>
                        <form className='w-7/12' onSubmit={handleSubmit} method='POST'>
                            <div className='flex flex-col gap-10'>
                                <div className='flex flex-col gap-6'>
                                    <div className='flex flex-col gap-2'>
                                        <FormControl className='text-black' required>
                                            <label htmlFor="" className='font-semibold'>メールアドレス</label>
                                            <Input
                                                name='email'
                                                type='email'
                                                slotProps={{
                                                    input: {
                                                        className: 'w-full shadow border-formLine rounded p-1.5 focus:outline-none focus:ring focus:border-gray-300 focus:ring-slate-300 focus:ring-1'
                                                    }
                                                }}
                                            />
                                        </FormControl>
                                    </div>
                                    <div>
                                        <label htmlFor="" className='font-semibold'>パスワード</label>
                                        <Input
                                            name='password'
                                            type='password'
                                            slotProps={{
                                                input: {
                                                    className: 'w-full shadow border-formLine rounded p-1.5 focus:outline-none focus:ring focus:border-gray-300 focus:ring-slate-300 focus:ring-1'
                                                }
                                            }}
                                        />
                                    </div>
                                </div>
                                <Button
                                    type='submit'
                                    className='w-40 mx-auto px-1 py-2 rounded text-white bg-black'
                                >ログイン</Button>
                            </div>
                        </form>
                        <div className='flex gap-10'>
                            <div className='hover:opacity-70'>
                                <Link
                                    href='/users/forget/pwd/email_form'
                                    className='underline underline-offset-2'
                                >パスワードをお忘れの方</Link>
                            </div>
                            <div className='hover:opacity-70'>
                                <Link 
                                    href='/users/forget/pwd/email_form'
                                    className='underline underline-offset-2'
                                >メールアドレスをお忘れの方</Link>
                            </div>
                        </div>
                    </div>
                    <div className='w-1/2 py-36 flex flex-col items-center gap-11'>
                        <div className='flex flex-col items-center gap-1'>
                            <h4 className='text-xl font-semibold'>会員でない方</h4>
                            <p className='text-xs'>会員登録がお済みでない方は新規会員登録をお願いいたします。</p>
                        </div>
                        <Button slots={{root: 'a'}} href='/users/create' className='px-6 py-2 rounded text-white bg-black'>新規会員登録</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

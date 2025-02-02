'use client'

import React, { FormEventHandler, useEffect, useState } from 'react'
import { FormControl, Button, Input } from '@mui/base'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { HelperText } from '@/components/HelperText'
import { axiosInstance } from '@/app/api/axiosConf'
import { signIn } from 'next-auth/react'
import GoogleLoginButton from '@/components/GoogleLoginButton'

export const LoginPage = () => {
    const router = useRouter()
    const [isDispHelperText, setIsDispHelperText] = useState<boolean>(false)
    const [helperText, setHelperText] = useState<string>('')

    useEffect(() => {
        
        const getCsrf = async () => {
            try {
                await axiosInstance.get('http://localhost:5173/sanctum/csrf-cookie', { withCredentials: true });
                console.log('CSRF クッキー取得成功');
            } catch (error) {
                console.error('CSRF クッキー取得失敗:', error);
            }
        };
        getCsrf()

    }, [])

    const loginAction = async (formData: FormData) => {
        const res = await signIn("credentials", { 
            callbackUrl: '/mypage',
            user_name: formData.get('user_name'),
            password: formData.get('password')
        })

        if ( res === undefined || res.status !== 200 ) {
            setIsDispHelperText(true)
            const result = res?.error
            console.log(result)
        }
    }

    return (
        <div className='flex justify-center items-center h-[calc(100vh-64px)] text-black'>
            <div className='w-3/4 xl:w-[72rem] py-12 border-2 border-gray'>
                <h3 className='mb-6 text-2xl font-semibold text-center'>ログイン</h3>
                <div className='flex justify-center items-center divide-x divide-solid divide-gray'>
                    <div className='w-1/2 flex flex-col items-center gap-24'>
                        <form className='w-7/12' action={loginAction}>
                            <div className='flex flex-col gap-10'>
                                <div className='flex flex-col gap-6'>
                                    <div className='flex flex-col gap-2'>
                                        {
                                            isDispHelperText && (
                                                <HelperText message={helperText}/>
                                            )
                                        }
                                        <FormControl className='text-black' required>
                                            <label htmlFor="" className='font-semibold'>ユーザー名</label>
                                            <Input
                                                name='user_name'
                                                type='text'
                                                slotProps={{
                                                    input: {
                                                        className: 'w-full border-2 border-formLine border-1.5 rounded p-1.5 focus:outline-none focus:ring focus:border-gray-300 focus:ring-slate-300 focus:ring-1 autofill:bg-white'
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
                                                    className: 'w-full shadow border-2 border-formLine rounded p-1.5 focus:outline-none focus:ring focus:border-gray-300 focus:ring-slate-300 focus:ring-1'
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
                        {/* Googleログインボタン追加 */}
                        <div className="mt-6">
                            <GoogleLoginButton />
                        </div>
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

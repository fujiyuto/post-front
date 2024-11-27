import React from 'react'

export const HelperText = ( props: { message: string } ) => {
    const { message } = props
    return (
        <p className='text-red text-sm'>{message}</p>
    )
}

'use client'

import React, { useEffect } from 'react'


const Error = ({
    error,
    reset
}: {
    error: Error & { digest?: string },
    reset: () => void
}) => {

    useEffect(() => {
        console.error(error)
    }, [error])

    return (
        <div>error</div>
    )
}

export default Error
'use client'

import React, { useEffect } from 'react'

interface ErrorPageProps {
    error: Error,
    reset: () => void
}

const ErrorPage = ({ error, reset }: ErrorPageProps) => {
    return (
        <div>Error</div>
    )
}

export default ErrorPage
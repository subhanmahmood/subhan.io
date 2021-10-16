import React, { useEffect } from 'react'
import { useRouter } from 'next/router'

export default function Setup() {
    const router = useRouter();
    useEffect(() => {
        router.push('https://brassy-print-d87.notion.site/Setup-9e6f98da20fd40e6b58aa38fea844948')
    }, [])

    return (
        <div className="h-screen text-center flex items-center justify-center">
            <h1 className="text-4xl font-display font-semibold">Redirecting...</h1>
        </div>
    )
}

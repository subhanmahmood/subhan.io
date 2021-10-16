import React, { useRef, useState } from 'react'
import { useAuth } from '../../lib/auth/AuthContext'
import { useRouter } from 'next/router'

export default function Login() {
    const emailRef = useRef()
    const passwordRef = useRef()

    const { login } = useAuth()

    const [error, setError] = useState('')
    const [msg, setMsg] = useState('')
    const [loading, setLoading] = useState(false)
    const router = useRouter()

    async function handleSubmit(e) {
        e.preventDefault()

        try {
            
            setError('');
            setLoading(true);
            login(emailRef.current.value, passwordRef.current.value)
            console.log('got here')
            router.push('/');
        } catch {
            setError('Failed to login');
        }
        setLoading(false);
    }

    return (
        <div className="flex justify-center items-center" style={{ width: '100vw', height: '100vw' }}>
            <div className="max-w-lg">
                <div className="min-w-full bg-white rounded-lg shadow-lg border border-gray-100 p-8">
                    <h1 className="font-display text-2xl font-semibold">Login</h1>
                    <div className="flex flex-row  items-center mt-4">
                        <div className="flex-shrink-0 mr-3">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                            </svg>
                        </div>
                        <input ref={emailRef} type="email" placeholder="Email..." className="font-display py-2 px-4 rounded-md border border-gray-200 focus:border-4 focus:border-gray-400 transition focus:outline-none" />
                    </div>
                    <div className="flex flex-row  items-center mt-2">
                        <div className="flex-shrink-0 mr-3">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
                            </svg>
                        </div>
                        <input ref={passwordRef} type="password" placeholder="Password..." className="font-display py-2 px-4 rounded-md border border-gray-200 focus:border-4 focus:border-gray-400 transition focus:outline-none" />
                    </div>
                    <div className="w-full mt-4">
                        <button onClick={handleSubmit} className="w-full text-white py-2 bg-purple-500 rounded-md font-display font-semibold">Login</button>
                    </div>
                </div>

                <div className="w-full text-center mt-4">
                    <p>{error}</p>
                    <a className="text-underline text-blue-400 font-display">Forgot your password?</a>
                </div>
            </div>
        </div>
    )
}

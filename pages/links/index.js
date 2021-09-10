import React from 'react'
import Navbar from '../../components/navbar'
import { Youtube, Instagram } from 'react-feather'

export default function index() {
    return (
        <div>
            <Navbar />
            <main>
                <div className="max-w-sm mx-auto mt-6 px-6">
                    <h1 className="text-3xl font-display font-medium">My Links</h1>
                    <div className="mt-3 grid gap-4">
                        <a 
                            href="#"
                            className="transition bg-white rounded-lg shadow-md hover:shadow-lg p-4 w-full border border-gray-100"
                        >
                            <div className="flex flex-row items-center">
                                <div className="flex-shrink-0">
                                    <img className="object-fit h-10 w-full" src="/laptop.svg" />
                                </div>
                                <div className="flex flex-col justify-center items-start pl-5">
                                    <h2 className="font-display font-semibold text-2xl">My Tech + Tools</h2>
                                    <p className="font-display text-gray-500">All my favourite tech and the tools I use</p>
                                </div>
                            </div>
                        </a>
                        <a 
                            href="#"
                            className="transition bg-white rounded-lg shadow-md hover:shadow-lg p-4 w-full border border-gray-100"
                        >
                            <div className="flex flex-row items-center">
                                <div className="flex-shrink-0">
                                    <img className="object-fit h-10 w-full" src="/notion.svg" />
                                </div>
                                <div className="flex flex-col justify-center items-start pl-5">
                                    <h2 className="font-display font-semibold text-2xl">Notion Templates</h2>
                                    <p className="font-display text-gray-500">Ready made notion templates for students and grads</p>
                                </div>
                            </div>
                        </a>
                        <a 
                            href="#"
                            className="transition bg-white rounded-lg shadow-md hover:shadow-lg p-4 w-full border border-gray-100"
                        >
                            <div className="flex flex-row items-center">
                                <div className="flex flex-col justify-center items-start">
                                    <h2 className="font-display font-semibold text-2xl">Spotify Playlists</h2>
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
            </main>
        </div>
    )
}

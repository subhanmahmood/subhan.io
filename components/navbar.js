import React, { useState } from 'react'
import IconButton from './IconButton'
import cn from 'classnames'

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false)
    return (
        <nav className="relative sticky top-0 z-50 bg-white border-b border-gray-100">
            <div className="container hidden md:block ">
                <div className="flex flex-row justify-between py-7">
                    <div className="flex flex-row items-center">
                        <IconButton iconPath="/icons/email.svg" />
                        <IconButton iconPath="/icons/insta.svg" className="ml-5" />
                    </div>
                    <div className="flex flex-row items-center">
                        <a className="transition hover:text-gray-400 text-base text-gray-700 ml-7 font-display font-medium">Work</a>
                        <a className="transition hover:text-gray-400 text-base text-gray-700 ml-7 font-display font-medium">Resume</a>
                        <a className="transition hover:text-gray-400 text-base text-gray-700 ml-7 font-display font-medium">Contact</a>
                    </div>
                </div>
            </div>
            <div className="md:hidden px-8 py-4">
                <div className="flex justify-between">
                    <img className="h-12" src="/icons/logo-round.svg" />
                    <a onClick={() => setIsOpen(!isOpen)} className="flex justify-center items-center shadow-sm rounded-md border border-gray-100 px-3">
                        <img className="h-6" src="https://img.icons8.com/material-outlined/48/000000/menu--v1.png" />
                    </a>
                </div>
            </div>
            <div className={cn("transition absolute bg-white w-full md:hidden shadow-lg rounded-lg px-10 pt-4 pb-8", { "hidden": !isOpen })}>
                <ul>
                    <li className="py-1 text-gray-800 text-lg font-display">Work</li>
                    <li className="py-1 text-gray-800 text-lg font-display">Resume</li>
                    <li className="py-1 text-gray-800 text-lg font-display">Contact</li>
                </ul>
                <div className="flex flex-row pt-5 mt-4 border-t border-gray-200">
                    <IconButton iconPath="/icons/email.svg" />
                    <IconButton iconPath="/icons/insta.svg" className="ml-5" />
                </div>
            </div>
        </nav>
    )
}

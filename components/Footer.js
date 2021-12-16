import React from 'react'

export default function Footer() {
    return (
        <footer className="bg-gray-700 text-white w-full py-24">
            <div className="container mx-auto">
                <div className="w-8/12 mx-auto">
                    <div className="flex flex-col items-end w-full space-y-8">
                        <div className="flex flex-row items-center justify-between w-full space-x-8">
                            <img src="/icons/footer-logo.svg" />
                            <div className="flex flex-col gap-y-2">
                                <p className="font-regular font-display text-md">Made by Subhan Mahmood</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

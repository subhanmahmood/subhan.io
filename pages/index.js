import { useState } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import heroStyles from '../styles/hero.module.css'
import cn from 'classnames'
import Navbar from '../components/navbar'
import axios from 'axios'
import Footer from '../components/Footer'

export default function Home() {
  const [email, setEmail] = useState('')
  const [error, setError] = useState(true)
  const [msg, setMsg] = useState('')

  const handleUpdate = (e) => {
    setEmail(e.target.value)
  }

  return (
    <div className="min-w-full">
      <Head>
        <title>subhan.io</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <main>
        <section className={cn("bg-red pt-10 pb-16 md:pt-20 md:pb-32", heroStyles.main)}>
          <div className="container">
            <div className="flex flex-col items-center">
              <Image src="/icons/logo-round.svg" width={300} height={300} />
              <h1 className="font-display text-2xl md:text-4xl font-medium">Hi, I'm Subhan</h1>
              <div className="mt-6 md:max-w-5xl text-center">
                <h1 className="font-display text-4xl md:text-7xl font-bold">Building digital products, brands and experiences</h1>
              </div>
              <div className="mt-8 px-4 md:px-0 md:max-w-sm">
                <p className="font-display text-center whitespace-normal break-words" style={{ lineHeight: '26px' }}>I'm a front-end developer and designer with a passion for creating great user experiences</p>
              </div>
              <div className="flex justify-center mt-6">
                <a 
                  href="mailto:contact@subhan.io"
                  className="transition bg-black rounded-full py-6 px-12 font-semibold font-display text-white shadow-lg hover:shadow-xl hover:scale-110">
                    Get in touch with me
                </a>
              </div>
            </div>
          </div>
        </section>
        <section className="bg-gray-100 py-16" id="work">
          <div className="container">
            <div className="flex flex-col items-center px-6">
              <h1 className="font-display text-5xl font-semibold">Work</h1>
              <p className="max-w-lg text-gray-500 font-display mt-2 text-center">How I've helped brands with their visual identity and online presence in the past</p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-9 max-w-6xl">
                <a href="https://momo-travel.vercel.app" className="transition bg-white rounded-xl shadow-md hover:shadow-lg transform hover:-translate-y-1 p-2 w-full">
                  <div className="flex flex-row">
                    <div className="flex-shrink-0">
                      <img className="h-24 object-cover" src="/icons/travlocracy-mark.svg" />
                    </div>
                    <div className="flex flex-col justify-center items-start pr-5">
                      <h2 className="font-display font-medium text-xl">Travlocracy</h2>
                      <p className="font-display text-gray-500">Branding + Landing Page</p>
                    </div>
                  </div>
                </a>
                <a href="https://momo-media.com" className="transition bg-white rounded-xl shadow-md hover:shadow-lg transform hover:-translate-y-1 p-2 w-full">
                  <div className="flex flex-row">
                    <div className="flex-shrink-0">
                      <img className="h-24 object-cover" src="/icons/mmg-dark.svg" />
                    </div>
                    <div className="flex flex-col justify-center items-start pr-5">
                      <h2 className="font-display font-medium text-xl">MOMO Media</h2>
                      <p className="font-display text-gray-500">Branding + Full Website</p>
                    </div>
                  </div>
                </a>
                <a href="https://enkaeprestigemotors.co.uk" className="transition bg-white rounded-xl shadow-md hover:shadow-lg transform hover:-translate-y-1 p-2 w-full">
                  <div className="flex flex-row">
                    <div className="flex-shrink-0">
                      <img className="h-24 object-cover" src="/icons/enkae.svg" />
                    </div>
                    <div className="flex flex-col justify-center items-start pr-5">
                      <h2 className="font-display font-medium text-xl">Enkae Prestige Motors</h2>
                      <p className="font-display text-gray-500">Branding</p>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </section>
        <section className="py-14" id="resume">
          <div className="container flex flex-col justify-start items-start max-w-6xl px-6">
            <h2 className="text-5xl font-display font-semibold">Resume</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full mt-8">
              <div className="w-full">
                <h2 className="text-2xl font-semibold font-display">Experience</h2>
                <div className="flex flex-col py-8 grid gap-3 transition transform hover:translate-x-2">
                  <h3 className="font-display text-xl font-medium">Humanity First</h3>
                  <p className="font-display text-md flex items-center">Designer&nbsp;&nbsp;<span className="text-white bg-gray-300 rounded-full py-2 px-3 text-xs font-medium">Volunteer</span></p>
                  <p className="font-display text-gray-500">March 2019 - December 2020</p>
                </div>
                <div className="flex flex-col py-8 grid gap-3 transition transform hover:translate-x-2">
                  <h3 className="font-display text-xl font-medium">MKA UK Woking</h3>
                  <p className="font-display text-md">Head of Publications&nbsp;&nbsp;<span className="text-white bg-gray-300 rounded-full py-2 px-3 text-xs font-medium">Volunteer</span></p>
                  <p className="font-display text-gray-500">August 2016 - November 2020</p>
                </div>
              </div>
              <div className="w-full">
                <h2 className="text-2xl font-semibold font-display">Education</h2>
                <div className="flex flex-col py-8 grid gap-3 transition transform hover:translate-x-2">
                  <h3 className="font-display text-xl font-medium">University of Surrey</h3>
                  <p className="font-display text-md">BSc Computer Science</p>
                  <p className="font-display text-gray-500">October 2018 - May 2021</p>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full mt-8">
              <div className="w-full">
                <h2 className="text-2xl font-semibold font-display">Skills</h2>
                <div className="grid grid-cols-2 gap-6 mt-5">
                  <p className="font-display text-gray-700">Visual Design</p>
                  <p className="font-display text-gray-700">UI/UX Design</p>
                  <p className="font-display text-gray-700">Prototyping</p>
                  <p className="font-display text-gray-700">Brand Design</p>
                  <p className="font-display text-gray-700">Front-end Development</p>
                  <p className="font-display text-gray-700">Back-end Development</p>
                  <p className="font-display text-gray-700">React</p>
                  <p className="font-display text-gray-700">NodeJS</p>
                  <p className="font-display text-gray-700">Express</p>
                  <p className="font-display text-gray-700">Cypress</p>
                </div>
              </div>
              <div className="w-full mt-10 md:mt-0">
                <h2 className="text-2xl font-semibold font-display">Tools</h2>
                <div className="grid gap-6 mt-5">
                  <p className="font-display text-gray-700">Adobe CC Suite</p>
                  <p className="font-display text-gray-700">Git</p>
                  <p className="font-display text-gray-700">Figma</p>
                  <p className="font-display text-gray-700">Notion</p>
                  <p className="font-display text-gray-700">Visual Studio Code</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="bg-gray-100 py-16">
          <div className="container">
            <div className="flex flex-col items-center px-6">
              <h1 className="font-display text-5xl font-semibold">Projects</h1>
              <p className="text-lg font-display text-gray-700 mt-3">Some projects I've worked on</p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5 mt-9 max-w-6xl">
                <a href="https://www.wrappedwhenever.com" target="none" className="bg-white rounded-lg flex flex-col shadow-md">
                  <div className="h-48 w-full overflow-hidden">
                    <img className="object-cover rounded-t-lg w-auto" src="/ww.jpg" />
                  </div>
                  <div className="flex-shrink-1 px-5 pb-5 pt-3">
                    <h3 className="text-xl font-display font-medium">WrappedWhenever</h3>
                    <p className="font-display mt-1 text-gray-500">A Spotify Wrapped project</p>
                  </div>
                </a>
                <a href="https://gitlab.eps.surrey.ac.uk/sm01800/facerecognition" target="none" className="bg-white rounded-lg flex flex-col shadow-md">
                  <div className="h-48 w-full overflow-hidden">
                    <img className="object-cover rounded-t-lg w-auto" src="https://images.unsplash.com/photo-1616161560417-66d4db5892ec?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80" />
                  </div>
                  <div className="flex-shrink-1 px-5 pb-5 pt-3">
                    <h3 className="text-xl font-display font-medium">FaceAttr Modification</h3>
                    <p className="font-display mt-1 text-gray-500">A tool to modify facial attributes in group photos</p>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </section>
        <section className="py-20 px-6 ">
          <div className="container text-center">
            <h2 className="font-display text-5xl font-semibold">Want to stay up to date?</h2>
            <p className="font-display text-gray-500 max-w-lg mx-auto mt-3">I'll send you occasional emails about what I'm doing, things I find interesting and other helpful things (no spam, I promise)</p>
            <div className="flex mt-6 w-full justify-center">
              <input
                type="email"
                className="flex-grow-1 bg-white px-7 py-4 rounded-l-full border border-gray-200 focus:outline-none focus:border-gray-400 w-full md:w-4/12"
                placeholder="Your email here..."
                value={email}
                onChange={handleUpdate} />
              <button
                className="flex-shrink-0 px-7 py-4 rounded-r-full bg-black text-white font-display font-semibold"
              >
                Submit
              </button>
            </div>
            <small className={`font-display text-${error ? 'red-500' : 'gray-500'} ml-4 mt-1`}>
              {msg}
            </small>
          </div>
        </section>
      </main>
      <Footer />  
    </div>
  )
}

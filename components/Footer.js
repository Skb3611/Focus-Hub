"use client"
import React from 'react'
import logo from "@/assets/logo.png"
import Image from 'next/image'
import { useRouter } from 'next/navigation'
const Footer = () => {
  const router=useRouter()
  const date = new Date()
  const year = date.getFullYear()
  return (
    <div className='static sm:fixed w-full bottom-0 bg-gray-400 z-20'>
  <footer className="text-gray-400 bg-gray-900 body-font flex">
  <div className="container sm:px-5 p-2 lg:py-4 lg: mx-auto flex items-center sm:items-center  sm:flex-row flex-col">
    <a className="flex title-font font-medium items-center md:justify-start justify-center invert-0">
      <Image src={logo} height={35} className='invert' alt='logo'/>
    </a>
    <p className="text-sm text-gray-400 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-800 sm:py-2 sm:mt-0 mt-1">© {year} Focus Hub — All rights reserved
    </p>
                   
    
  </div>
  <div className=' md:flex justify-center items-center hidden'>
    <button className="text-white bg-indigo-500 border-0 lg:py-2 py-1 lg:px-4 px-2 focus:outline-none hover:bg-indigo-600 rounded text-lg mr-1   sm:mr-5" onClick={()=>router.push("/team")}>Developers</button>
  </div>
</footer>
    </div>
  )
}

export default Footer

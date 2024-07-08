"use client"
import React, { useEffect, useState } from 'react'
import logo from "@/assets/logo.png"
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useSelector, useDispatch } from 'react-redux'
import { SetUser } from '@/app/features/userslice'
import jwt from "jsonwebtoken"
import { toast } from 'react-toastify'

const Navbar = () => {
  let toastoptions = {
    position: "top-right",
    autoClose: 1000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "dark",
  };
  const IsUser = useSelector((state) => state.user.value)
  const dispatch = useDispatch()
  const router = useRouter()
  if (IsUser) {
    let token = JSON.parse(localStorage.getItem("token"))
    var decoded = jwt.decode(token)

  }
  return (
    <>
      <header className="text-gray-600 bg-white shadow-xl body-font sticky z-10 w-full top-0 overflow-hidden">
        <div className="container mx-auto flex flex-wrap p-4 py-3 flex-col md:flex-row items-center">
          <div className="flex title-font justify-center font-medium items-center text-gray-900 mb-4 md:mb-0">
            <Image src={logo} height={55} alt='logo' />
          </div>
          <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-lg  justify-center">
            <Link href={"/"} className="mr-5 hover:text-black">Home</Link>
            <Link href={"/#courses"} className="mr-5 hover:text-black">Courses</Link>
            <Link href={"/about"} className="mr-5 hover:text-black">About Us</Link>
            <Link href={"/contact"} className="mr-5 hover:text-black">Contact Us</Link>
          </nav>
          <div className="buttons flex gap-2">
            {!IsUser ? <> <button type="button" className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-2 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-base px-5 py-2 text-center" onClick={() => router.push('/signup')} >Sign Up</button>
              <button type="button" className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-2 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-base px-5 py-2 text-center" onClick={() => router.push('/login')} >Login</button>
            </> : <>
              <span className='text-lg m-auto font-semibold'>Hi {decoded.username}</span>
              <button type="button" className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-2 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-base px-5 py-2 text-center" onClick={() => { dispatch(SetUser()); localStorage.clear();toast.success("Logged Out",toastoptions) }} >Logout</button>
            </>
            }
          </div>
        </div>
      </header></>
  )
}

export default Navbar

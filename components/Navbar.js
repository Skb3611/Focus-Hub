"use client"
import React, { useEffect, useState } from 'react'
import logo from "@/assets/logo.png"
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useSelector, useDispatch } from 'react-redux'
import { SetUser,RemoveUser } from '@/app/features/userslice'

import jwt from "jsonwebtoken"
import { toast } from 'react-toastify'
import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdClose } from "react-icons/io";


const Navbar = () => {
  const [hamburger, setHamburger] = useState(false)
  const handletoggle=() => {
    setHamburger(!hamburger)
    // console.log(hamburger)
  }
  
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
  var decoded;
  useEffect(() => {
    let token= JSON.parse(localStorage.getItem("token"))
    if(token){
      dispatch(SetUser())
      decoded =jwt.decode(token)
    }
  }, [])
  if (IsUser) {
    let token = JSON.parse(localStorage.getItem("token"))
   decoded = jwt.decode(token)

  }
 
  
  return (
    <>
      <header className="text-gray-600 bg-white shadow-xl body-font sticky z-10 w-full top-0 ">
        <div className="container mx-auto flex flex-wrap p-4 py-2 lg:py-3 justify-between items-center">
          <div className="flex title-font justify-center font-medium items-center text-gray-900 md:mb-0 cursor-pointer " onClick={()=>router.push("/")}>
            <Image src={logo} height={50} alt='logo' />
          </div>
          <div className="lg:hidden hamburger cursor-pointer" onClick={handletoggle}>
            {!hamburger?<RxHamburgerMenu className='text-3xl' /> :<IoMdClose className='text-3xl' />}
          </div>
         {hamburger && <div className=" lg:hidden menu absolute top-16 left-0  flex flex-col  bg-white w-full ">
          <nav className="  md:ml-auto md:mr-auto flex flex-col gap-2 py-3 items-center text-lg font-bold  justify-center">
            {IsUser && <span className='text-lg m-auto font-semibold'>Hi {decoded.username}</span>}
            <Link onClick={handletoggle} href={"/"} className=" hover:text-black hover:underline">Home</Link>
            <Link onClick={handletoggle} href={"/#courses"} className=" hover:text-black hover:underline">Courses</Link>
            <Link onClick={handletoggle} href={"/about"} className=" hover:text-black hover:underline">About Us</Link>
            <Link onClick={handletoggle} href={"/contact"} className=" hover:text-black hover:underline">Contact Us</Link>
            <Link onClick={handletoggle} href={"/team"} className=" hover:text-black hover:underline">Developers</Link>
          </nav>
          <div className=" buttons flex gap-2 pb-5 justify-center">
            {!IsUser ? <> <button type="button" className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-2 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-base px-5 py-2 text-center w-1/3 " onClick={() => {handletoggle();router.push('/signup')}} >Sign Up</button>
              <button type="button" className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-2 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-base px-5 py-2 text-center w-1/3 " onClick={() => {handletoggle();router.push('/login')}} >Login</button>
            </> :
            <button type="button" className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-2 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-base px-5 py-2 text-center w-1/2" onClick={() => { dispatch(RemoveUser()); localStorage.clear(); toast.success("Logged Out", toastoptions);handletoggle() }} >Logout</button>
            }
          </div>
          </div>}
          <nav className=" hidden md:ml-auto md:mr-auto lg:flex flex-wrap items-center text-lg font-bold  justify-center">
            <Link href={"/"} className="mr-5 hover:text-black hover:underline hover:scale-105 transition-all">Home</Link>
            <Link href={"/#courses"} className="mr-5 hover:text-black hover:underline hover:scale-105 transition-all">Courses</Link>
            <Link href={"/about"} className="mr-5 hover:text-black hover:underline hover:scale-105 transition-all">About Us</Link>
            <Link href={"/contact"} className="mr-5 hover:text-black hover:underline hover:scale-105 transition-all">Contact Us</Link>
            <Link href={"/team"} className=" hover:text-black hover:underline hover:scale-105 transition-all">Developers</Link>
          </nav>
          <div className="hidden buttons lg:flex gap-2">
            {!IsUser ? <> <button type="button" className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-2 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-base px-5 py-2 text-center" onClick={() =>{ router.push('/signup')}} >Sign Up</button>
              <button type="button" className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-2 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-base px-5 py-2 text-center" onClick={() =>{ router.push('/login')}} >Login</button>
            </> : <>
              <span className='text-lg m-auto font-semibold'>Hi {decoded.username}</span>
              <button type="button" className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-2 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-base px-5 py-2 text-center" onClick={() => { dispatch(RemoveUser()); localStorage.clear(); toast.success("Logged Out", toastoptions) }} >Logout</button>
            </>
            }
          </div>
        </div>
      </header></>
  )
}

export default Navbar

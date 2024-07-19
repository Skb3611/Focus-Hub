"use client"
import { ResetApi } from '@/app/api/ApiRoutes'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'
import { toast } from 'react-toastify'
const page = ({ params }) => {
  const router=useRouter()
  const [form, setform] = useState({
    password: "",
    Cpassword: ""
  })
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
  const handlechange = (e) => {
    setform({ ...form, [e.target.id]: e.target.value })
  }
  const handleSubmit = async (e) => {
    e.preventDefault()
    if (form.password != form.Cpassword) return toast.error("Passwords don't match", toastoptions)
    // console.log(form)
    let res = await fetch(ResetApi, {
      method: "POST",
      body: JSON.stringify({ ...form, token: params.slug }),
      headers: {
        "Content-Type": "application/json"
      }
    })
    res=await res.json()
    console.log(res)
    if (!res.success){
      setTimeout(() => {
        router.push('/forget')
      }, 500);
      return toast.error(`${res.message}.Try again`, toastoptions)
    } 
    else {
      setform({
        password: "",
        Cpassword: ""
      })
      setTimeout(() => {
        router.push('/login')
      }, 500);
      return toast.success(res.message, toastoptions)
    }
  }
  return (
    <div>
      <div className=" h-[77vh] md:h-[80vh] flex items-center justify-center ">
        <div className="max-w-md w-full bg-white px-4 py-8 md:p-8 rounded-lg shadow-md mx-3 md:mx-0">
          <form onSubmit={(e) => handleSubmit(e)}>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                New Password
              </label>
              <input
                onChange={(e) => handlechange(e)}
                type="password"
                id="password"
                value={form.password}
                required
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                Confirm Password
              </label>
              <input
                onChange={(e) => handlechange(e)}
                type="password"
                id="Cpassword"
                value={form.Cpassword}
                required
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <div className="flex items-center justify-center w-full">
              <button
                type="submit"
                className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-2 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-base px-5 py-2 text-center w-1/2"
              >
                Confirm
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default page

"use client"
import React from 'react'
import { useState } from 'react'
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { useRouter } from 'next/navigation';

const page = () => {
  const IsUser = useSelector((state) => state.user.value)
  let router = useRouter()
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
    const [form, setform] = useState({
        name:"",
        email:"",
        message:""
    })
    const handlechange=(e) => {
      setform({...form,[e.target.name]:e.target.value})
    }
    const handlesubmit=() => {
        if(IsUser){
            for (const key in form) {
                if(form[key]=="")
                 return toast.error("Fields cannot be empty",toastoptions)
             }
          toast.success("Your response has been sent",toastoptions)
         setform({
            name:"",
            email:"",
            message:""
        })
        }
        else{
            toast.warning("Login to continue",toastoptions)
            setTimeout(() => {
                
                router.push("/login")
            }, 500);
        }
    }
    
    return (
        <div>
            <section className="text-gray-600 body-font relative">
                <div className="container pt-10 pb-20 md:py-12 lg:py-5 mx-auto flex lg:flex-nowrap flex-wrap">
                    <div className="lg:w-2/3  w-full rounded-lg overflow-hidden sm:mr-10 px-10 flex flex-col justify-start relative">
                        <div className='flex flex-col gap-2'>
                            <span className='text-3xl mb-2'>GET in Touch</span>
                        </div>
                        <div>
                            <section className="text-gray-600 bg-white body-font">
                                <div className="flex flex-wrap w-full">
                                    <div className="w-full">
                                        <div className="flex  items-center lg:items-start border-2 rounded-lg border-gray-200 border-opacity-50 p-8 sm:flex-row flex-col">
                                            <div className="w-16 h-16 sm:mr-8 sm:mb-0 mb-4 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 flex-shrink-0">
                                                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-10 h-10" viewBox="0 0 24 24">
                                                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.88 19.88 0 0 1-8.63-2.93 19.5 19.5 0 0 1-6-6A19.88 19.88 0 0 1 3 4.18 2 2 0 0 1 5 2h3a2 2 0 0 1 2 1.72 13 13 0 0 0 .69 3.22 2 2 0 0 1-.45 2.11l-1.27 1.27a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 13 13 0 0 0 3.22.69A2 2 0 0 1 22 16.92z"></path>
                                                </svg>

                                            </div>
                                            <div className="flex-grow text-center lg:text-left">
                                                <h2 className="text-gray-900 text-xl title-font font-medium mb-1">Phone NO</h2>
                                                <p className="leading-relaxed text-lg">+91 7775858902</p>

                                            </div>
                                        </div>
                                    </div>
                                    <div className="w-full">
                                        <div className="flex justify-center items-center border-2 rounded-lg border-gray-200 border-opacity-50 p-8 sm:flex-row flex-col">
                                            <div className="w-16 h-16 sm:mr-8 sm:mb-0 mb-4 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 flex-shrink-0">
                                                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-10 h-10" viewBox="0 0 24 24">
                                                    <path d="M16 12l-4-4-4 4M16 12l-4 4-4-4"></path>
                                                    <path d="M22 12c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2m0 0v8c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2v-8z"></path>
                                                </svg>


                                            </div>
                                            <div className="flex-grow text-center lg:text-left">
                                                <h2 className="text-gray-900 text-xl title-font font-medium mb-1">Email</h2>
                                                <p className="leading-relaxed text-lg">info.focus.hub@gmail.com</p>

                                            </div>
                                        </div>
                                    </div>
                                    <div className="w-full">
                                        <div className="flex justify-center items-center border-2 rounded-lg border-gray-200 border-opacity-50 p-8 sm:flex-row flex-col">
                                            <div className="w-16 h-16 sm:mr-8 sm:mb-0 mb-4 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 flex-shrink-0">
                                                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-10 h-10" viewBox="0 0 24 24">
                                                    <path d="M12 2a10 10 0 0 1 10 10c0 5.25-10 10-10 10S2 17.25 2 12A10 10 0 0 1 12 2z"></path>
                                                    <circle cx="12" cy="12" r="3"></circle>
                                                </svg>



                                            </div>
                                            <div className="flex-grow text-center lg:text-left">
                                                <h2 className="text-gray-900 text-xl title-font font-medium mb-1">Address</h2>
                                                <p className="leading-relaxed text-lg">PL17/2, Sant Namdev Marg, near D Y Patil Engineering College, Gurudwara Colony, Nigdi, Pimpri-Chinchwad, Maharashtra 411044</p>

                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </section>
                        </div>

                    </div>
                    <div className=" lg:w-1/2 bg-white flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0 px-2 rounded-md">
                        <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">Contact Us</h2>
                
                        <div className="relative mb-4">
                            <label htmlFor="name" className="leading-7 text-sm text-gray-600">Name</label>
                            <input value={form.name} onChange={(e)=>handlechange(e)} type="text" id="name" name="name" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                        </div>
                        <div className="relative mb-4">
                            <label htmlFor="email" className="leading-7 text-sm text-gray-600">Email</label>
                            <input value={form.email} onChange={(e)=>handlechange(e)} type="email" id="email" name="email" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                        </div>
                        <div className="relative mb-4">
                            <label htmlFor="message" className="leading-7 text-sm text-gray-600">Message</label>
                            <textarea value={form.message} onChange={(e)=>handlechange(e)} id="message" name="message" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
                        </div>
                        <button className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg" onClick={handlesubmit}>Send</button>
                   
                    </div>
                </div>
            </section>
        </div>
    )
}

export default page

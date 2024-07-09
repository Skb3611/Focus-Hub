"use client"
import { FaRegLightbulb } from "react-icons/fa";
import { SiWelcometothejungle } from "react-icons/si";

import React from 'react'
import { useRouter } from 'next/navigation'
const about = () => {
    const router = useRouter()
  return (
    <div className="relative">
        <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]"><div className="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_500px_at_50%_200px,#C9EBFF,transparent)] "></div></div>
        <div className="pt-10 text-center text-3xl font-semibold">About Us</div>
      <section className="text-gray-600 body-font">
  <div className="container px-5 py-5 lg:py-16 mx-auto">
    <div className="flex items-center lg:w-3/5 mx-auto border-b pb-10 lg:mb-10 border-gray-200 sm:flex-row flex-col">
      <div className="sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 flex-shrink-0">
      <SiWelcometothejungle className='text-5xl' />
      </div>
      <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
        <h2 className="text-gray-900 text-lg title-font font-medium mb-2">Welcome to Focus Hub!</h2>
        <p className="leading-relaxed text-base">At Focus Hub, we believe that education is the foundation for a brighter future. Our mission is to provide a dynamic and supportive learning environment that fosters academic excellence, personal growth, and professional development.</p>
       
      </div>
    </div>
    <div className="flex items-center lg:w-3/5 mx-auto border-b pb-10 mb-10 border-gray-200 sm:flex-row flex-col">
      <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
        <h2 className="text-gray-900 text-lg title-font font-medium mb-2">Our Vision</h2>
        <p className="leading-relaxed text-base">To be a leading institution in providing comprehensive and innovative educational programs that empower students to achieve their full potential and make significant contributions to society.</p>
        
      </div>
      <div className="sm:w-32 sm:order-none order-first sm:h-32 h-20 w-20 sm:ml-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 flex-shrink-0">
      <FaRegLightbulb className='text-5xl' />
      </div>
    </div>
    <button className="flex mx-auto mt-10 md:mb-10 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg" onClick={()=>router.push("/about")} >Read More</button>
  </div>
</section>
    </div>
  )
}

export default about

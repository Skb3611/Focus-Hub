import React from 'react'
import { FaTwitter, FaLinkedin, FaGithub,FaInstagram } from 'react-icons/fa';
import shubham from '@/assets/shubham.jpg'
import omkar from '@/assets/omkar.jpg'
import aayush from '@/assets/aayush.jpg'
import sainath from '@/assets/sainath.jpg'
import Image from 'next/image';

const page = () => {
  const data = [
    {
      image: shubham,
      name: "Shubham Bhilare",
      role: "Lead Developer",
      instagram: "https://www.instagram.com/shubham_bhilare_3611?igsh=MWl6MTdlOG5tdXB6MQ==",
      github: "https://github.com/Skb3611",
      linkden: "https://www.linkedin.com/in/shubham-bhilare-0a694a309?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      twitter: "https://x.com/Shubham60071600?t=NFASGHgAj_x81_O9vZPjgw&s=08"
    },
    {
      image: omkar,
      name: "Omkar Dhumal",
      role: "Web Developer",
      instagram: "https://www.instagram.com/_omkar__d_07?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
      facebook: "",
      linkden: ""
    },
    {
      image: aayush,
      name: "Aayush Kumbhar",
      role: "Web Designer",
      instagram: "https://www.instagram.com/imperial_aayush07?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
      facebook: "",
      linkden: ""
    },
    {
      image: sainath,
      name: "Sainath Hardade",
      role: "Web Designer",
      instagram: "https://www.instagram.com/sainath_0036?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
      facebook: "",
      linkden: ""
    },
  ]
  return (
    <div className='h-[80vh] overflow-scroll lg:overflow-hidden lg:h-full example'>
      <div className="flex items-center justify-center  my-12 md:my-20 flex-wrap flex-shrink gap-5">
       {data.map((item)=>{
        return(
          <div className="w-3/4 sm:w-72 rounded-lg overflow-hidden ring-1 shadow-lg p-6 bg-white hover:scale-105 transition-all">
          <div className="flex items-center justify-center ">
            <Image
              className="w-40 h-40 rounded-full object-cover  ring-2 ring-blue-500 ring-offset-2"
              src={item.image}
              alt="Profile"
            />
          </div>
          <div className="text-center mt-6">
            <h2 className="text-2xl font-semibold">{item.name}</h2>
            <p className="text-gray-600 text-lg">{item.role}</p>
          </div>
          <div className="flex justify-center mt-6 space-x-6">
          
              <a className='cursor-pointer' href={item.instagram} target="_blank" rel="noopener noreferrer">
                <FaInstagram className="text-blue-500 w-8 h-8" />
              </a>
              <a className='cursor-pointer' href={item.twitter} target="_blank" rel="noopener noreferrer">
                <FaTwitter className="text-blue-500 w-8 h-8" />
              </a>
        
            
              <a className='cursor-pointer' href={item.github} target="_blank" rel="noopener noreferrer">
                <FaGithub className="text-gray-800 w-8 h-8" />
              </a>
            
          </div>
        </div>
        )
       })}
      </div>
    </div>
  )
}

export default page

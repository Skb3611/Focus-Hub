"use client"
import React from 'react'
import { useRouter } from 'next/navigation'
import { useSelector } from 'react-redux'
import { toast } from 'react-toastify'
import { FaLongArrowAltRight } from "react-icons/fa";
import Link from 'next/link'

const Slot = () => {
    const router = useRouter()
  const IsUser = useSelector((state) => state.user.value)
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
    let data = [
        {
            title: "Competitive Exams",
            imageURL: "https://www.educationquill.com/wp-content/uploads/2023/02/Apti.jpg",
            dsc: "JEE Main, JEE Advanced , NEET , CET , NATA etc. exam preparations"
        },
        {
            title: "Defence",
            imageURL: "https://corporatecitizen.in/v9-Issue4/images/platinum-jubilee-banner.png",
            dsc: "NDA & NA, CDS, UPSC, MPSC, CRPF, SSC CGL exam preparations"
        },
        {
            title: "Below SSC",
            imageURL: "https://www.teachhub.com/wp-content/uploads/2020/05/Classroom-Management-for-an-Effective-Learning-Environment-scaled.jpg",
            dsc: "Exam preparation for SSC and below classes"
        },
        {
            title: "HSC",
            imageURL: "https://www.pacific.edu/sites/default/files/styles/two_column_image/public/2023-09/RS104731_Westgate%20Center%20Rooms-3-web.jpg?itok=vXJVta-S",
            dsc: "Exam preparation for HSC & 11th , 12th exams "
        },
    ]

const handleclick=() => {
  if(!IsUser){
    toast.warning("Login to continue",toastoptions)
    setTimeout(() => {
        
        router.push("/login")
    }, 500);
  }
  else{
    router.push('/enquiry')
  }
}

    return (
        <div className='relative overflow-hidden' id='slot'>
            <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]"><div className="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_500px_at_50%_200px,#C9EBFF,transparent)]"></div></div>
            <section className="text-gray-600 body-font">
                <div className="container px-5 py-8 lg:py-24 mx-auto w-full md:w-[90%]">
                    <div className="flex flex-col justify-center items-center w-full mb-5 lg:mb-20">
                        <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
                            <h1 className="sm:text-3xl lg:text-4xl text-2xl font-medium title-font mb-0 lg:mb-2 text-gray-900 text-center">Book a Study Session</h1>
                        </div>
                        <p className="lg:w-1/2 w-full leading-relaxed text-gray-500 text-lg text-center">Choose the course you want to pursue or pursing to fill the form.</p>
                    </div>
                    <div className="flex flex-wrap justify-center  w-full">
                        {data.map((item) => {
                           return(
                            <Link href={"/enquiry"} key={item.title} className="px-2 w-full sm:w-1/2 lg:1/3 xl:w-1/4 cursor-pointer hover:scale-105 transition-all duration-500">
                                            <div className="flex flex-wrap w-full bg-gray-800 sm:py-24 py-16 sm:px-10 px-6 relative h-[90%] rounded-lg">
                                                <img alt="gallery" className="w-full object-fill h-full object-center block opacity-25 absolute inset-0" src={item.imageURL} />
                                                <div className="text-center relative z-10 w-full">
                                                    <h2 className="text-xl text-white font-medium title-font mb-2">{item.title}</h2>
                                                    <p className="leading-relaxed text-white">{item.dsc}</p>
                                                    <p className="mt-3 gap-2 text-red-300 font-semibold inline-flex items-center"> Book a session <FaLongArrowAltRight className="text-2xl" />
                                                    </p>
                                                </div>
                                            </div>
                                        </Link>
                           )
                        })}

                    </div>
                </div>
            </section>
        </div>
    )
}

export default Slot


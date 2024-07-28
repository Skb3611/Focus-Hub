import Link from 'next/link';
import React from 'react'
import { useSearchParams } from 'next/navigation';
import { FaLongArrowAltRight } from "react-icons/fa";
const Courses = () => {
    let date = new Date()
    
    let data = [
        {
            img: "https://img.freepik.com/free-vector/laptop-with-program-code-isometric-icon-software-development-programming-applications-dark-neon_39422-971.jpg?w=900&t=st=1720989815~exp=1720990415~hmac=86cd4ad05296525ca4e5ebdb8efc761ad1d3daa15def914aede637f61f57e45e",
            title: "Coding Courses",
            info: "C, C++, Python, JAVA, JS ,Node JS, Full-Stack Development, etc..."
        },
        
        {
            img: "https://assets.datamation.com/uploads/2023/08/dm08172023-what-is-data-analytics.png",
            title: "Data Analysis & Accounting ",
            info: "Google Analytics, Excel, Power BI, Python etc..."
        },
        {
            img: "https://learn.g2.com/hubfs/iStock-1191609321%20%281%29.jpg",
            title:"Graphics Design Softwares " ,
            info: "Adobe Illustrator, Adobe Photoshop, MAYA ,Blender"
        },
        {
            img: "https://www.accurate.in/img/college/1662113563-mechanical-engineering.jpg",
            title: "Mechanical Softwares ",
            info: "CAD, AutoCad, AutoDesk etc... "
        },
    ]
    return (
        <div className='py-20 relative' id='courses'>
            <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]"><div className="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_500px_at_50%_200px,#C9EBFF,transparent)] "></div></div>
            <span   className='block text-center text-4xl mb-8 font-medium'>Popular Courses in {date.getFullYear()}</span>
            <section className="text-gray-400 body-font" >
                <div className="container px-5 mx-auto flex flex-wrap">
                    <div className="lg:w-[90%] mx-auto">
                        <div className="flex flex-wrap ">
                            {
                                data.map((item) => {
                                    return (
                                        <>
                                        <Link href={`courses/${item.title}`} key={Math.random()} className="px-2 w-full sm:w-1/2 lg:1/3 xl:w-1/4 cursor-pointer hover:scale-105 transition-all duration-500">
                                            <div className="flex flex-wrap w-full bg-gray-800 sm:py-24 py-16 sm:px-10 px-6 relative h-[90%] rounded-lg">
                                                <img alt="gallery" className="w-full object-fill h-full object-center block opacity-25 absolute inset-0" src={item.img} />
                                                <div className="text-center relative z-10 w-full">
                                                    <h2 className="text-xl text-white font-medium title-font mb-2">{item.title}</h2>
                                                    <p className="leading-relaxed">{item.info}</p>
                                                    <p className="mt-3 gap-2 text-red-300 inline-flex items-center"> Read More <FaLongArrowAltRight className="text-2xl" />
                                                    </p>
                                                </div>
                                            </div>
                                        </Link>
                                        </>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Courses

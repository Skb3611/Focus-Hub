import React from 'react'
import { FaRegLightbulb } from "react-icons/fa";
import { FaQuestion } from "react-icons/fa6";
import { GiDart } from "react-icons/gi";
import { SiWelcometothejungle } from "react-icons/si";
import { MdOutlineLocalOffer } from "react-icons/md";
const page = () => {
  let data = [
    {
      title: "Welcome to Focus Hub!",
      desc: "At Focus Hub, we believe that education is the foundation for a brighter future. Our mission is to provide a dynamic and supportive learning environment that fosters academic excellence, personal growth, and professional development.",
      icon: <SiWelcometothejungle className='text-5xl' />,
      position: "left"

    },
    {
      title: "Our Vision",
      desc: "To be a leading institution in providing comprehensive and innovative educational programs that empower students to achieve their full potential and make significant contributions to society.",
      icon: <FaRegLightbulb className='text-5xl' />,
      position: "right"

    },
    {
      title: "Our Mission",
      desc: "Quality Education: Deliver top-notch academic programs and support services tailored to meet the diverse needs of our students.Student-Centered Approach: Focus on individual student success through personalized learning experiences and mentorship",
      icon: <GiDart className='text-5xl' />,
      position: "left"

    },
    {
      title: "What We Offer",
      desc: "Support Services: Academic advising, tutoring, career counseling, and personal development workshops to support student success.",
      icon: <MdOutlineLocalOffer className='text-5xl' />,
      position: "right"

    },
    {
      title: "Why Choose Us?",
      desc: "Career Development: Our programs are designed to equip students with the skills and knowledge needed for successful careers.",
      icon: <FaQuestion className='text-5xl' />,
      position: "left"

    },
  ]
  return (
    <div>
      <section className="text-gray-600 body-font h-[80vh] overflow-auto example">
        <div className="container px-5 py-24 mx-auto">

          {data.map((item) => {
            if (item.position == "left") {
              return (
                <div key={item.title} className="flex items-center lg:w-3/5 mx-auto border-1 pb-10 mb-10 border-black sm:flex-row flex-col">
                  <div className="sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 flex-shrink-0">
                    {item.icon}
                  </div>
                  <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
                    <h2 className="text-gray-900 text-xl title-font font-medium mb-2">{item.title}</h2>
                    <p className="leading-relaxed text-lg">{item.desc}</p>
                  </div>
                </div>
              )
            }else{
              return (
                <div key={item.title} className="flex items-center lg:w-3/5 mx-auto border-b pb-10 mb-10 border-gray-200 sm:flex-row flex-col gap-2">
                  <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
                    <h2 className="text-gray-900 text-xl title-font font-medium mb-2">{item.title}</h2>
                    <p className="leading-relaxed text-lg">{item.desc}</p>
                  </div>
                  <div className="sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 flex-shrink-0">
                    {item.icon}
                  </div>
                </div>
              )
            }
          })}

        </div>
      </section>
    </div>
  )
}

export default page

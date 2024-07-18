import React from 'react'
import { FaGraduationCap, FaScroll, FaBook, FaLightbulb, FaUsers, FaHandshake, FaTrophy, FaCommentDots, FaPhone } from 'react-icons/fa';
import Link from 'next/link';
const page = () => {
  let data = [
    {
      title: "Welcome to Focus Hub!",
      desc: "At Focus Hub, we believe that education is the foundation for a brighter future. Our mission is to provide a dynamic and supportive learning environment that fosters academic excellence, personal growth, and professional development.",
      icon: <FaGraduationCap className="text-6xl" />,
      position: "left"
    },
    {
      title: "Mission Statement",
      desc: "Our mission is to deliver comprehensive and innovative educational programs that empower students to achieve their full potential and make significant contributions to society. We are dedicated to creating lifelong learners and leaders who can adapt to the ever-changing demands of the modern world.",
      icon: <FaScroll className="text-6xl" />,
      position: "right"
    },
    {
      title: "History",
      desc: "Focus Hub was founded by a group of passionate educators and industry experts who recognized the need for a holistic approach to education. Over the years, we have grown into a reputable institution known for our commitment to student success and our innovative teaching methodologies. Our journey began with a small team and a big vision, and today, we are proud to have made a significant impact on the lives of countless students.",
      icon: <FaBook className="text-6xl" />,
      position: "left"
    },
    {
      title: "Values and Principles",
      desc: "Excellence: We strive for the highest standards in all our educational programs and continuously seek to improve our offerings. Innovation: We embrace new teaching methodologies and technologies to enhance the learning experience. Support: We provide a nurturing and supportive environment that encourages personal and academic growth. Integrity: We maintain transparency, honesty, and ethical practices in all our operations. Community: We foster a sense of belonging and collaboration among our students, staff, and the broader community.",
      icon: <FaLightbulb className="text-6xl" />,
      position: "right"
    },
    {
      title: "Team",
      desc: "Our team comprises experienced educators, passionate administrators, and dedicated support staff, all working together to ensure the best learning experience for our students. Our faculty members are experts in their respective fields and are committed to providing high-quality education. Our administrative team ensures that the institution runs smoothly and that students have the resources they need to succeed.",
      icon: <FaUsers className="text-6xl" />,
      position: "left"
    },
    {
      title: "Company Culture",
      desc: "At Focus Hub, we foster a collaborative and inclusive culture where every member is encouraged to contribute and grow. We value diversity, creativity, and the pursuit of knowledge. Our culture is built on mutual respect, open communication, and a shared commitment to excellence.",
      icon: <FaHandshake className="text-6xl" />,
      position: "right"
    },
    {
      title: "Achievements and Awards",
      desc: "Best Educational Institution Award 2022: Recognized for our outstanding contributions to education. Innovative Teaching Award 2021: Awarded for our cutting-edge teaching methodologies. Student Success Award 2020: Honored for our exceptional student support services.",
      icon: <FaTrophy className="text-6xl" />,
      position: "left"
    },
    
    {
      title: "Contact Information",
      desc: <Link href={"/contact"} type="button" className=" text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-2 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-base px-5 py-2 text-center w-full"  >Visit Contact Us</Link>,
      icon: <FaPhone className="text-6xl" />,
      position: "left"
    },

  ]
  
  
  return (
    <div>
      <section className="text-gray-600 body-font h-[78vh] sm:h-[80vh] overflow-auto example">
        <div className="container px-5 py-10 lg:py-20 mx-auto">

          {data.map((item) => {
            if (item.position == "left") {
              return (
                <div key={item.title} className="flex items-center lg:w-3/5 mx-auto border-1 pb-10 lg:mb-10 border-black sm:flex-row flex-col">
                  <div className="sm:w-32 sm:h-32 h-24 w-24 sm:mr-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 flex-shrink-0">
                    {item.icon}
                  </div>
                  <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
                    <h2 className="text-gray-900 text-xl title-font font-medium mb-2">{item.title}</h2>
                    <p className="leading-relaxed text-lg text-justify sm:text-left">{item.desc}</p>
                  </div>
                </div>
              )
            }else{
              return (
                <div key={item.title} className="flex flex-col sm:flex-row-reverse items-center lg:w-3/5 mx-auto border-b pb-10 mb-10 border-gray-200   gap-2">
                  <div className="sm:w-32 sm:h-32 h-24 w-24 sm:mr-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 flex-shrink-0">
                    {item.icon}
                  </div>
                  <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
                    <h2 className="text-gray-900 text-xl title-font font-medium mb-2">{item.title}</h2>
                    <p className="leading-relaxed text-lg text-justify sm:text-left">{item.desc}</p>
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

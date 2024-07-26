"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { getlist, getcourseDetails } from "@/app/actions";
import { FaArrowTrendUp } from "react-icons/fa6";
import { LuClock } from "react-icons/lu";
import { FaMobileAlt } from "react-icons/fa";
import { RiCustomerService2Fill } from "react-icons/ri";
import Link from "next/link";
import { TiInfoLarge } from "react-icons/ti";
import { CiBookmarkPlus } from "react-icons/ci";
import Skeleton from "react-loading-skeleton";
import 'react-loading-skeleton/dist/skeleton.css';
import Courselist from '@/skeleton/Courselist';
import Coursepage from '@/skeleton/Coursepage';

const Page = ({ params }) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [count, setCount] = useState(0);
  const [course, setCourse] = useState("");
  const [list, setList] = useState([]);

  useEffect(() => {
    (async () => {
      const count = params.slug.length;
      setCount(count);

      if (count === 1) {
        setLoading(true);
        const decodedTitle = params.slug[0]
          .replaceAll("%20", " ")
          .replaceAll("%26", "&");
        setCategory(decodedTitle);
        try {
          const fetchedData = await getlist(decodedTitle);
          setData(fetchedData);
        } catch (error) {
          console.error("Failed to fetch data:", error);
        } finally {
          setLoading(false);
        }
      }

      if (count === 2) {
        setLoading(true);
        const courses = params.slug[0]
          .replaceAll("%20", " ")
          .replaceAll("%26", "&");
        setCategory(courses);
        try {
          const listResponse = await getlist(courses);
          setList(listResponse.courses);
          const decodedTitle = params.slug[1]
            .replaceAll("%20", " ")
            .replaceAll("%2B", "+");
          setCourse(decodedTitle.split(" ")[0]);
          const dataResponse = await getcourseDetails(decodedTitle);
          setData(dataResponse);
        } catch (error) {
          console.error("Failed to fetch data:", error);
        } finally {
          setLoading(false);
        }
      }
    })();
  }, [params.slug]);

  if (loading) {
    console.log(count)
    if(count===2)return <Coursepage/>
    if(count===1)return <Courselist/>
    else return <div className="h-screen"></div>
  }

  if (count === 1) {
    return (
      <div className="h-80vh">
        <div className="heading pt-3 sm:py-3 text-center text-lg sm:text-2xl lg:text-xl font-medium">
          <TypeAnimation
            sequence={[
              `Learn ${category} with Focus Hub`,
              1000,
              "Basic - Advance Courses by Focus Hub",
              1000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
            className="block"
          />
        </div>
        <section className="text-gray-600 body-font">
          <div className="container px-2 md:px-5 md:py-2 m-auto flex flex-wrap">
            <div className="lg:w-1/2 md:h-[65vh] w-full mb-5 md:mb-10 lg:mb-0 rounded-lg overflow-hidden">
              <Image
                alt="img"
                src={data.coverImg}
                height={500}
                width={900}
                className="h-full w-full rounded-xl"
              />
            </div>
            <div className="flex flex-col flex-wrap lg:py-6 mb-8 md:mb-14 lg:-mb-10 lg:w-1/2 lg:pl-6 lg:text-left text-center">
              <section className="text-gray-600 body-font w-full">
                <div className="container mx-auto flex flex-wrap justify-center lg:h-[60vh] lg:overflow-auto example">
                  <div className="flex flex-col w-full flex-wrap -m-4">
                    {data.courses.map((item) => (
                      <Link
                        href={`${category}/${item.name}`}
                        key={item.name}
                        className="p-2 md:p-4 w-full cursor-pointer hover:scale-105 transition-all duration-300"
                      >
                        <div className="flex border-2 rounded-lg shadow-md hover:shadow-2xl border-gray-400 border-opacity-50 p-4 sm:flex-row flex-col items-center bg-white">
                          <div className="w-1/4 sm:w-1/5 h-16 sm:mr-8 sm:mb-0 mb-4 inline-flex items-center justify-center rounded-full text-indigo-500 flex-shrink-0">
                            <Image
                              alt="img"
                              src={item.img}
                              width={150}
                              height={150}
                            />
                          </div>
                          <div className="flex-grow">
                            <h2 className="text-gray-900 text-lg title-font font-medium mb-3">
                              {item.name}
                            </h2>
                            <p className="leading-relaxed text-base text-justify">
                              {item.info}
                            </p>
                            <p className="mt-3 text-indigo-500 inline-flex items-center">
                              Learn More
                              <svg
                                fill="none"
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                className="w-4 h-4 ml-2"
                                viewBox="0 0 24 24"
                              >
                                <path d="M5 12h14M12 5l7 7-7 7"></path>
                              </svg>
                            </p>
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              </section>
            </div>
          </div>
        </section>
      </div>
    );
  }

  if (count === 2) {
    return (
      <>
        <section className="w-[90%] m-auto flex flex-col-reverse lg:flex-row">
          <div className="aside lg:w-1/4 w-full lg:h-[80vh] lg:py-20 mb-10">
            <h2 className="text-xl text-center font-medium">See Other Courses</h2>
            <div className="flex flex-wrap lg:w-full sm:mx-auto sm:mb-2 -mx-2 lg:h-full overflow-y-auto example items-center justify-center">
              {list.map((item) => (
                <Link
                
                  href={item.name}
                  key={item.name}
                  className="p-2 w-full md:w-1/2 lg:w-full cursor-pointer hover:scale-105 transition-all duration-200"
                >
                  <div className="bg-gray-100 text-black rounded flex p-4 h-full items-center">
                    <Image alt="" src={item.img} height={30} width={30} />
                    <span className="title-font text-base font-medium ml-2">
                      {item.name}
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
          <div className="main w-full lg:w-3/4 lg:mb-10 mb-3 lg:h-[80vh] lg:overflow-y-auto example">
            <section className="body-font">
              <div className="container py-2 lg:px-5 lg:py-5 mx-auto flex flex-col">
                <div className="w-full mx-auto">
                  <div className="rounded-lg lg:h-72 overflow-hidden">
                    <Image
                      height={100}
                      width={100}
                      alt="content"
                      className="object-contain lg:object-cover object-center h-full w-full"
                      src={data.coverImg}
                    />
                  </div>
                  <div className="content py-5 lg:px-2">
                    <div className="info">
                      <h1 className="text-2xl lg:text-5xl font-medium mb-3">
                        {data.title}
                      </h1>
                      <p className="lg:text-xl text-base text-justify mb-5 text-gray-700">
                        {data.info}
                      </p>
                      <h2 className="lg:text-3xl text-2xl font-medium">
                        Key Features of {course}
                      </h2>
                      <div className="mx-auto py-5 lg:py-10">
                        <div className="w-full flex flex-col">
                          <div className="flex items-center mb-4">
                            <FaArrowTrendUp className="text-xl mr-2" />
                            <span>Advanced Level</span>
                          </div>
                          <div className="flex items-center mb-4">
                            <LuClock className="text-xl mr-2" />
                            <span>{data.hours} Hours</span>
                          </div>
                          <div className="flex items-center mb-4">
                            <FaMobileAlt className="text-xl mr-2" />
                            <span>Mobile Friendly</span>
                          </div>
                          <div className="flex items-center mb-4">
                            <RiCustomerService2Fill className="text-xl mr-2" />
                            <span>24/7 Support</span>
                          </div>
                        </div>
                      </div>
                      <div className="w-full text-center">
                        <Link href={`${category}/${course}/register`}>
                          <button className="bg-blue-500 text-white py-2 px-4 rounded-lg">
                            Enroll Now
                          </button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </section>
      </>
    );
  }
};

export default Page;

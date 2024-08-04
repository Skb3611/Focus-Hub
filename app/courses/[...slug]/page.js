"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { getlist, getcourseDetails } from "@/actions/actions";
import { FaArrowTrendUp } from "react-icons/fa6";
import { LuClock } from "react-icons/lu";
import { FaMobileAlt } from "react-icons/fa";
import { RiCustomerService2Fill } from "react-icons/ri";
import Link from "next/link";
import { TiInfoLarge } from "react-icons/ti";
import { CiBookmarkPlus } from "react-icons/ci";
import "react-loading-skeleton/dist/skeleton.css";
import Courselist from "@/skeleton/Courselist";
import Coursepage from "@/skeleton/Coursepage";
import Payment from "@/components/Payment";
import { useRouter, useSearchParams } from "next/navigation";
import { Paymentsuccess } from "@/app/api/ApiRoutes";
import jwt from "jsonwebtoken";
import { toast } from "react-toastify";

const Page = ({ params }) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [count, setCount] = useState(0);
  const [course, setCourse] = useState("");
  const [list, setList] = useState([]);
  const searchparams = useSearchParams();
  const router = useRouter();
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
        let payment = searchparams.get("payment");
        if (payment) {
          let token = localStorage.getItem("token");
          let decoded = jwt.decode(JSON.parse(token));
          let res = await fetch(Paymentsuccess, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ email: decoded.email }),
          });
          let a = await res.json();
          console.log(a);

          if (a.success) {
            toast.success(a.message, toastoptions);
            setTimeout(() => {
              router.push("/");
            }, 700);
          }
        }
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
            .replaceAll("%2B", "+")
            .split("?")[0];
          console.log(decodedTitle);
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
    if (count === 2) return <Coursepage />;
    if (count === 1) return <Courselist />;
    else return <div className="h-screen"></div>;
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
          <div className="aside lg:w-1/4 w-full lg:h-[80vh] lg:py-20 mb-10 ">
            <h2 className="text-xl text-center font-medium">
              See Other Courses
            </h2>
            <div className="flex flex-wrap lg:w-full sm:mx-auto sm:mb-2 -mx-2 lg:h-full overflow-y-auto example items-center justify-center">
              {list.map((item) => {
                return (
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
                );
              })}
            </div>
          </div>
          <div className="main w-full lg:w-3/4 lg:mb-10 mb-3 lg:h-[80vh] lg:overflow-y-auto example">
            <section className=" body-font">
              <div className="container py-2 lg:px-5 lg:py-5 mx-auto flex flex-col ">
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
                      <h1 className="text-2xl lg:text-5xl font-medium  mb-3">
                        {data.title}
                      </h1>
                      <p className="lg:text-xl text-base text-justify mb-5 text-gray-700">
                        {data.info}
                      </p>
                      <h2 className="lg:text-3xl text-2xl font-medium">
                        Key Features of {course}
                      </h2>
                      <div>
                        <div className=" mx-auto py-5 lg:py-10">
                          <div className="flex flex-wrap -m-4 ">
                            {data.features.map((item) => {
                              return (
                                <div key={item.title} className="p-2 md:w-1/2">
                                  <div className="flex rounded-lg h-full bg-gray-100 p-4 py-6 flex-col">
                                    <div className="flex items-center mb-3">
                                      <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0">
                                        <TiInfoLarge className="text-2xl" />
                                      </div>
                                      <h2 className="text-gray-900 text-lg title-font font-medium">
                                        {item.title}
                                      </h2>
                                    </div>
                                    <div className="flex-grow">
                                      <p className="leading-relaxed text-base">
                                        {item.desc}
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              );
                            })}
                          </div>
                        </div>
                      </div>
                      <h2 className="text-2xl lg:text-3xl font-medium mt-5 lg:mt-0">
                        Benifits of {course}
                      </h2>
                      <div>
                        <div className=" mx-auto py-5 lg:py-10">
                          <div className="flex flex-wrap -m-4 ">
                            {data.Benefits.map((item) => {
                              return (
                                <div key={item.title} className="p-2 md:w-1/2">
                                  <div className="flex rounded-lg h-full bg-gray-100 lg:p-8 p-4 py-6 flex-col">
                                    <div className="flex items-center mb-3">
                                      <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0">
                                        <CiBookmarkPlus className="text-2xl" />
                                      </div>
                                      <h2 className="text-gray-900 text-lg title-font font-medium">
                                        {item.title}
                                      </h2>
                                    </div>
                                    <div className="flex-grow">
                                      <p className="leading-relaxed text-base">
                                        {item.desc}
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              );
                            })}
                          </div>
                        </div>
                      </div>
                      <h2 className="lg:text-3xl text-2xl font-medium mt-5 lg:mt-0">
                        Syllabus
                      </h2>
                      <div>
                        <section className="text-gray-600 body-font lg:mb-10 mb-5">
                          <div className="container py-5 mx-auto">
                            <div className="flex flex-wrap sm:mx-auto sm:mb-2 -mx-2">
                              {data.Syllabus.map((item) => {
                                return (
                                  <div
                                    key={item}
                                    className="p-2 sm:w-1/2 w-full"
                                  >
                                    <div className="bg-gray-100 rounded flex p-4 h-full items-center">
                                      <svg
                                        fill="none"
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="3"
                                        className="text-indigo-500 w-6 h-6 flex-shrink-0 mr-4"
                                        viewBox="0 0 24 24"
                                      >
                                        <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                                        <path d="M22 4L12 14.01l-3-3"></path>
                                      </svg>
                                      <span className="title-font font-medium">
                                        {item}
                                      </span>
                                    </div>
                                  </div>
                                );
                              })}
                            </div>
                          </div>
                        </section>
                      </div>
                      <h2 className="lg:text-3xl text-2xl font-medium">
                        Key Features Of Course
                      </h2>
                      <div>
                        <div className=" mx-auto lg:py-10 py-5">
                          <div className="flex flex-wrap -m-4 ">
                            <div className="p-2 md:w-1/2">
                              <div className="flex rounded-lg h-full bg-gray-100 lg:p-8 p-4 py-6 flex-col">
                                <div className="flex items-center mb-3">
                                  <div className="lg:w-16 w-8 h-8 lg:h-16  mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0">
                                    <FaArrowTrendUp className="lg:text-4xl text-2xl" />
                                  </div>
                                  <h2 className="text-gray-900 lg:text-3xl text-2xl title-font font-medium">
                                    Skill Level
                                  </h2>
                                </div>
                                <div className="flex-grow">
                                  <div className="leading-relaxed text-lg">
                                    Beginner, Intermediate, Advance Training is
                                    provided to college Students, Freshers who
                                    have passed out as wells as working
                                    candidates
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="p-2 md:w-1/2">
                              <div className="flex rounded-lg h-full bg-gray-100 lg:p-8 p-4 py-6 flex-col">
                                <div className="flex items-center mb-3">
                                  <div className="lg:w-16 w-8 h-8 lg:h-16  mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0">
                                    <LuClock className="lg:text-4xl text-2xl" />
                                  </div>
                                  <h2 className="text-gray-900 lg:text-3xl text-2xl title-font font-medium">
                                    Course Duration
                                  </h2>
                                </div>
                                <div className="flex-grow">
                                  <div className="leading-relaxed text-lg">
                                    <p>2 - 3 months</p>
                                    <p>
                                      First 2 Months will be focused on
                                      teaching.
                                    </p>
                                    <p>
                                      3rd Month will be totall baised on Project
                                      building,
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="p-2 md:w-1/2">
                              <div className="flex rounded-lg h-full bg-gray-100 lg:p-8 p-4 py-6 flex-col">
                                <div className="flex items-center mb-3">
                                  <div className="lg:w-16 w-8 h-8 lg:h-16  mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0">
                                    <FaMobileAlt className="lg:text-4xl text-2xl" />
                                  </div>
                                  <h2 className="text-gray-900 lg:text-3xl text-2xl title-font font-medium">
                                    Support
                                  </h2>
                                </div>
                                <div className="flex-grow">
                                  <div className="leading-relaxed text-lg">
                                    <p>
                                      Live teaching session 6pm - 8pm daily.
                                    </p>
                                    <p>
                                      Doubt sessions will be conducted on
                                      weekends.
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="p-2 md:w-1/2">
                              <div className="flex rounded-lg h-full bg-gray-100 lg:p-8 p-4 py-6 flex-col">
                                <div className="flex items-center mb-3">
                                  <div className="lg:w-16 w-8 h-8 lg:h-16  mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0">
                                    <RiCustomerService2Fill className="lg:text-4xl text-2xl" />
                                  </div>
                                  <h2 className="text-gray-900 lg:text-3xl text-2xl title-font font-medium">
                                    Service
                                  </h2>
                                </div>
                                <div className="flex-grow">
                                  <div className="leading-relaxed text-lg">
                                    <p>24/7 support</p>
                                    <p>
                                      We are having 24/7 Support team to clear
                                      students’ needs and doubts.
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="button flex justify-center">
                      <Payment
                        amt={data.price}
                        category={category}
                        CourseName={course}
                      />
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

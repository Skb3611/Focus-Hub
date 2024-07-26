import React from 'react';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const LoadingSkeleton = () => (
  <SkeletonTheme baseColor='#D1D5DB' highlightColor='#acdaf5'>
    <div className="h-80vh">
          <div className="heading  pt-3 sm:py-3 text-center text-lg sm:text-2xl lg:3text-xl font-medium">
            
          <Skeleton width={"30%"} />
          </div>

          <section className="text-gray-600 body-font ">
            <div className="container px-2 md:px-5 md:py-2 m-auto flex flex-wrap">
              <div className="lg:w-1/2 md:h-[65vh] lg:hidden  w-full mb-5 md:mb-10 lg:mb-0 rounded-lg overflow-hidden">    
              <Skeleton height={"40vh"} />           
              </div>
              <div className="lg:w-1/2 lg:h-[65vh] w-full mb-5 md:mb-10 lg:mb-0 rounded-lg ">    
              <Skeleton className=' hidden md:block h-full w-full'/>           
              </div>
              <div className="flex flex-col flex-wrap lg:py-6 mb-8 md:mb-14 w-full lg:-mb-10 lg:w-1/2 lg:pl-6 lg:text-left text-center">
                <section className="text-gray-600 body-font w-full">
                  <div className="container w-full  mx-auto flex flex-wrap justify-center lg:h-[60vh] lg:overflow-auto example ">
                    <div className="flex flex-col w-full flex-wrap -m-4 ">
                      {
                       Array(3).fill().map((item) => {
                          return (
                            <div
                            
                              key={Math.random()}
                              className=" p-2 md:p-4 w-full cursor-pointer hover:scale-105 transition-all duration-300 "
                            >
                              <div className="flex border-2 rounded-lg shadow-md hover:shadow-2xl border-gray-400 border-opacity-50 p-4 w-full h-full  sm:flex-row flex-col items-center bg-white">
                                <div className="w-full sm:w-1/5 h-16 sm:mr-8 sm:mb-0 mb-4 items-center  rounded-full  text-indigo-500 flex-shrink-0 ">
                                  <Skeleton className='h-full w-full'  />
                                </div>
                                <div className="flex-grow w-full">
                                  <h2 className="text-gray-900 text-lg w-full title-font font-medium mb-3">
                                  <Skeleton className='w-full' width={"20%"}/>
                                  </h2>
                                  <p className="leading-relaxed text-base w-full text-justify">
                                  <Skeleton className='w-full' count={3} width={"100%"}/>
                                  </p>
                                  <p className="mt-3 text-indigo-500 inline-flex w-full items-center">
                                   <Skeleton className='w-full' width={"10%"}/>
                                  </p>
                                </div>
                              </div>
                            </div>
                          );
                        })}
                    </div>
                  </div>
                </section>
              </div>
            </div>
          </section>
        </div>
  </SkeletonTheme>
);

export default LoadingSkeleton;

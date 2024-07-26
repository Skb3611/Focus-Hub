import React from 'react'
import Skeleton,{SkeletonTheme} from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css'

const Courspage = () => {
  return (
    <SkeletonTheme baseColor='#D1D5DB' highlightColor='#acdaf5'>
    <div>
      <section className="w-[90%] m-auto flex flex-col-reverse lg:flex-row">
              <div className="aside lg:w-1/4 w-full lg:h-[80vh] lg:py-20 mb-10 ">
                <h2 className="text-xl text-center font-medium">
                <Skeleton className='h-full w-full' />
                  
                </h2>
                <div className="flex flex-wrap lg:w-full sm:mx-auto sm:mb-2 -mx-2 lg:h-full overflow-y-auto example items-center justify-center">
                  {Array(5).fill().map((item) => {
                    return (
                      <div
                      key={Math.random()}
                        className="p-2 w-full md:w-1/2 lg:w-full cursor-pointer hover:scale-105 transition-all duration-200"
                      >
                        <div className="bg-gray-100 text-black rounded flex p-4 h-full items-center">
                          <Skeleton circle  height={30} width={30} />
                          <span className="title-font text-base font-medium ml-2">
                           <Skeleton width={"30%"}/>
                          </span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
              <div className="main w-full lg:w-3/4 lg:mb-10 mb-3 lg:h-[80vh] lg:overflow-y-auto example">
                <section className=" body-font">
                  <div className="container py-2 lg:px-5 lg:py-5 mx-auto flex flex-col ">
                    <div className="w-full mx-auto">
                      <div className="rounded-lg lg:h-72 w-full overflow-hidden ">
                  <Skeleton containerClassName='h-full w-full hidden lg:flex ' height={"100%"}/>
                      </div>
                      <div className="rounded-lg lg:h-72 w-full lg:hidden overflow-hidden">
                  <Skeleton containerClassName='h-full w-full ' height={"30vh"}/>
                      </div>
                      <div className="content py-5 lg:px-2">
                        <div className="info">
                          <h1 className="text-2xl lg:text-5xl font-medium  mb-3">
                          <Skeleton width={"50%"} />

                          </h1>
                          <p className="lg:text-xl text-base text-justify mb-5 text-gray-700">
                          <Skeleton width={"100%"} count={5} />
                          </p>
                         
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
              </div>
            </section>
    </div>
    </SkeletonTheme>
  )
}

export default Courspage

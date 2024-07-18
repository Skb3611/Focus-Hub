"use client"
import { ForgetPasswordApi } from '@/app/api/ApiRoutes';
import { useParams } from 'next/navigation';
import React, { useEffect, useState } from 'react';

const page = () => {
  const [email, setEmail] = useState({email:""});
  const [submitted, setSubmitted] = useState(false);



  const handleSubmitReq = async(e) => {
    e.preventDefault();
    setSubmitted(true);
    let res= await fetch(ForgetPasswordApi,{
      method:"POST",
      body:JSON.stringify(email),
      headers:{
        "Content-Type":"application/json"
      }
    })
    console.log(await res.json())
  };

  

  return (
    <div className=" h-[80vh] flex items-center justify-center">
      <div className="max-w-md w-full bg-white p-8 rounded-lg shadow-md">
        {(submitted ? (
          <div>
            <h2 className="text-2xl font-bold mb-4">Check Your Email</h2>
            <p className="text-gray-600">If an account with that email exists, you will receive an email with instructions to reset your password shortly.</p>
            <p className='font-semibold'>NOTE : Link expires in 5 mins</p>
          </div>
        ) : (
          <form onSubmit={handleSubmitReq}>
            <h2 className="text-2xl font-bold mb-6">Forgot Password</h2>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                value={email.email}
                onChange={(e) => setEmail({...email,[e.target.id]:e.target.value})}
                required
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <div className="flex items-center justify-center w-full">
              <button
                type="submit"
                className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-2 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-base px-5 py-2 text-center w-1/2"
              >
                Submit
              </button>
            </div>
          </form>
        ))}
      </div>
    </div>
  );
};

export default page;

"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { toast } from "react-toastify";
import { LoginApi } from "../api/ApiRoutes";
import { useRouter } from "next/navigation";

import { SetUser } from "../features/userslice";
import { useDispatch } from "react-redux";

const page = () => {
  const [Isloading, setIsloading] = useState(false);

  let dispatch = useDispatch();
  const router = useRouter();
  useEffect(() => {
    let token = localStorage.getItem("token");
    if (token) router.push("/");
  }, []);

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
  const [form, setform] = useState({ email: "", password: "" });
  const handlechange = (e) => {
    setform({ ...form, [e.target.id]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (form.email.length == 0 || form.password.length == 0)
      toast.error("Fields cannot be empty", toastoptions);
    else {
      setIsloading(true);
      let res = await fetch(LoginApi, {
        method: "POST",
        body: JSON.stringify(form),
        headers: {
          "Content-Type": "application/json",
        },
      });
      setIsloading(false);
      res = await res.json();

      if (!res.success) toast.error(res.message, toastoptions);
      else {
        localStorage.setItem("token", JSON.stringify(res.token));
        toast.success(res.message, toastoptions);
        dispatch(SetUser());
        setTimeout(() => {
          router.push("/");
        }, 700);
      }
    }
  };

  return (
    <div className="flex justify-center items-center w-full h-[78vh] lg:h-[80vh]">
      <div className="w-[90%] lg:w-full max-w-md bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
        <form onSubmit={(e) => handleSubmit(e)}>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              onChange={(e) => handlechange(e)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              placeholder="Email"
            />
          </div>
          <div>
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <input
              onChange={(e) => handlechange(e)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              placeholder="Password"
            />
          </div>
          <Link
            href={"/forget"}
            className="block text-right mb-2 text-base cursor-pointer"
          >
            Forgot Password?
          </Link>
          <div className="flex items-center justify-center w-full">
            <button
              disabled={Isloading}
              type="submit"
              className={`w-1/2 text-white ${
                Isloading
                  ? "bg-gradient-to-br from-purple-500 to-blue-400"
                  : "bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl"
              } focus:ring-2 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-lg px-5 py-2.5 text-center`}
            >
              Login
            </button>
          </div>
          <div className="text-center mt-2 text-base">
            Don't have an account?{" "}
            <Link href={"/signup"} className=" underline">
              Sign Up
            </Link>{" "}
          </div>
        </form>
      </div>
    </div>
  );
};

export default page;

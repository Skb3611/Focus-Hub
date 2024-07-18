"use client"
import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { EnquiryApi } from '../api/ApiRoutes';
import { useRouter } from 'next/navigation';
const EnquiryForm = () => {
    const router=useRouter()
    const [Isloading, setIsloading] = useState(false)
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        date: '',
        time: 'default',
        category: 'default',
    });
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
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        for (const key in formData) {
            if (formData[key] == "" || formData[key] == "default")
                return toast.error("Fields cannot be empty", toastoptions)
        }
        setIsloading(!Isloading)
        let res = await fetch(EnquiryApi, {
            method: "POST",
            body: JSON.stringify(formData),
            headers: {
                "Content-Type": "application/json",
              }
        })
        res= await res.json()
        if(res){
            toast.success("Session booked. Check your Mail", toastoptions)
            setIsloading(!Isloading)
        }
           else if(!res.status)toast.error("Some error occured")
        setFormData({
            name: '',
            email: '',
            phone: '',
            date: '',
            time: 'default',
            category: 'default',
        })
        setTimeout(() => {
            
            router.push("/")
        }, 500);
        
    };

    return (
        <div className="max-w-lg mx-auto p-6 bg-white shadow-md rounded-md h-full lg:my-10">
            <h2 className="text-2xl font-bold mb-4">Book a Study Session</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label className="block text-sm font-medium text-gray-700">Name</label>
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                        required
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700">Email</label>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                        required
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700">Phone</label>
                    <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                        required
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700">Category</label>
                    <select onChange={handleChange} name="time" id="time" className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500" defaultValue={formData.time}>
                        <option value="default">Select a Option</option>
                        <option value="Competitive Exams">Competitive Exams</option>
                        <option value="Defence Exams">Defence Exams</option>
                        <option value="SSC">SSC</option>
                        <option value="HSC">HSC</option>
                    </select>

                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700">Date</label>
                    <input
                        type="date"
                        name="date"
                        value={formData.date}
                        onChange={handleChange}
                        className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                        required
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700">Time</label>
                    <select onChange={handleChange} name="category" id="category" className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500" defaultValue={formData.time}>
                        <option value="default">Select a Option</option>
                        <option value="6 Am - 8Pm">6 Am - 8Pm</option>
                        <option value="8 Am - 10Pm">8 Am - 10Pm</option>
                        <option value="10 Am - 12Pm">10 Am - 12Pm</option>
                        <option value="12 Pm - 2Pm">12 Pm - 2Pm</option>
                        <option value="4 Pm - 6Pm">4 Pm - 6Pm</option>
                        <option value="6 Pm - 8Pm">6 Pm - 8Pm</option>
                    </select>

                </div>


                <div>
                    <button
                        type="button"
                        disabled={Isloading}
                        className={`w-full py-2 lg:mb-5 px-4  text-white font-semibold rounded-md shadow-md  focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 ${Isloading ? "bg-indigo-400":"bg-indigo-600 hover:bg-indigo-700"} `}
                        onClick={handleSubmit}>
                        Submit
                    </button>
                </div>
            </form>
        </div>
    );
};

export default EnquiryForm;

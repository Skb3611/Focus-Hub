"use server"
import connectToDatabase from "@/lib/connection";
import courseDetails from "@/models/courseDetails";
import courses from "@/models/courses";
export  async function getlist(slug){
    await connectToDatabase()
    const data= await courses.findOne({title:slug}).lean()
    return data
}
export  async function getcourseDetails(slug){
    await connectToDatabase()
    const data= await courseDetails.findOne({title:slug}).lean()
    return data
}
import React from 'react'
import {FcLike, FcLikePlaceholder} from "react-icons/fc"
import { toast } from 'react-toastify';


export const Card = (props) => {
    let course = props.course;
    let likedCourses= props.likedCourses;
    let setLikedCourses = props.setLikedCourses;

    function clickHandler(){
        if(likedCourses.includes(course.id)){
            setLikedCourses(likedCourses.filter((id)=>id!==course.id));
            toast.warning("Like removed");
        }
        else{
            setLikedCourses([...likedCourses, course.id]);
            toast.success("Liked sucessfully");

        }
    }
  return (
    <div className="bg-slate-400 m-2 rounded-lg w-72">
        <div>
            <img src = {course.image.url} alt = "loading" className="rounded-t-lg"></img>
        </div>

        <div className="flex justify-end translate-y-[-30px]">
            <button onClick = {clickHandler} className="p-2 bg-white rounded-full mr-2">
                {likedCourses.includes(course.id)?(<FcLike fontSize = "1.75rem"/>):(<FcLikePlaceholder fontSize = "1.75rem"/>)}
            </button>
        </div>

        <div className="">
            <p className="font-extrabold text-center mt-[-28px]">{course.title}</p>
            <p className="px-2 pb-2 pt-1 text-sm">{
                course.description.length>100?
                (course.description.substr(0, 100))+"...":
                (course.description)
            }</p>
        </div>
    </div>
  )
}
export default Card
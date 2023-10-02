import React from 'react'
import Card from "./Card"
import {useState} from "react";

export const Cards = (props) => {
    let courses = props.courses;
    let category = props.category
    const [likedCourses, setLikedCourses] = useState([]);
    
    function getCourses(){
        let allCourses = [];
        if(category==="All"){
            Object.values(courses).forEach((courseCategory)=>{
                courseCategory.forEach((course)=>{
                    allCourses.push(course);
                })
            })
            return allCourses;
        }
        else{
            return courses[category];
        }
    }
    
    


  return (
    <div className="flex flex-wrap justify-center justify-self-center w-[90vw]">{getCourses().map((course)=>{
        return(
            <Card key={course.id} course= {course} likedCourses={likedCourses} setLikedCourses={setLikedCourses}/>
        )
    })}</div>
  )
}

export default Cards

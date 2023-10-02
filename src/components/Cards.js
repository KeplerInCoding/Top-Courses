import React from 'react'
import Card from "./Card"

export const Cards = ({courses}) => {
    const allCourses = [];
    const getCourses= ()=>{
        Object.value(courses).forEach((courseCategory)=>{
            courseCategory.forEach((course)=>{
                allCourses.push(course);
            })
        })
        return allCourses;
    }
    
    


  return (
    <div>{getCourses().map((course)=>{
        return(
            <Card course= {course}/>
        )
    })}</div>
  )
}

export default Cards

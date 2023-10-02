import React from 'react'
import Card from "./Card"

export const Cards = ({courses}) => {
    
    function getCourses(){
        let allCourses = [];
        Object.values(courses).forEach((courseCategory)=>{
            courseCategory.forEach((course)=>{
                allCourses.push(course);
            })
        })
        return allCourses;
    }
    
    


  return (
    <div>{getCourses().map((course)=>{
        return(
            <Card key={course.id} course= {course}/>
        )
    })}</div>
  )
}

export default Cards

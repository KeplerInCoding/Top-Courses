import React, {useState, useEffect}  from "react";
import Navbar from './components/Navbar';
import Cards from './components/Cards';
import Filter from './components/Filter';
import {filterData, apiUrl} from "./data";

function App() {
  const [courses, setCourses] = useState(null);
  useEffect(()=>{
    const fetchData = async()=>{
      try{
          const response = await fetch(apiUrl);
          const output = await response.json();
          setCourses(output.data);
        }
        catch{
          console.log("error");
        }
      }
      fetchData();
  },[]);
  return (
    <div>
      <Navbar/>

      <Filter filterData={filterData}/>

      <Cards courses = {courses}/>
    </div>
  );
}

export default App;

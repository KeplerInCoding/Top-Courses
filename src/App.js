import React, {useState, useEffect}  from "react";
import Navbar from './components/Navbar';
import Cards from './components/Cards';
import Filter from './components/Filter';
import Spinner from './components/Spinner';
import {filterData, apiUrl} from "./data";

function App() {
  const [courses, setCourses] = useState(null);
  const [loading, setLoading] = useState(true);
  const [category, setCategory] = useState(filterData[0].title);

  const fetchData = async()=>{
    setLoading(true);
    try{
      let response = await fetch(apiUrl);
      let output = await response.json();
      setCourses(output.data);
    }
    catch{
      console.log("error");
    }
    setLoading(false);

  }

  useEffect(()=>{
      fetchData();
  },[]);


  return (
    <div className="w-[100vw] min-h-[100vh] bg-gradient-to-r from-red-200 to-emerald-200">

      <div><Navbar/></div>
      
      <div><Filter filterData={filterData} setCategory = {setCategory} category = {category}/></div>
      
      <div className="flex justify-center">
        {loading ? <Spinner/> : <Cards courses={courses} category = {category}/>}
      </div>

    </div>
  );
}

export default App;

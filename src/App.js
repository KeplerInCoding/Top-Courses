import React, {useState, useEffect}  from "react";
import Navbar from './components/Navbar';
import Cards from './components/Cards';
import Filter from './components/Filter';
import Spinner from './components/Spinner';
import {filterData, apiUrl} from "./data";

function App() {
  const [courses, setCourses] = useState(null);
  const [loading, setLoading] = useState(true);

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
    <div>

      <div><Navbar/></div>
      
      <div><Filter filterData={filterData}/></div>
      
      <div>
        {loading ? <Spinner/> : <Cards courses={courses}/>}
      </div>

    </div>
  );
}

export default App;

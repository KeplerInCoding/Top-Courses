import React from 'react'

export const Filter = (props) => {
  let filterData = props.filterData;
  let setCategory = props.setCategory;
  let category = props.category;

  function categoryHandler(title){
    setCategory(title);
  }
  return (
    <div className="flex justify-center flex-wrap">
        {filterData.map((data) => {
        return(<button onClick = {()=>{categoryHandler(data.title)}} key = {data.id} 
        className={`rounded-lg bg-pink-900 font-bold text-white px-4 py-2 m-2 hover:bg-pink-800
        ${category===data.title ? 
        " bg-pink-800 text-black":
        ""}`}>
          {data.title}
        </button>)
        })}
    </div>
  )
}
export default Filter


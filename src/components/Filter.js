import React from 'react'

export const Filter = ({filterData}) => {
  return (
    <div>
        {filterData.map((data) => {
        return(<button key = {data.id}>{data.title}
        </button>)
        })}
    </div>
  )
}
export default Filter


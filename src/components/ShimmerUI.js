import React from 'react'

const ShimmerUI = () => {
  return (
    <>
    <div className='restro-list'>
     {Array(20).fill("").map((val,index)=> (<div key={index} className='shimmer-card'></div>) )} 
    </div>
    </>
  )
}

export default ShimmerUI

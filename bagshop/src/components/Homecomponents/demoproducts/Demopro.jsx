import React from 'react'

function Demopro(props) {
  return (
    <div className='h-90 w-60 mx-auto shadow-2xl shadow-gray-200 rounded p-2'>
      <img className='w-full h-70' src= {props.image} alt="" />
      <div className='flex flex-col  items-center justify-center text-center p-2'>
            <h1>{props.type}</h1>
            <h1>{props.price}</h1>
      </div>
    </div>
  )
}

export default Demopro

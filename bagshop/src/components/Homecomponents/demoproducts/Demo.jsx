import React from 'react'
import Demopro from './Demopro'

export default function Demo() {
  return (
    <div className=' overflow-hidden w-screen px-2'>
       <h1 className='text-center text-4xl mt-4'>Explore Our Latest Products</h1>
 <div className=' grid  grid-cols-1 sm:grid-cols-2  lg:grid-cols-6 gap-2 p-10 md:grid-cols-2 md:grid-row-3 '>
      <Demopro image = "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGJhZ3N8ZW58MHx8MHx8fDA%3D" type = "Hand Bag" price = "20$"/>
        <Demopro image = "https://images.unsplash.com/photo-1613482184972-f9c1022d0928?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGJhZ3N8ZW58MHx8MHx8fDA%3D" type = "Tote Bag" price = "20$"/>
          <Demopro image = "https://plus.unsplash.com/premium_photo-1673384389924-097135cbf1cd?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YmFnc3xlbnwwfHwwfHx8MA%3D%3D" type = " School Bag" price = "20$"/>
            <Demopro image = "https://images.unsplash.com/photo-1622560480654-d96214fdc887?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGJhZ3N8ZW58MHx8MHx8fDA%3D" type = "Hand Bag" price = "20$"/>
              <Demopro image = "https://images.unsplash.com/photo-1527385352018-3c26dd6c3916?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGJhZ3N8ZW58MHx8MHx8fDA%3D" type = "HandMade" price = "20$"/>
                 <Demopro image = "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGJhZ3N8ZW58MHx8MHx8fDA%3D" type = "Hand Bag" price = "20$"/>
        <Demopro image = "https://images.unsplash.com/photo-1613482184972-f9c1022d0928?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGJhZ3N8ZW58MHx8MHx8fDA%3D" type = "Tote Bag" price = "20$"/>
          <Demopro image = "https://plus.unsplash.com/premium_photo-1673384389924-097135cbf1cd?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YmFnc3xlbnwwfHwwfHx8MA%3D%3D" type = " School Bag" price = "20$"/>
            <Demopro image = "https://images.unsplash.com/photo-1622560480654-d96214fdc887?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGJhZ3N8ZW58MHx8MHx8fDA%3D" type = "Hand Bag" price = "20$"/>
              <Demopro image = "https://images.unsplash.com/photo-1527385352018-3c26dd6c3916?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGJhZ3N8ZW58MHx8MHx8fDA%3D" type = "HandMade" price = "20$"/>
               
   
    </div>
    <div className='flex justify-center items-center p-10'>
      <button className='bg-black hover:scale-90 hover:cursor-pointer text-white px-4 py-2 rounded-lg'> <a href="/product">View More</a></button>
      </div>
    </div>
  )
}

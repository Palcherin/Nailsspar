import React from 'react'

const Book = () => {
  return (
    <div className='h-[100vh] shadow-md w-full bg-pink-50 '>
    <div className='flex justify-around text-black min-w-full'>
      <div className='text-black pt-[20%] basis[100%] w-[500px] pr-[5%] pl-[5%] '>
        <h1 className='text-4xl font-bold'>BETTER NAILS SERVICES ARE HERE</h1>
        <p className='mb-10'>Making the nail services comfortable and fun, any length, any gel. Our experts will treat you the best way.</p>
        <button className='btn-primary'>  Book Service</button>
      </div>
      <div className='pt-[10%] h-[750px] basis-[100vh]'>
        <img src='assets/nails5.png' className='h-[60%] w-[400px] object-cover border-r-10'/>
      </div>
      
    </div>
  </div>
  )
}

export default Book

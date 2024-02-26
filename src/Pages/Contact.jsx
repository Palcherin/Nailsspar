import React from 'react'
import ContactUs from '../Components/ContactUs'

const Contact = () => {
  return (
    <>
    <div className='h-[100vh] shadow-md w-full bg-pink-50 '>
    <div className='flex justify-around text-black min-w-full'>
      <div className='text-black pt-[20%] basis[100%] w-[500px] pr-[5%] pl-[5%] '>
        <h1 className='text-4xl font-bold'>WE LISTEN, REACH OUT TO US</h1>
        <p className='mb-10'>We understand that your needs are our priorities, that is why we listen to your feedback and complains. Feel free to contact us in any channel you can.</p>
        <button className='btn-primary'>  Book Service</button>
      </div>
      <div className='pt-[10%] h-[750px] basis-[100vh]'>
        <img src='assets/nails5.png' className='h-[60%] w-[400px] object-cover border-r-10'/>
      </div>
      
    </div>
  </div>
  <div className='w-full h-[30vh] pl-[10%] pt-10'>
    <h1 className='w-[90%]'>"WE ARE COMMITTED TO YOU AND DEDICATE ALL OUR ATTENTION TO THE BEAUTIFULL NAIL YOU HAVE ALWAYS WANTED. OUR NAIL EXPERT ARE ALERT AND ATTENDIVE TO ALL THE NAIL TREND AND WILL NOT FAIL YOU. YOU ARE WELCOME TO TALK TO U ABOUT WHAT YOU THINK, WE WILL LITEN"</h1>
  </div>
  <ContactUs/>
  </>
  )
}

export default Contact

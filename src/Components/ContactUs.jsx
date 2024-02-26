import React from 'react'
import { FaPhone } from 'react-icons/fa'

const ContactUs = () => {
  return (
    <div className='h-[70vh] ml-11 mr-11 flex justify-start  bg-gray-100'>
     <div className='h-[80%]  w-[100%] flex-start'>
        <img src='assets/nails5.png' className='object-cover w-full h-[70vh]' />
      </div>
      <div className='bg-pink w-[100%] ml-0'>
        <h1>CONTACT US</h1>
        <form className='pt-[5%]'>
            <div className='m-3'>
              <label type='text'>Your name:</label><br/>
          <input type='text' placeholder='Your Name ' className='px-5 py-2 outline-none bg-gray-50 w-[70%]' />  
            </div>
          <div className='m-3'>
            <label type='number'>Email:</label><br/>
          <input type='email' placeholder='your Email address' className='px-5 py-2 outline-none bg-gray-50 w-[70%]'/>
          </div> 
          <div className='m-3'>
            <label type='text'>Your Message:</label><br/>
            <textarea className='px-5 py-2 outline-none bg-gray-50 w-[70%] h-[10%}' placeholder='Your text...'/>
          </div>
          <button type='submit' className='bg-pink-400 px-4 py-2'>SUBMIT</button>
        </form>
        <div className='flex justify-evenly'>
            <div>
                <FaPhone className='text-pink-400'/>
                <h1>0743666719</h1>
            </div>
            <div>

            </div>
            <div>

            </div>
        </div>
      </div>
    </div>
  )
}

export default ContactUs

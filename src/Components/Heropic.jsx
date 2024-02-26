import React from 'react'
import { FaFirefox, FaTimes, FaWatchmanMonitoring } from 'react-icons/fa'
import { Service } from './Service'
import { Offer } from './Offer'

export const Heropic = () => {
  return (
    <>
    <div className='h-[100vh] shadow-md w-full bg-pink-100 '>
      <div className='flex justify-around text-black min-w-full'>
        <div className='text-black pt-[20%] basis[100%] w-[500px] pr-[5%] pl-[5%] '>
          <h1 className='text-4xl font-bold'>ENJOY THE BEST NAILS SERVICES IN KILIFI</h1>
          <p className='mb-10'>We will make it count, Make your nails beautiful</p>
          <button className='btn-primary bg-pink-900'>  Book Service</button>
        </div>
        <div className='pt-[10%] h-[750px] basis-[100vh]'>
          <img src='assets/nails5.png' className='h-[60%] w-[400px] object-cover border-r-10'/>
        </div>
        
      </div>
    </div>
    <div className='w-[80%] pl-[7%] h-[20vh] mt-16'>
      <h1 className='font-bold text-3xl'> More than a Mani</h1>
      <p className='text-xl'>For almost a years now and counting, we have been delivering hoigh quality nails servies, waxing services and good producs. 
        We are commited to a clean and better-for-you experience that celebrates your self-expression, empower our designers and positively 
        change our industry one mini- moment at a time
      </p>
    </div>
    <div className='flex justify-between mt-[150px] mr-10 ml-10'>
      <div className='shadow-md ml-10 p-3'>
        <h1><FaFirefox/> </h1>
        <h4 className='font-bold'>Efficient</h4>
        <p>with <span className='text-pink-400'>same-time mani+pedis, automatic payment, and meni meetings.</span> You can polish more of your todos more often and more conviniently</p>
      </div>
      <div className='shadow-md ml-10 p-3'>
        <h1><FaWatchmanMonitoring/> </h1>
        <h4 className='font-bold'>Hygienic</h4>
        <p>A polished life in a clean one.<span  className='text-pink-400'> So waterless services, hosital-grade sterililization, single used tools and clean air filters</span> are our basics</p>
      </div>
      <div className='shadow-md ml-10 p-3'>
        <h4 className='font-bold'>Future-focused</h4>
        <p>We stay at the forefront of what is new and next, polishing up nails through<span  className='text-pink-400'> cutting edge trends and hospitality caliberated services</span> that keeps you in mind and your hustle at heart.</p>
      </div>
      <div className='shadow-md ml-10 p-3'>
        <h4 className='font-bold'>Fair</h4>
        <p>Living polished life means striving for better. Which is why we provide real <span  className='text-pink-400'> career paths, top pay, and skill building program</span> for all our nails tech aand stuff.</p>
      </div>
    </div>
    <div className='flex justify-around pr-[10%] pl-[10%] shadow-md h-[80vh] w-[90%]'>
      <div className='pt-[15%] h-[750px] basis-[70vh]'>
         <img src='assets/nails6.png' className='h-[50%] w-[400px] object-cover border-r-10' />
      </div>
      <div className='text-black pt-[20%] basis[100%] w-[500px] pr-[5%] pl-[5%] '>
          <h1 className='text-4xl font-bold'>WE BRING SERVICES TO YOUR DOOR STEP</h1>
          <p className='mb-10'>Making the nail services mobile and available to you at the comfort of your home. No more moving in search of our services. </p>
          <button className=' bg-pink-700 px-7 py-3 font-bold'>  Book Service</button>
        </div>
    </div>
    
    </>
  )
}

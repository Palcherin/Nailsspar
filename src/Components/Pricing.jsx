import React from 'react'
import { FaGlide } from 'react-icons/fa'

export const Pricing = () => {
  return (
    <div className='bg-pink-0 h-[80vh] flex justify-between '>
        <div className='h-[90%] border-[4px] shadow-md mr-10 w-[320px] hover:bg-pink-200 '>
            <FaGlide className='w-[400px] h-[200px] text-pink-700  mr-10'/>
            <section>
                <h1 className='font-bold text-xl '>Manicure</h1>
                <p>Your fingers will look perfect</p>
                <span className='text-pink-700 font-bold mt-7 mb-7'><h1 className='mt-5 text-2xl'>ksh. 500</h1> </span><br/>
                <button className='btn-primary bg-pink-700 px-2 py-2 mt-10'> CONTACT US</button>
            </section>
        </div>
        <div className='h-[90%] border-[4px] shadow-md mr-10 w-[320px]  hover:bg-pink-200 '>
            <FaGlide className='w-[400px] h-[200px] text-pink-700 mb-7 ml-0'/>
            <section>
                <h1 className='font-bold text-xl '>Pedicure</h1>
                <p>Your toes will amaze everyone</p>
                <span className='text-pink-700 font-bold mt-7 mb-7'><h1 className='mt-5 text-2xl'>ksh. 650</h1> </span><br/>
                <button className='btn-primary bg-pink-700 px-2 py-2 mt-10'> CONTACT US</button>
            </section>
        </div>
        <div className='h-[90%] border-[4px] shadow-md mr-10 w-[320px]  hover:bg-pink-200 '>
            <FaGlide className='w-[400px] h-[200px] text-pink-700 mb-7 ml-0'/>
            
            <section>
                <h1 className='font-bold text-xl '>Parafix wax</h1>
                <p>try this new relaxing technology</p>
                <span className='text-pink-700 font-bold mt-7 mb-7'><h1 className='mt-5 text-2xl'>ksh. ?</h1> </span><br/>
                <button className='btn-primary bg-pink-700 px-2 py-2 mt-10'> CONTACT US</button>
            </section>
        </div>
    </div>
  )
}

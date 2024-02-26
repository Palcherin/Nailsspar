import React from 'react'

export const Offer = () => {
  return (
    <div>
        <div className='flex justify-start h-[50vh] ml-[10%] mb-[100px] mt-[100px]'>
            
            <section className='h-[100%] bg-pink-200 w-[400px] pt-[10%]'>
                <h1 className='font-bold'>Our Weekly Gift Cart</h1>
                <p>We warm the hearts of those you love</p>
                <button className='bg-pink-700 px-7 py-2 mt-7'>BUY NOW</button>
            </section>
            <div className='h-[100%] '>
            <img src='assets/nails6.png' className='h-[100%] w-[400px] object-cover'/>
            </div>
        </div>
    </div>
  )
}

import React from 'react'

const Footer = () => {
  return (
    <>
    <div className='bg-pink-900 h-[350px]  '>
    <div className=' flex justify-between pr-[80px] pt-[50px] pl-[50px]'>
        <div className='text-gray-400 w-[350px] ml-[50px]'>
            <h1 className='font-bold text-white'>A #DellaMoment In Your Inbox</h1>
            <p className='text-4 '>Sign-up to receive upto 10% of your first online<br/> order, plus we'll email you updates on new products and services, and more</p>
            <input type='email' placeholder='Email Address' className='bg-pink-900 border w-[80%] pl-[2%] py-2 outline-none text-white' />
        </div>
        <div className='flex justify-evenly text-gray-400 mr-[50px]'>
            <div className='mr-[30px]'>
                <h4 className='font-bold text-white'>DStudios</h4>
                <a href=''>Our services</a><br/>
                <a href=''>Our Designers</a><br/>
                <a href=''>Studio Events</a><br/>
                <a href=''>Group Booking</a><br/>
            </div>
            <div className='mr-[30px]'>
                <h4 className='font-bold text-white'>Help</h4>
                <a href=''>Contact Us</a><br/>
                <a href=''>Online Booking</a><br/>
                <a href=''>Accessibility</a><br/>
                <a href=''>FAQ</a>
            </div>
            <div className='mr-[30px] flex-start'>
                <h4 className='font-bold text-white'>About</h4>
                <a href=''>Our Story</a><br/>
                <a href=''>Careers</a><br/>
                <a href=''>Investor portal</a><br/>
                <a href=''>Blogs</a><br/>
            </div>
        </div>
    </div>
    <div className='h-[3px] w-[100%] bg-slate-100 mt-10'>------------------------------------------</div>
    <div className='flex  justify-between mt-[20px]'>
        <div className='text-white '></div>
        <div className='flex justify-evenly pr-[20px] font-bold'>
            <p className='mr-3'>Privacy policy</p>
            <p className='mr-3'>Terms and conditions</p>
            <p className='mr-3'>@2024, DelaNailsArt, Inc. All Rights Reserved</p>
        </div>
    </div>
    </div>
    </>
  )
}

export default Footer

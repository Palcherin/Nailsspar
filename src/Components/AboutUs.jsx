import React from 'react'
import { FaFacebook, FaInstagram, FaMailBulk, FaPhoneAlt, FaPhoneSlash, FaTiktok, FaTwitter, FaVoicemail } from 'react-icons/fa'

const AboutUs = () => {
  return (
    <>
    <div className='h-[80vh] w-80% ml-[5%] mr-[5%] mb-[5%] flex justify-start bg-white  mt-[200px]'>
          <div className='h-[100%]  w-[100%] flex-start'>
        <img src='assets/nails6.png' className='object-cover w-[500px] h-[70vh]' />
      </div>
      <div className='w-[100%] text-center pt-[10%] pr-20'>
        <h5 className='text-small'>About Us</h5>
        <h1 className='text-xl font-bold flex-start'> WELCOME TO DELLA NAILS ART</h1>
        <p className='text-gray-700 flex-start'>Della arts is a perfect place for you to get high qualiity nails services
          in a clean and perfect atmosphere.
        </p><br/>
        <p>Our experile services, bringing quality services at your home, to help you save time 
          but still get high quality nail services.
        </p>
        <div className='flex justify-start'>
        <section className='flex justify-start pt-10 pr-30 w-[150px]'>
          <FaPhoneAlt className='text-pink-400 w-[40px] h-[40px]'/>
          <div className='ml-4'>
            <h1>CALL US</h1>
            <h1>0743666719</h1>
          </div>
        </section>
        <section className='flex justify-start pt-10 pr-30 w-[150px]'>
          <FaMailBulk className='text-pink-400 w-[40px] h-[40px]'/> 
          <FaPhoneAlt className='text-pink-400 w-[40px] h-[40px]'/>
          <div className='ml-4'>
            <h1>Email Us</h1>
            <a href='gmail'>dellaarts@gmail.com</a>
          </div>
        </section>
        </div>
      </div>
    </div>
    <div className='flex justify-between h-[50vh] w-[70%] ml-[10%]'>
      <div className='bg-pink-200 w-[250px] h-[150px] pt-10'>
        <h1 className='font-bold text-xl'>ADDRESS</h1>
        <p>Charo Wamae<br/>opposite xxx </p>
      </div>
      <div className='bg-pink-200 w-[250px] h-[150px] pt-10 ml-20'>
        <h1 className='font-bold text-xl'>PHONE/EMAIL</h1>
        <p>0743666719 <br/> dellaarts@gmail.com</p>
      </div>
      <div className='bg-pink-200 w-[250px] h-[150px] pt-10 ml-20'>
        <h1 className='font-bold text-xl'>SOCIALS</h1>
        <section className='flex justify-between w-[70%] pl-[20%] mt-5'>
        <FaFacebook className='text-pink-900 text-2xl '/>
        <FaTwitter className='text-pink-900 text-2xl '/>
        <FaInstagram className='text-pink-900 text-2xl '/>
        <FaTiktok className='text-pink-900 text-2xl '/>
        </section>
      </div>
    </div>
    </>
  )
}

export default AboutUs

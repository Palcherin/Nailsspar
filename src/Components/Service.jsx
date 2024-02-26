import React from 'react'
import { FaBriefcase, FaBrush, FaExternalLinkAlt, FaHandHoldingMedical, FaPaintBrush, FaRegLaughSquint, FaTools } from 'react-icons/fa'

export const Service = () => {
  return (
    <div className='h-[30vh] px:py-5 pt-8'>
        <div className='flex justify-between w-[90%] px-[5%]'>
            <div className='flex start-0 w-[200px] text-center'>
            <FaHandHoldingMedical className='w-[50px] h-[50px] text-pink-400'/>
            <section>
                <h1 className='w-fit flex justify-evenly font-bold text-center'>  Sterile tools</h1>
                <p className='mb-[20px] text-l'>We have one use files and dry-heat sterilizers</p>
                <a href='' className='text-pink-700 decoration-pink-900'>More Info</a>
                </section>
            </div>
            <div className='flex start-0 w-[180px] text-center'>
            <FaExternalLinkAlt className='w-[50px] h-[50px] text-pink-400'/>
            <section>
                <h1  className='w-fit flex justify-evenly font-bold'> Expert staff </h1>
                <p className='mb-[20px]'>Our qualified staff works fast and safely</p>
                <a href='' className='text-pink-700 decoration-pink-900'>More Info</a>
                </section>
            </div>
            <div className='flex start-0 w-[180px] text-center'>
            <FaPaintBrush className='w-[50px] h-[50px] text-pink-400'/>
                <section>
                <h1  className='w-fit flex justify-evenly font-bold'>100+ colors </h1>
                <p className='mb-[20px]'>Choose any color polish you like</p>
                <a href='' className='text-pink-700 decoration-pink-900'>More Info</a>
                </section>
            </div>
            <div className='flex start-0 w-[180px] text-center'>
            <FaBriefcase className='w-[50px] h-[50px] text-pink-400'/>
                <section>
                <h1  className='w-fit  font-bold'> Famous Brands </h1>
                <p className='mb-[20px]'>We have the famous and quality producs.</p>
                <a href='' className='text-pink-700 decoration-pink-900 mt-5'>More Info</a>
                </section>
            </div>
        </div>
    </div>
  )
}

import React from 'react'
import { FaEnvelope, FaPhone } from 'react-icons/fa'

const Footer = () => {
  return (
    <section className='bg-sky-200 w-full flex flex-col justify-center items-center gap-8 p-8'>
        <h1 className='font-bold text-xl'>Lets connect for any opportunities.</h1>
        <div className='flex flex-row gap-4'>
            <a href="mailto:satishrajadsr@gmail.com" className='bg-sky-400 text-white rounded-lg py-2 px-4 cursor-pointer hover:bg-sky-500 flex flex-row gap-2'>
                          <FaEnvelope size={23} className="text-gray-700 hover:text-sky-600 transition" />Email Me
            </a>
            <a href="tel:7660888577" className='bg-sky-400 text-white rounded-lg py-2 px-4 cursor-pointer hover:bg-sky-500 flex flex-row gap-2'><FaPhone size={23} className="text-gray-700 hover:text-sky-600 transition" />Call Me</a>
            
        </div>
    </section>
  )
}

export default Footer

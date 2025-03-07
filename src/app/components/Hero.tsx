"use client"
import React from 'react'
import { motion } from "framer-motion";
import { CiMobile3,CiLaptop } from "react-icons/ci";


const skills = [
  { name: "JS", position: "top-40 left-60" },
  { name: "</>", position: "top-20 right-80" },
  { name: "HTML", position: "bottom-30 left-80" },
  { name: "CSS", position: "bottom-40 right-80" },
  { name: "TS", position: "top-3/5 left-1/10" },
];




const Hero = () => {
    
  return (

    <section className='bg-sky-100 h-[90vh] w-full flex flex-col items-center justify-center'>
    
      <h1 className='text-2xl w-2/3 md:w-2/4 lg:w-fit justify-center items-center'>Building Scalable, High-Performance Web Applications with <span className='text-sky-500'>MERN & Next.js</span> </h1>
      <p className='w-2/3 md:w-2/4 lg:2/5 py-4'>I&apos;m Satish Raja Dhulipala, a MERN Stack Developer specializing in React, Next.js, and Node.js. With expertise in full-stack development, performance optimization, and cloud deployment, I create fast, scalable, and user-friendly web applications.</p>
      
      {skills.map((skill, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{
            opacity: 1,
            scale: 1,
            y: [0, -10, 0], 
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            repeatType: "reverse",
            delay: index * 0.2,
          }}
          whileHover={{ scale: 1.2 }}
          className={`absolute ${skill.position} bg-white-500 text-sky-400 px-4 py-2 rounded-full w-[40px] h-[40px] flex justify-center items-center text-xs shadow-lg`}
        >
          {skill.name}
        </motion.div>
      ))}
      
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="absolute bottom-20 left-1/2 transform -translate-x-1/2 translate-y-1/2 bg-white shadow-lg rounded-2xl w-4/5 md:w-2/3 lg:w-1/2 p-6 flex flex-row gap-6 justify-center"
      >
        <span className='text-sky-500 flex flex-row gap-4'>
            {<CiLaptop size="23"/> }
            <p className='text-xs md:text-lg'>Web Applications</p>
        </span>
        <span className='text-sky-500 flex flex-row gap-4'>
            {<CiMobile3 size="23"/> }
            <p className='text-sm md:text-lg'>Mobile Responsiveness</p>
        </span>
      </motion.div>
    </section>
    
  )
}

export default Hero

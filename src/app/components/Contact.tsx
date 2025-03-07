
"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";
import Image from "next/image";
import contact from "../assets/contact.jpg";

const Contact = () => {
  return (
    <section id="contact" className="py-16 px-6 md:px-20 bg-sky-100 sm:h-[100vh] md:h-[80vh] flex items-center">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center w-full max-w-6xl mx-auto">
       
        <div className="flex flex-col items-center md:items-center text-center md:text-left">
          <h2 className="text-4xl font-bold text-sky-600 mb-6">Contact</h2>
          <div className="relative w-40 h-40 md:w-80 md:h-80 rounded-full overflow-hidden">
            <Image src={contact} alt="Profile" layout="fill" objectFit="cover" />
          </div>
          
          <div className="flex mt-6 gap-5">
            <a href="https://github.com/satishraja631" target="_blank" rel="noopener noreferrer">
              <FaGithub size={32} className="text-gray-700 hover:text-sky-600 transition" />
            </a>
            <a href="https://www.linkedin.com/in/satish-raja-dhulipala-1115b51a3" target="_blank" rel="noopener noreferrer">
              <FaLinkedin size={32} className="text-gray-700 hover:text-sky-600 transition" />
            </a>
            <a href="mailto:satishrajadsr@gmail.com">
              <FaEnvelope size={32} className="text-gray-700 hover:text-sky-600 transition" />
            </a>
          </div>
        </div>

        
        <div className="relative flex justify-center items-center w-full">
          
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 15, ease: "linear" }}
            className="relative w-72 h-72 md:w-100 md:h-100 border-4 border-sky-500 rounded-full flex justify-center items-center"
          >
            
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 15, ease: "linear" }}
              className="absolute w-full h-full"
            >
              <div className="absolute w-5 h-5 bg-sky-500 rounded-full" style={{ top: "-10px", left: "50%", transform: "translateX(-50%)" }}></div>
              <div className="absolute w-5 h-5 bg-sky-500 rounded-full" style={{ bottom: "-10px", left: "50%", transform: "translateX(-50%)" }}></div>
            </motion.div>
          </motion.div>

          
          <div className="absolute w-52 h-52 md:w-80 md:h-80 bg-sky-100 rounded-full flex flex-col items-center justify-center shadow-lg">
            
            <div className="flex flex-col items-center gap-5 text-sm">
              <div className="flex items-center gap-3 bg-white shadow-md p-4 rounded-lg w-48 md:w-72">
                <FaEnvelope className="text-sky-500" size={20} />
                <p className="text-gray-700">satishrajadsr@gmail.com</p>
              </div>
              <div className="flex items-center gap-3 bg-white shadow-md p-4 rounded-lg w-48 md:w-72">
                <FaPhone className="text-sky-500" size={20} />
                <p className="text-gray-700">+91 7660888577</p>
              </div>
              <div className="flex items-center gap-3 bg-white shadow-md p-4 rounded-lg w-48 md:w-72">
                <FaMapMarkerAlt className="text-sky-500" size={20} />
                <p className="text-gray-700">Hyderabad, India</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

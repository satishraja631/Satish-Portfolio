"use client"

import React, { useState,useEffect } from 'react'

import { FiMenu, FiX } from "react-icons/fi";

const headers=["Home","About","Experience","Projects","Contact"]

const Header = () => {
    const [activeHeaderIndex,setActiveHeaderIndex]=useState(0)
    const [menuOpen,setMenuOpen]=useState(false)
    const [isScrolled,setIsScrolled]=useState(false)
    const [isManualScroll, setIsManualScroll] = useState(false);



const scrollToSection = (index: number) => {
  const sectionId = headers[index].toLowerCase();
  const section = document.getElementById(sectionId);

  if (section) {
    setIsManualScroll(true);

    
    const navbarHeight = 80; 
    const top = section.getBoundingClientRect().top + window.scrollY - navbarHeight;

    
    window.scrollTo({ top, behavior: "smooth" });

    setTimeout(() => {
      setIsManualScroll(false);
    }, 1000); 

    setActiveHeaderIndex(index);
    setIsScrolled(true);
  }
};


  



useEffect(() => {
  if (isManualScroll) return; 

  const sections = document.querySelectorAll("section");



const observer = new IntersectionObserver(
  (entries) => {
    let maxVisible = 0;
    let newIndex = -1;

    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const visibleRatio = entry.intersectionRatio;
        if (visibleRatio > maxVisible) {
          maxVisible = visibleRatio;
          const sectionName = entry.target.id.toLowerCase();
          newIndex = headers.findIndex((header) => header.toLowerCase() === sectionName);
        }
      }
    });

    if (newIndex !== -1) {
      setActiveHeaderIndex(newIndex);
    }
  },
  {
    threshold: [0.3, 0.6, 0.9], 
    
    rootMargin:"-80px 0px -80px 0px"
  }
);


  sections.forEach((section) => observer.observe(section));

  
  const handleScroll = () => {
    setIsScrolled(window.scrollY > 20);
  };

  window.addEventListener("scroll", handleScroll);

  return () => {
    observer.disconnect();
    window.removeEventListener("scroll", handleScroll);
  };
}, [isManualScroll]);

 
  return (
    <header className={`fixed top-0 left-0 w-full flex items-center px-6 md:px-16 py-4 z-50  ${
        isScrolled ? "bg-sky-200 shadow-md" : "bg-transparent"
      } `}>
      <ul className='hidden md:flex flex-1 justify-center gap-6 md:gap-16 '>
        {headers.map((header,index)=>(
            <li key={index} className={ `pb-1 cursor-pointer transition-all duration-300 ${index===activeHeaderIndex?"text-sky-500 border-b-3  border-sky-500":""}`} onClick={() => scrollToSection(index)}>
                {header}
            </li>
        ))}
      </ul>
      

      <a href="mailto:satishrajadsr@gmail.com" className='bg-sky-400 text-white rounded-lg py-2 px-4 cursor-pointer hover:bg-sky-500 flex flex-row gap-2'>
                                   Hire Me
          </a>
      
      <button className='md:hidden text-sky-500 ml-auto mr-8' onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <FiX size={28} /> : <FiMenu size={28} />}</button>

      {menuOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-md py-4 flex flex-col items-center space-y-4 ">
          {headers.map((header, index) => (
            <button
              key={index}
              className={`text-lg w-full text-center py-2 ${
                index === activeHeaderIndex
                  ? "text-sky-500 border-b-2 border-sky-500"
                  : "text-gray-700 hover:text-sky-500"
              }`}
              onClick={() => {
                scrollToSection(index)
                setMenuOpen(false); 
              }}
            >
              {header}
            </button>
          ))}
          
         
          <a href="mailto:satishrajadsr@gmail.com" className='bg-sky-400 text-white rounded-lg py-2 px-4 cursor-pointer hover:bg-sky-500 flex flex-row gap-2'>
                            Hire Me
          </a>
        </div>
      )}
      
    </header>
  )
}

export default Header

"use client";
import React from "react";
import Image from "next/image";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import AryadhenuOne from "../assets/aryadhenuone.png";
import AryadhenuTwo from "../assets/aryadhenutwo.png";
import AryadhenuThree from "../assets/aryadhenuthree.png";
import StreamifieOne from '../assets/streamifieOne.png'
import StreamifieTwo from '../assets/streamifieTwo.png'
import StreamifieThree from '../assets/streamifieThree.png'
import TradecryptoOne from '../assets/tradecryptoOne.png'
import TradeCryptoTwo from '../assets/tradecryptoTwo.png'
import TradeCryptoThree from '../assets/tradecryptoThree.png'

const projects = [
  {
    title: "FullStack E-Commerce Website (aryadhenu.com)",
    description:
      "Aryadhenu is an eCommerce platform for organic and natural products, built using the MERN stack. It features a dynamic product catalog, cart & checkout system, secure payment integration, and order tracking. Optimized for performance, the platform achieved 30% faster page loads and was deployed on DigitalOcean for scalability.",
    technologies: ["React.js", "Node.js", "MongoDB", "Digital Ocean"],
    images: [AryadhenuOne, AryadhenuTwo, AryadhenuThree],
    github: "https://github.com/satishraja631",
    live: "https://aryadhenu.com",
  },
  {
    title: "Streamifie Analytics Dashboard for Music Streaming",
    description:
      "Streamify is a music streaming analytics dashboard designed to analyze user engagement and streaming trends. Built with React, Redux Toolkit, TypeScript, Tailwind CSS, and Vite, it offers a fast and interactive UI. The dashboard features real-time data visualization using Chart.js, leveraging mock data to showcase key insights effectively.",
    technologies: ["React.js", "Tailwind CSS", "Chart.js"],
    images: [StreamifieOne,StreamifieTwo,StreamifieThree],
    github: "https://github.com/satishraja631/Streamify-Dashboard",
    live: "https://streamifie.netlify.app/",
  },
  {
    title: "TradeCrypto – Real-Time Cryptocurrency Tracking Platform",
    description:
      "TradeCrypto is a real-time cryptocurrency tracking platform that provides live price updates and historical data. Built using WebSockets and third-party APIs, it ensures accurate and up-to-date market insights. The platform features an intuitive UI with responsive design, offering a seamless user experience for tracking crypto trends.",
    technologies: ["React.js", "CSS", "Chart.js"],
    images: [TradecryptoOne,TradeCryptoTwo,TradeCryptoThree],
    github: "https://github.com/satishraja631/TradeCrypto",
    live: "https://tradexcrypto.netlify.app/",
  },
];

const Projects = () => {
  return (
    <section className="py-16 px-6 md:px-20 bg-gray-100 max-w-[100vw] overflow-hidden">
      <h1 className="text-3xl font-bold text-center mb-8 text-sky-600">
        Projects
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition duration-300"
          >
            
            <div className="grid grid-cols-3 gap-1">
              {project.images.map((img, imgIndex) => (
                <div key={imgIndex} className="relative w-full h-[150px] md:h-[300px]">
                  <Image
                    src={img}
                    alt={`${project.title} Image ${imgIndex + 1}`}
                    layout="fill"
                    objectFit="stretch"
                    className="rounded-t-lg"
                  />
                </div>
              ))}
            </div>

           
            <div className="p-6">
              <h2 className="text-xl font-semibold text-gray-800">
                {project.title}
              </h2>
              <p className="text-gray-600 mt-2">{project.description}</p>

             
              <div className="flex flex-wrap mt-4 gap-2">
                {project.technologies.map((tech, i) => (
                  <span
                    key={i}
                    className="bg-sky-100 text-sky-600 px-3 py-1 text-sm rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              
              <div className="flex mt-4 gap-4">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-gray-800 hover:text-sky-600"
                >
                  <FaGithub size={20} />
                  GitHub
                </a>
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-gray-800 hover:text-sky-600"
                >
                  <FaExternalLinkAlt size={18} />
                  Live Demo
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;




import React from 'react'
import { BsPersonWorkspace } from "react-icons/bs";
import { MdWorkspacePremium } from "react-icons/md";

const experiences = [
  { role: "Senior System Engineer", company: "Infosys" },
  { role: "FullStack Developer", company: "Aryadhenu" }
];

const achievements = [
  { award: "Raise Award", company: "Infosys" },
  { award: "Client Appreciations", company: "Elsevier" }
];

const Experience = () => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 bg-sky-100 w-full gap-8 px-6 md:px-10 lg:px-40 py-10 md:py-20 max-w-[100vw] overflow-hidden">
      
    
      <div className="flex flex-col text-left">
        <h1 className="font-bold text-2xl md:text-3xl pb-6">Experience</h1>
        <ul className="flex flex-col gap-4">
          {experiences.map((experience, index) => (
            <li
              key={index}
              className="bg-white  p-4 rounded-lg flex items-center gap-4 shadow-lg cursor-pointer hover:scale-105 transition-transform duration-300 hover:shadow-xl"
            >
              <div className="text-sky-400 bg-sky-100 w-10 h-10 flex justify-center items-center rounded-lg">
                <BsPersonWorkspace size={24} />
              </div>
              <div className="flex flex-col">
                <h1 className="text-sky-500 font-semibold text-lg">{experience.role}</h1>
                <p className="text-gray-600">{experience.company}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>

      
      <div className="flex flex-col text-left">
        <h1 className="font-bold text-2xl md:text-3xl pb-6">Achievements</h1>
        <ul className="flex flex-col gap-4">
          {achievements.map((achievement, index) => (
            <li
              key={index}
              className="bg-white p-4 rounded-lg flex items-center gap-4 shadow-lg cursor-pointer hover:scale-105 transition-transform duration-300 hover:shadow-xl"
            >
              <div className="text-sky-400 bg-sky-100 w-10 h-10 flex justify-center items-center rounded-lg">
                <MdWorkspacePremium size={24} />
              </div>
              <div className="flex flex-col">
                <h1 className="text-sky-500 font-semibold text-lg">{achievement.award}</h1>
                <p className="text-gray-600">{achievement.company}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>

    </section>
  );
}

export default Experience;


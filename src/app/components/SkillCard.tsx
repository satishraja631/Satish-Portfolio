import React from "react";

const skills = [
  { name: "React.js", proficiency: 9 },
  { name: "Next.js", proficiency: 8 },
  { name: "JavaScript", proficiency: 9 },
  { name: "TypeScript", proficiency: 8 },
  { name: "Node.js", proficiency: 9 },
  { name: "Express.js", proficiency: 7 },
  { name: "MongoDB", proficiency: 6 },
  { name: "SQL", proficiency: 7 },
  {name:"Tailwind CSS", proficiency:7}
];

const SkillCard = ({ skill }: { skill: { name: string; proficiency: number } }) => {
  return (
    <div className="relative w-full sm:w-[40%] md:w-[30%] lg:w-[25%] bg-white rounded-lg overflow-hidden shadow-lg cursor-pointer hover:scale-105 transition-transform duration-300 hover:shadow-xl">
     
      <div
        className="absolute top-0 left-0 h-full bg-sky-300 "
        style={{ width: `${skill.proficiency * 10}%` }}
      ></div>
     
      <div className="relative p-3  font-semibold text-white md:text-sm">{skill.name}</div>
    </div>
  );
};

const Skills = () => {
  return (
    <section className="py-10 px-1 max-w-[100vw] overflow-hidden">
      <p className="font-bold text-left">Skills:</p>
      <div className="flex flex-wrap gap-4 py-4">
       
        {skills.map((skill, index) => (
          <SkillCard key={index} skill={skill} />
        ))}
      </div>
    </section>
  );
};

export default Skills;

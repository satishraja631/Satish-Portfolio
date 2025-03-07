import Image from "next/image";
import Avatar from '../assets/Avatar.png'
import Skills from "./SkillCard";

export default function About(){

    return(
        <section className="grid grid-cols-1 mt-[100px] md:grid-cols-[2fr_3fr] sm:h-fit md:h-[90vh] items-center gap-8 px-8 md:px-16  md:mt-[50px] max-w-[100vw] overflow-hidden">
            <div className="flex justify-center relative">
            <Image src={Avatar} alt="User Avatar" width={250} height={250} className="bg-sky-200 rounded-full "/>
            <div className="absolute bottom-[-20px] bg-white w-[220px] h-[50px] rounded-lg shadow-md flex flex-col justify-center items-center border border-gray-200">
                    <p className="font-bold">Satish Raja</p>
                    <p className="text-sky-400 font-semibold">FullStack Web Developer</p>
                </div>
            
            </div>
            <div className="flex flex-col">
                <h1 className="text-black font-bold text-xl py-4">Hello,<span className="text-sky-400"> I&apos;m Satish Raja</span></h1>
                <p>MERN Stack Developer with expertise in React.js, Next.js, Node.js, and AWS. I specialize in building scalable, high-performance web applications, optimizing frontend and backend efficiency, and implementing secure authentication, API integrations (REST & GraphQL), and cloud deployments. With strong skills in state management, performance tuning, CI/CD automation, and database optimization, I create seamless, fast, and user-friendly digital experiences. Passionate about clean architecture and cutting-edge technologies, I continuously refine my skills to deliver efficient and scalable solutions.</p>
                <Skills/>
            </div>
        </section>
    )
}

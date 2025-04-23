import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaNodeJs,
  FaGithub,
  FaGitAlt,
  FaFigma,
  FaNode,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiBootstrap,
  SiNetlify,
  SiMongodb,
  SiKubernetes,
  SiDocker,
  SiJenkins,
  SiAnsible,
} from 'react-icons/si';
import { TbBrandFramerMotion } from "react-icons/tb";
import { DiVisualstudio } from "react-icons/di";
import { IoLogoNpm, IoLogoVercel } from "react-icons/io5";

const About = () => {
  return (
    <div id="about" className="bg-[#ffffff] min-h-screen flex items-center">
      <div className="max-w-[90%] md:max-w-[75%] mx-auto font-inter space-y-10 py-10">
        {/* Header */}
        <h1 className="text-4xl md:text-5xl font-bold text-center text-[#fe5617]">
          About Me
        </h1>

        {/* About Me Section */}
        <p className="text-lg md:text-xl text-gray-700 text-center leading-relaxed">
          I’m <span className="font-bold text-[#fe5617]">Sanjeevi Ram</span>,
          A passionate Artificial Intelligence and Data Science student with a strong foundation in web development, design, and machine learning. 
          I specialize in building creative, user-focused solutions—ranging from intelligent systems to visually compelling websites. 
          With a deep interest in blending technology and design, I aim to deliver innovative digital experiences that are both functional and aesthetically engaging.
          <span className="font-bold text-[#fe5617]"> Participated 3+ Hackathons</span>, gaining hands-on experience in solving real-world problems 
          through innovative tech solutions and teamwork under pressure.
          <span className="font-bold text-[#fe5617]"> presented 2+ technical papers</span> ,including topics 
          on lane and curve detection 
          for autonomous systems and Ethereum-based transaction models 
          for secure e-Panchayat governance.
        </p>

        {/* Skills Section */}
        <div className="space-y-8">
          <h2 className="text-2xl font-bold text-[#fe5617] text-center">
            My Skills
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {/* Skill Icons */}
            <div className="flex flex-col items-center space-y-2">
              <FaHtml5 size={40} className="text-[#e34c26]" />
              <span className="font-bold">HTML5</span>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <FaCss3Alt size={40} className="text-[#264de4]" />
              <span className="font-bold">CSS3</span>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <FaJsSquare size={40} className="text-[#f7df1e]" />
              <span className="font-bold">JavaScript</span>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <SiBootstrap size={40} className="text-[#563d7c]" />
              <span className="font-bold">Bootstrap</span>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <SiTailwindcss size={40} className="text-[#38bdf8]" />
              <span className="font-bold">Tailwind CSS</span>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <FaReact size={40} className="text-[#61dbfb]" />
              <span className="font-bold">React.js</span>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <SiMongodb size={40} className="text-[#68a063]" />
              <span className="font-bold">MongoDB</span>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <SiDocker size={40} className="text-[#000000]" />
              <span className="font-bold">Docker</span>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <SiKubernetes size={40} className="text-[#47a248]" />
              <span className="font-bold">Kubernetes</span>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <SiAnsible size={40} className="text-black" />
              <span className="font-bold">Ansible</span>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <SiJenkins size={40} className="text-[#010101]" />
              <span className="font-bold">Jenkins</span>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <FaGitAlt size={40} className="text-[#f05032]" />
              <span className="font-bold">Git</span>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <FaGithub size={40} className="text-black" />
              <span className="font-bold">GitHub</span>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <DiVisualstudio size={40} className="text-[#0078d7]" />
              <span className="font-bold">VS Code</span>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <SiNetlify size={40} className="text-[#00d1b2]" />
              <span className="font-bold">Netlify</span>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <FaFigma size={40} className="text-[#F24E1E]" />
              <span className="font-bold">Figma</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

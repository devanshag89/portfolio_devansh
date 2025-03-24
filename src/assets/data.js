import React from "react";
import { 
  FaCode, 
  FaPalette, 
  FaReact, 
  FaJs, 
  FaJava, 
  FaNodeJs, 
  FaGitAlt, 
  FaPython,
  FaHtml5
} from 'react-icons/fa';
import { 
  SiTailwindcss, 
  SiMongodb, 
  SiPostman, 
  SiMysql, 
  SiC,
  SiExpress
} from 'react-icons/si';
import portfolio from "../images/portfolio.png";
import bankImage from "../images/bankImage.png";

const BOOTSTRAP_FOR_SKILL_ICON = "text-4xl mx-auto inline-block";
const data = {
  name: "Devansh Agrawal",
  title: "Programmer + Developer",
  social: {
    github: "https://github.com/devanshag89",
    dribbble: "https://github.com/BraydenTW",
    LinkedIn: "https://www.linkedin.com/in/devansh-agrawal-5484a7230?utm",
    email: "devanshagrawal511@gmail.com",
    phone: "9984758472",
    add: "336, Indeever Nagar, Barwasagar, Jhansi, U.P. (284201)"
  },
  about: {
    title: "My Background",
    description:
      "Hi, my name is Devansh Agrawal, and I'm from Jhansi, Uttar Pradesh, India. I'm a B.Tech Computer Science student, graduating in 2026, with a strong passion for technology and software development. As a Full-Stack Developer, I enjoy tackling challenges and continuously expanding my skill set. I'm proficient in JavaScript and have experience with C, Java, and Python. I specialize in MERN stack development, Node.js, MySQL, and modern frameworks like React.js. I'm also interested in AI and building innovative web technologies. With strong problem-solving skills and a quick learning ability, I'm eager to contribute to impactful projects in the tech industry.",
  },
  skills : [
    {
      skillName: "Frontend",
      skillIcon: <FaCode className={BOOTSTRAP_FOR_SKILL_ICON} />,
    },
    {
      skillName: "Design/UX",
      skillIcon: <FaPalette className={BOOTSTRAP_FOR_SKILL_ICON} />,
    },
    {
      skillName: "HTML",
      skillIcon: <FaHtml5 className={BOOTSTRAP_FOR_SKILL_ICON} />,
    },
    {
      skillName: "React.js",
      skillIcon: <FaReact className={BOOTSTRAP_FOR_SKILL_ICON} />,
    },
    {
      skillName: "JavaScript",
      skillIcon: <FaJs className={BOOTSTRAP_FOR_SKILL_ICON} />,
    },
    {
      skillName: "Java",
      skillIcon: <FaJava className={BOOTSTRAP_FOR_SKILL_ICON} />,
    },
    {
      skillName: "Python",
      skillIcon: <FaPython className={BOOTSTRAP_FOR_SKILL_ICON} />,
    },
    {
      skillName: "C",
      skillIcon: <SiC className={BOOTSTRAP_FOR_SKILL_ICON} />,
    },
    {
      skillName: "Tailwind CSS",
      skillIcon: <SiTailwindcss className={BOOTSTRAP_FOR_SKILL_ICON} />,
    },
    {
      skillName: "Node.js",
      skillIcon: <FaNodeJs className={BOOTSTRAP_FOR_SKILL_ICON} />,
    },
    {
      skillName: "Express.js",
      skillIcon: <SiExpress className={BOOTSTRAP_FOR_SKILL_ICON} />,
    },
    {
      skillName: "MySQL",
      skillIcon: <SiMysql className={BOOTSTRAP_FOR_SKILL_ICON} />,
    },
    {
      skillName: "MongoDB Compass",
      skillIcon: <SiMongodb className={BOOTSTRAP_FOR_SKILL_ICON} />,
    },
    {
      skillName: "Git",
      skillIcon: <FaGitAlt className={BOOTSTRAP_FOR_SKILL_ICON} />,
    },
    {
      skillName: "Postman",
      skillIcon: <SiPostman className={BOOTSTRAP_FOR_SKILL_ICON} />,
    },
  ],
  projects: [
    {
      title: "React tailwind portfolio",
      image: portfolio,
      description: "👨‍🎨 An open-source portfolio template built with React and Tailwind.",
      tags: [
        "portfolio",
        "reactjs",
        "tailwindcss"
      ],
      link: "https://github.com/braydentw/react-tailwind-portfolio"
    },
    {
      title: "Bank Management System",
      description: "Full stack project built with PHP & MySQL",
      image: bankImage,
      tags: [
        "PHP",
        "MySQL",
        "HTML",
        "tailwindcss"
      ],
      link: "https://github.com/devanshag89/Bank-Project"
    },
    {
      title: "Bank Management System",
      description: "Full stack project built with PHP & MySQL",
      image: bankImage,
      tags: [
        "PHP",
        "MySQL",
        "HTML",
        "tailwindcss"
      ],
      link: "https://github.com/devanshag89/Bank-Project"
    }
  ],

  navbar:[
    {
      title: "Home",
      path: "/",
    },
    {
      title: "About",
      path: "/about",
    },
    {
      title: "Projects",
      path: "/projects",
    },
    {
      title: "Skills",
      path: "/skills",
    }
  ],
};
export default data;
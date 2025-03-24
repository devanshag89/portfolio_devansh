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
import agrobooster from "../images/agrobooster.png"
import expense from "../images/expense.png"
import talent from "../images/talent.png"

const BOOTSTRAP_FOR_SKILL_ICON = "text-4xl mx-auto inline-block";
const data = {
  name: "Devansh Agrawal",
  title: "Programmer + Developer",
  social: {
    github: "https://github.com/devanshag89",
    LinkedIn: "https://www.linkedin.com/in/devansh-agrawal-5484a7230?utm",
    email: "devanshagrawal270167@gmail.com",
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
      title: "Personal Expense Tracker",
      description: "The MERN stack-based Expense Tracker is a full-stack web application that enables users to efficiently track their monthly and yearly transactions while gaining insights through dynamic data visualizations. Built with MongoDB, Express.js, React.js, and Node.js, the application leverages Chart.js to present Pie Charts, Bar Charts, and Line Charts, helping users analyze their spending patterns with clear graphical representations. It features user-specific transaction history, ensuring personalized expense tracking and seamless data management. This project showcases expertise in full-stack development, data visualization, and backend-frontend integration, enhancing financial awareness through an interactive and intuitive interface. ",
      image: expense,
      tags: [
        "MERN Stack",
        "Chart.js",
        "tailwindcss",
        "OTP Verification"
      ],
      link: "https://github.com/devanshag89/ExpenseTracker"
    },
    {
      title: "AgroBooster",
      image: agrobooster,
      description: "The Generative AI-based AgroBooster is an advanced agricultural solution that leverages AI to analyze soil reports, weather conditions, and environmental factors for accurate crop predictions with 80% precision, optimizing agricultural yield. Built with React.js and Tailwind CSS, the platform ensures a seamless user experience while incorporating JWT-based authentication, OTP verification via Fast2SMS API, and multi-language support using the Google Translate API for accessibility and security. This project demonstrates expertise in AI-driven analytics, secure authentication, API integration, and scalable web application development, contributing to smarter and more efficient farming solutions.",
      tags: [
        "Flask",
        "React.js",
        "tailwindcss",
        "Generative AI",
        "MongoDB",
      ],
      link: "https://github.com/devanshag89/Innovative_Incubators_AgroBooster"
    },
    {
      title: "ShowcaseX",
      image: talent,
      description: "ShowcaseX is a secure backend solution built with Node.js and MongoDB to streamline talent registration, admin approval, and hire request management, ensuring efficient workflow automation. It enhances platform security through JWT-based authentication, email verification via Nodemailer, and role-based access control, providing a seamless and protected user experience. This project showcases expertise in backend development, authentication mechanisms, API security, and workflow automation, enabling a reliable and scalable talent management system.",
      tags: [
        "MERN Stack",
        "Nodemailer",
        "tailwindcss",
        "JWT Token"
      ],
      link: "https://github.com/devanshag89/Innovative_Incubators_advitiyaXjpd"
    },
    {
      title: "My Personal Portfolio",
      image: portfolio,
      description: "My personal portfolio is a sleek and modern web application built using React and Tailwind CSS, designed to showcase my skills, projects, and experience in an interactive and visually appealing manner. It features a responsive UI, smooth navigation, and dynamic components to enhance user experience. The portfolio highlights my expertise in full-stack development, problem-solving, and modern web technologies, serving as a digital resume that reflects my growth and achievements in the tech industry.",
      tags: [
        "portfolio",
        "reactjs",
        "tailwindcss"
      ],
      link: "https://github.com/braydentw/react-tailwind-portfolio"
    },
    {
      title: "Digital Banking System",
      description: "The Digital Banking System is a secure web application designed to handle essential banking operations like deposits, withdrawals, and transfers, ensuring smooth transactions and data integrity. Built using HTML, Tailwind CSS, PHP, and MySQL, the project follows clean, modular, and maintainable coding practices, with Git for version control. It features user authentication, real-time balance updates, and efficient transaction management, demonstrating skills in full-stack development, backend-frontend integration, problem-solving, and independent project execution. This project highlights expertise in secure web application development and practical experience in financial systems. ",
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
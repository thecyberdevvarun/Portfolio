import { FaCode, FaLaptopCode, FaRocket } from "react-icons/fa";
import {
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3,
  FaBootstrap,
  FaGit,
  FaGithub,
  FaLinux,
  FaPython,
  FaJava,
  FaDocker,
  FaNetworkWired,
  FaServer,
} from "react-icons/fa";
import {
  SiJavascript,
  SiTypescript,
  SiNextdotjs,
  SiExpress,
  SiMongodb,
  SiMysql,
  SiTailwindcss,
  SiRedux,
  SiReactquery,
  SiIntellijidea,
  SiCplusplus,
  SiPostman,
} from "react-icons/si";

import { VscVscode } from "react-icons/vsc";

export const assets = {
  Profile: "/assets/Profile.jpg",
  Resume: "/assets/Varun_Yadav_Resume.pdf",
  LeetCode: "/assets/LeetCode_logo.png",
  Gfg: "/assets/Gfg_logo.svg",
  CodingNinjas: "/assets/CodingNinjas_logo.svg",
  taniyawebfix_logo: "/assets/taniyawebfix_logo.webp",
  western_refrigeration_logo: "/assets/western_refrigeration_logo.png",
};

export const Expertise = [
  {
    icon: FaCode,
    title: "Web Development",
    description:
      "Creating responsive and dynamic web applications using modern technologies.",
  },
  {
    icon: FaLaptopCode,
    title: "Full Stack Solutions",
    description:
      "End-to-end development with expertise in MERN stack and cloud technologies.",
  },
  {
    icon: FaRocket,
    title: "Performance Optimization",
    description:
      "Delivering high-performance, scalable, and efficient web solutions.",
  },
];

export const skills = [
  // Frontend Skills
  {
    name: "JavaScript",
    icon: SiJavascript,
    category: "Frontend",
    proficiency: 90,
    color: "bg-yellow-500",
    textColor: "text-yellow-500",
  },
  {
    name: "TypeScript",
    icon: SiTypescript,
    category: "Frontend",
    proficiency: 55,
    color: "bg-blue-600",
    textColor: "text-blue-600",
  },
  {
    name: "React",
    icon: FaReact,
    category: "Frontend",
    proficiency: 85,
    color: "bg-blue-400",
    textColor: "text-blue-400",
  },
  {
    name: "Next.js",
    icon: SiNextdotjs,
    category: "Frontend",
    proficiency: 45,
    color: "bg-black",
    textColor: "text-black",
  },
  {
    name: "HTML5",
    icon: FaHtml5,
    category: "Frontend",
    proficiency: 95,
    color: "bg-orange-500",
    textColor: "text-orange-500",
  },
  {
    name: "CSS3",
    icon: FaCss3,
    category: "Frontend",
    proficiency: 90,
    color: "bg-blue-600",
    textColor: "text-blue-600",
  },
  {
    name: "Tailwind CSS",
    icon: SiTailwindcss,
    category: "Frontend",
    proficiency: 90,
    color: "bg-teal-500",
    textColor: "text-teal-500",
  },
  {
    name: "Bootstrap",
    icon: FaBootstrap,
    category: "Frontend",
    proficiency: 80,
    color: "bg-purple-600",
    textColor: "text-purple-600",
  },
  {
    name: "Redux",
    icon: SiRedux,
    category: "Frontend",
    proficiency: 75,
    color: "bg-purple-400",
    textColor: "text-purple-400",
  },
  {
    name: "React Query",
    icon: SiReactquery,
    category: "Frontend",
    proficiency: 65,
    color: "bg-red-500",
    textColor: "text-red-500",
  },
  // Backend Skills
  {
    name: "Node.js",
    icon: FaNodeJs,
    category: "Backend",
    proficiency: 80,
    color: "bg-green-600",
    textColor: "text-green-600",
  },
  {
    name: "Express.js",
    icon: SiExpress,
    category: "Backend",
    proficiency: 85,
    color: "bg-gray-700",
    textColor: "text-gray-700",
  },
  // Database Skills
  {
    name: "MongoDB",
    icon: SiMongodb,
    category: "Database",
    proficiency: 85,
    color: "bg-green-500",
    textColor: "text-green-500",
  },
  {
    name: "MySQL",
    icon: SiMysql,
    category: "Database",
    proficiency: 80,
    color: "bg-blue-700",
    textColor: "text-blue-700",
  },
  // Programming Languages
  {
    name: "Python",
    icon: FaPython,
    category: "Programming",
    proficiency: 75,
    color: "bg-blue-600",
    textColor: "text-blue-600",
  },
  {
    name: "C++",
    icon: SiCplusplus,
    category: "Programming",
    proficiency: 65,
    color: "bg-blue-500",
    textColor: "text-blue-500",
  },
  {
    name: "Java",
    icon: FaJava,
    category: "Programming",
    proficiency: 85,
    color: "bg-red-600",
    textColor: "text-red-600",
  },
  // Tools
  {
    name: "Git",
    icon: FaGit,
    category: "Tools",
    proficiency: 90,
    color: "bg-orange-600",
    textColor: "text-orange-600",
  },
  {
    name: "GitHub",
    icon: FaGithub,
    category: "Tools",
    proficiency: 95,
    color: "bg-gray-800",
    textColor: "text-gray-800",
  },
  {
    name: "VS Code",
    icon: VscVscode,
    category: "Tools",
    proficiency: 95,
    color: "bg-blue-500",
    textColor: "text-blue-500",
  },
  {
    name: "IntelliJ IDEA",
    icon: SiIntellijidea,
    category: "Tools",
    proficiency: 85,
    color: "bg-purple-600",
    textColor: "text-purple-600",
  },
  {
    name: "Docker",
    icon: FaDocker,
    category: "Tools",
    proficiency: 80,
    color: "bg-blue-400",
    textColor: "text-blue-400",
  },
  {
    name: "Linux",
    icon: FaLinux,
    category: "Tools",
    proficiency: 75,
    color: "bg-gray-700",
    textColor: "text-gray-700",
  },

  // Add Postman
  {
    name: "Postman",
    icon: SiPostman,
    category: "Tools",
    proficiency: 85,
    color: "bg-orange-500",
    textColor: "text-orange-500",
  },

  // API-related skill
  {
    name: "API ",
    icon: FaNetworkWired,
    category: "Tools",
    proficiency: 85,
    color: "bg-green-600",
    textColor: "text-green-600",
  },
];

export const projects = [
  // Personal Projects.

  // Full Stack
  {
    title: "BookStore 📚",
    description:
      "A comprehensive MERN stack bookstore application with user authentication, book categorization, and adaptive light/dark mode interface.",
    technologies: [
      "React.js",
      "Tailwind CSS",
      "Node.js",
      "Express",
      "MongoDB",
      "Mongoose",
    ],
    category: "Full Stack",
    githubLink: "https://github.com/thecyberdevvarun/BookStore-App",
    liveLink: "#",
    icon: FaNodeJs,
  },
  {
    title: "EasyShoppe",
    description:
      "A full-featured e-commerce platform with user authentication, product management, cart functionality, and integrated payment gateways.",
    technologies: [
      "React.js",
      "Tailwind CSS",
      "Node.js",
      "Express",
      "MongoDB",
      "Mongoose",
      "Stripe",
      "Razorpay",
      "Vercel",
    ],
    category: "Full Stack",
    githubLink: "https://github.com/thecyberdevvarun/EasyShoppe",
    liveLink: "https://easy-shoppe.vercel.app/",
    icon: FaNodeJs,
  },
  {
    title: "AlphaDev",
    description:
      "A feature-rich blogging platform with responsive design, dark mode, advanced search, and secure authentication using JWT and Google OAuth.",
    technologies: [
      "React.js",
      "Tailwind CSS",
      "Redux Toolkit",
      "Google OAuth",
      "Node.js",
      "Express",
      "MongoDB",
      "Mongoose",
      "Render",
    ],
    category: "Full Stack",
    githubLink: "https://github.com/thecyberdevvarun/AlphaDev",
    liveLink: "#",
    icon: FaNodeJs,
  },
  {
    title: "ChatGPT Clone",
    description:
      "An AI-powered chatbot application with real-time chat, image recognition, and seamless API integrations using Google Gemini and Clerk Authentication.",
    technologies: [
      "React.js",
      "Tailwind CSS",
      "React Query",
      "Clerk Authentication",
      "Node.js",
      "Express",
      "MongoDB",
      "Mongoose",
      "Google Gemini API",
      "ImageKit",
    ],
    category: "Full Stack",
    githubLink: "https://github.com/thecyberdevvarun/AlphaAI",
    liveLink: "#",
    icon: FaNodeJs,
  },
  {
    title: "Learn Hub 🌐 - Full Stack Course Platform 📚",
    description:
      "An interactive online learning platform with course management, user progress tracking, and integrated payment system using Stripe",
    technologies: [
      "React.js",
      "Tailwind CSS",
      " Redux Toolkit",
      "Node.js",
      "Express",
      "MongoDB",
      "Mongoose",
      "Stripe",
      "Vercel",
    ],
    category: "Full Stack",
    githubLink: "https://github.com/thecyberdevvarun/LearnHub",
    liveLink: "#",
    icon: FaNodeJs,
  },
  // Backend
  {
    title: "CRUD API 🍃",
    description:
      "A lightweight Node.js and Express API for efficient database operations with MongoDB, demonstrating RESTful design principles.",
    technologies: ["JavaScript", "Node.js", "Express", "MongoDB", "Mongoose"],
    category: "Backend",
    githubLink: "https://github.com/thecyberdevvarun/CRUD-API/",
    liveLink: "#",
    icon: FaServer,
  },

  // Frontend
  {
    title: "TextUtils",
    description:
      "A React-based text manipulation utility offering word counting, case conversion, and text formatting features.",
    technologies: ["HTML", "CSS", "JavaScript", "React"],
    category: "Frontend",
    githubLink: "https://github.com/thecyberdevvarun/TextUtils",
    liveLink: "https://thecyberdevvarun.github.io/TextUtils/",
    icon: FaLaptopCode,
  },
  {
    title: "LinkedIn UI Clone",
    description:
      "A frontend UI clone of LinkedIn to practice HTML, CSS, and JavaScript.",
    technologies: ["HTML", "CSS", "JavaScript", "GitHub"],
    category: "Frontend",
    githubLink: "https://github.com/thecyberdevvarun/LinkedIn-UI-Clone",
    liveLink: "https://thecyberdevvarun.github.io/LinkedIn-UI-Clone/",
    icon: FaLaptopCode,
  },
  {
    title: "Mind Bubble Game",
    description:
      "A fast-paced bubble-hitting game with a 1-minute timer challenge.",
    technologies: ["HTML", "CSS", "JavaScript", "GitHub"],
    category: "Frontend",
    githubLink: "https://github.com/thecyberdevvarun/Mind-Bubble-Game/",
    liveLink: "https://thecyberdevvarun.github.io/Mind-Bubble-Game/",
    icon: FaLaptopCode,
  },
  {
    title: "Currency Converter",
    description:
      "A real-time currency conversion tool using the latest exchange rates.",
    technologies: ["HTML", "CSS", "JavaScript", "GitHub"],
    category: "Frontend",
    githubLink: "https://github.com/thecyberdevvarun/Currency-Converter/",
    liveLink: "https://thecyberdevvarun.github.io/Currency-Converter/",
    icon: FaLaptopCode,
  },
  {
    title: "BMI Calculator",
    description:
      "A simple tool to calculate Body Mass Index (BMI) based on height and weight.",
    technologies: ["HTML", "CSS", "JavaScript", "GitHub"],
    category: "Frontend",
    githubLink: "https://github.com/thecyberdevvarun/BMI-Calculator/",
    liveLink: "https://thecyberdevvarun.github.io/BMI-Calculator/",
    icon: FaLaptopCode,
  },
  {
    title: "Statistics Wizard",
    description:
      "A tool for quick Mean, Median, and Mode calculations for datasets.",
    technologies: ["HTML", "CSS", "JavaScript", "GitHub"],
    category: "Frontend",
    githubLink: "https://github.com/thecyberdevvarun/Statistics-Wizard/",
    liveLink: "https://thecyberdevvarun.github.io/Statistics-Wizard/",
    icon: FaLaptopCode,
  },
  {
    title: "BMR Calculator",
    description:
      "Estimates daily calorie needs based on age, gender, weight, and height.",
    technologies: ["HTML", "CSS", "JavaScript", "GitHub"],
    category: "Frontend",
    githubLink: "https://github.com/thecyberdevvarun/BMR-Calculator/",
    liveLink: "https://thecyberdevvarun.github.io/BMR-Calculator/",
    icon: FaLaptopCode,
  },
  {
    title: "My Calculator",
    description:
      "A functional web-based calculator for basic arithmetic operations.",
    technologies: ["HTML", "CSS", "JavaScript", "GitHub"],
    category: "Frontend",
    githubLink: "https://github.com/thecyberdevvarun/My-Calculator/",
    liveLink: "https://thecyberdevvarun.github.io/My-Calculator/",
    icon: FaLaptopCode,
  },
  {
    title: "Stone, Paper, Scissors Game",
    description:
      "A classic game where you compete against a computer-generated move.",
    technologies: ["HTML", "CSS", "JavaScript", "GitHub"],
    category: "Frontend",
    githubLink: "https://github.com/thecyberdevvarun/Stone-Paper-Scissor/",
    liveLink: "https://thecyberdevvarun.github.io/Stone-Paper-Scissor/",
    icon: FaLaptopCode,
  },
  {
    title: "My Mini Calendar",
    description: "A simple and interactive mini calendar for scheduling tasks.",
    technologies: ["HTML", "CSS", "JavaScript", "GitHub"],
    category: "Frontend",
    githubLink: "https://github.com/thecyberdevvarun/My-Mini-Calendar/",
    liveLink: "https://thecyberdevvarun.github.io/My-Mini-Calendar/",
    icon: FaLaptopCode,
  },
  {
    title: "Parallax Nature Website",
    description:
      "A visually engaging static website showcasing parallax scrolling effects with modern web design principles.",
    technologies: ["HTML", "CSS", "Netlify"],
    category: "Frontend",
    githubLink: "https://github.com/thecyberdevvarun/Parallax-Nature-Website/",
    liveLink: "https://parallaxnaturewebsite.netlify.app/",
    icon: FaLaptopCode,
  },
  {
    title: "Tic-Tac-Toe Game",
    description:
      "A classic two-player game implemented with vanilla JavaScript, demonstrating interactive web application development.",
    technologies: ["HTML", "CSS", "JavaScript", "GitHub"],
    category: "Frontend",
    githubLink: "https://github.com/thecyberdevvarun/Tic-tac-toe/",
    liveLink: "https://thecyberdevvarun.github.io/Tic-tac-toe/",
    icon: FaLaptopCode,
  },
  {
    title: "Tribute website",
    description:
      "A simple, responsive static website honoring A.P.J Abdul Kalam, showcasing basic web development skills.",
    technologies: ["HTML", "CSS", "Netlify"],
    category: "Frontend",
    githubLink:
      "https://github.com/thecyberdevvarun/A.P.J-Abdul-Kalam-Tribute-website",
    liveLink: "https://abdulkalamtributeweb.netlify.app/",
    icon: FaLaptopCode,
  },

  // Company Projects.
  {
    title: "WRL Tool Report Dashboard",
    description:
      "An enterprise-grade manufacturing reporting and management dashboard built for Western Refrigeration Pvt. Ltd., featuring production tracking, quality monitoring, dispatch management, compliance workflows, visitor management, audit reporting.",
    technologies: [
      "React.js",
      "Vite",
      "Tailwind CSS",
      "Redux Toolkit",
      "React Router",
      "Node.js",
      "Express.js",
      "MSSQL",
      "JWT Authentication",
      "Docker",
      "Chart.js",
      "ExcelJS",
      "jsPDF",
      "Nodemailer",
    ],
    category: "Full Stack",
    company: "Western Refrigeration Pvt. Ltd",
    githubLink: "https://github.com/Varunyadavgithub/WRL-Tool-Report-Dashboard",
    liveLink: "#",
    icon: FaServer,
  },
  {
    title: "Refrigerator/Washing Machine Repair Service",
    description:
      "Fast, reliable, and affordable repair solutions for all your essential appliances.",
    technologies: ["React.js", "Tailwind CSS"],
    category: "Frontend",
    company: "Taniya Webfix Pvt. Ltd",
    githubLink: "#",
    liveLink: "https://rapidexpert.in",
    icon: FaLaptopCode,
  },
  {
    title: "AC Repair & Services",
    description:
      "Expert AC repair services to keep your air conditioner running smoothly and efficiently.",
    technologies: ["React.js", "Tailwind CSS"],
    category: "Frontend",
    company: "Taniya Webfix Pvt. Ltd",
    githubLink: "#",
    liveLink: "https://vadodaraaircon.com",
    icon: FaLaptopCode,
  },
  {
    title: "Hotel & Restaurant Website",
    description:
      "A seamless hotel booking and restaurant management system for a superior guest experience.",
    technologies: ["React.js", "Tailwind CSS"],
    category: "Frontend",
    company: "Taniya Webfix Pvt. Ltd",
    githubLink: "#",
    liveLink: "https://hotelbalajivilla.site",
    icon: FaLaptopCode,
  },
  {
    title: "AC Spare Parts Ecommerce",
    description:
      "Your one-stop solution for high-quality and reliable AC spare parts across Vadodara.",
    technologies: ["React.js", "Tailwind CSS"],
    category: "Frontend",
    company: "Taniya Webfix Pvt. Ltd",
    githubLink: "#",
    liveLink: "https://multitechacspareparts.com",
    icon: FaLaptopCode,
  },
  {
    title: "Industrial Fibre Solutions",
    description:
      "Fabrication and distribution of high-quality FRP products, cooling towers, and tanks.",
    technologies: ["React.js", "Tailwind CSS"],
    category: "Frontend",
    company: "Taniya Webfix Pvt. Ltd",
    githubLink: "#",
    liveLink: "https://yogeshwarfibre.com",
    icon: FaLaptopCode,
  },
  {
    title: "Global Sourcing & Procurement",
    description:
      "A global procurement and international business development platform.",
    technologies: ["React.js", "Tailwind CSS"],
    category: "Frontend",
    company: "Taniya Webfix Pvt. Ltd",
    githubLink: "#",
    liveLink: "https://vkruniversalcorporation.com",
    icon: FaLaptopCode,
  },
  {
    title: "Laboratory Interior & Furniture",
    description:
      "Ergonomic and functional lab furniture solutions for a modern workspace.",
    technologies: ["React.js", "Tailwind CSS"],
    category: "Frontend",
    company: "Taniya Webfix Pvt. Ltd",
    githubLink: "#",
    liveLink: "https://vedlabsolution.com",
    icon: FaLaptopCode,
  },
  {
    title: "Cafe & Restaurant Website",
    description:
      "A cozy and welcoming space offering delicious food and a great ambiance.",
    technologies: ["React.js", "Tailwind CSS"],
    category: "Frontend",
    company: "Taniya Webfix Pvt. Ltd",
    githubLink: "#",
    liveLink: "https://kesaricafe.com",
    icon: FaLaptopCode,
  },
  {
    title: "AC Service & Maintenance",
    description:
      "Professional AC installation, repairs, and routine maintenance services.",
    technologies: ["React.js", "Tailwind CSS"],
    category: "Frontend",
    company: "Taniya Webfix Pvt. Ltd",
    githubLink: "#",
    liveLink: "https://superacserviceandrepairing.com",
    icon: FaLaptopCode,
  },
  {
    title: "Web Solutions Agency",
    description:
      "Innovative digital solutions transforming business ideas into reality.",
    technologies: ["React.js", "Tailwind CSS"],
    category: "Frontend",
    company: "Taniya Webfix Pvt. Ltd",
    githubLink: "#",
    liveLink: "https://ramwebsolution.com",
    icon: FaLaptopCode,
  },
  {
    title: "Export & Trading Platform",
    description:
      "Global export of premium quality spices, grains, and pulses with transparency and trust.",
    technologies: ["React.js", "Tailwind CSS"],
    category: "Frontend",
    company: "Taniya Webfix Pvt. Ltd",
    githubLink: "#",
    liveLink: "https://aroma-international.com",
    icon: FaLaptopCode,
  },
];

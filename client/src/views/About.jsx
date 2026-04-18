"use client";

import { motion } from "framer-motion";
import {
  FaGraduationCap,
  FaCode,
  FaMedal,
  FaLaptopCode,
  FaBriefcase,
  FaTwitter,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";
import { assets } from "../assets/assets";
import Link from "next/link";
import { SiTryhackme } from "react-icons/si";
import PageHeader from "@/components/ui/PageHeader";

const experiences = [
  {
    title: "Full Stack Development",
    description:
      "Passionate about creating robust, scalable web applications using modern technologies.",
    icon: <FaCode />,
    ring: "ring-cyan-500/25",
    iconBg: "bg-cyan-500/10 text-cyan-300",
  },
  {
    title: "DevOps & Cloud",
    description:
      "Implementing continuous integration and deployment strategies for efficient software delivery.",
    icon: <FaLaptopCode />,
    ring: "ring-emerald-500/25",
    iconBg: "bg-emerald-500/10 text-emerald-300",
  },
  {
    title: "Cybersecurity",
    description:
      "Exploring web application security and penetration testing methodologies.",
    icon: <FaMedal />,
    ring: "ring-rose-500/25",
    iconBg: "bg-rose-500/10 text-rose-300",
  },
];

const workExperience = [
  {
    company: "Taniya Webfix Pvt Ltd",
    logo: "https://taniyawebfix.com/wp-content/uploads/2024/09/logo.jpg",
    position: "Web Developer Intern",
    duration: "Aug 2024 - Mar 2025",
    location: "Vadodara, Gujarat, India · On-site",
    description: [
      "Developed responsive web interfaces using HTML, CSS, JavaScript, and React.js.",
      "Transformed designs into functional web pages with Tailwind CSS and GSAP animations.",
      "Optimized performance, fixed bugs, and ensured clean, maintainable code.",
      "Collaborated with teams, participated in code reviews, and managed client expectations.",
    ],
    technologies: [
      "HTML",
      "CSS",
      "JavaScript",
      "React.js",
      "Tailwind CSS",
      "GSAP",
      "Git",
      "GitHub",
      "Responsive Web Design",
    ],
  },
  {
    company: "Western Refrigeration Pvt Ltd",
    logo: "https://westernequipments.com/wp-content/uploads/2025/01/western-head-logo-2025.png",
    position: "MES Developer",
    duration: "May 2025 - Present",
    location: "Valsad, Gujarat, India · On-site",
    description: [
      "As part of the MES team at Western Refrigeration Pvt. Ltd., I am responsible for both developing a new web-based MES software and maintaining the existing MES system.",
      "Designing and building a modern MES web application using technologies like React.js, Node.js, Tailwind CSS, and REST APIs to replace legacy desktop tools.",
      "Working with relational databases for efficient data storage, querying, and integration with MES backend services.",
      "Maintaining and managing the traceability system to ensure end-to-end product tracking, compliance, and quality assurance across production processes.",
      "Maintaining and enhancing existing legacy MES applications to ensure reliable performance across production lines.",
      "Collaborating with engineers, operators, and cross-functional teams to gather requirements and implement process improvements.",
      "Ensuring smooth data flow between shop floor operations and centralized systems for real-time visibility and decision making.",
      "This role allows me to apply my full stack development skills in a real-world industrial environment while contributing to the digital transformation initiatives at Western Refrigeration Pvt. Ltd.",
    ],
    technologies: [
      "React.js",
      "Node.js",
      "Tailwind CSS",
      "Express.js",
      "SQL",
      "REST APIs",
      "MES Systems",
      "Full Stack Development",
      "Git",
      "GitHub",
    ],
  },

];

const education = [
  {
    degree: "Bachelor of Computer Applications",
    institution: "Parul University, Vadodara",
    year: "2022 - 2025",
    type: "Graduation",
    color: "bg-cyan-500",
    icon: <FaGraduationCap />,
  },
  {
    degree: "Class 12th",
    institution: "BPMG Public School",
    year: "2021 - 2022",
    type: "Higher Secondary",
    color: "bg-emerald-500",
    icon: <FaGraduationCap />,
  },
  {
    degree: "Class 10th",
    institution: "Sterling Group of School",
    year: "2019 - 2020",
    type: "Secondary",
    color: "bg-violet-500",
    icon: <FaGraduationCap />,
  },
];

export default function About() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen pb-12"
    >
      <PageHeader
        eyebrow="Profile"
        title="About"
        description="Background, focus areas, and the path so far — from internships to security research."
        icon={FaCode}
      />

      <div className="surface-card overflow-hidden lg:flex">
        <div className="relative lg:w-1/2">
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-violet-600/10" />
          {/* eslint-disable-next-line @next/next/no-img-element -- local public asset */}
          <img
            src={assets.Profile}
            alt="Portrait"
            className="relative h-72 w-full object-cover lg:h-full lg:min-h-[420px]"
          />
        </div>
        <div className="flex flex-col justify-center p-8 lg:w-1/2 lg:p-12">
          <h2 className="font-[family-name:var(--font-outfit)] text-2xl font-bold text-white">
            Hello — I&apos;m Varun
          </h2>
          <p className="mt-4 leading-relaxed text-zinc-400">
            {
              "I'm a passionate Full Stack Developer with a keen interest in DevOps, cloud technologies, and web application security. My journey is driven by a continuous desire to learn and solve complex technological challenges."
            }
          </p>
          <div className="mt-6 flex gap-3">
            {[
              {
                href: "https://github.com/varunyadavgithub",
                icon: <FaGithub className="text-xl" />,
                className: "hover:text-white",
              },
              {
                href: "https://www.linkedin.com/in/varunyadavcse25/",
                icon: <FaLinkedin className="text-xl" />,
                className: "hover:text-cyan-300",
              },
              {
                href: "https://x.com/varun_yadav01",
                icon: <FaTwitter className="text-xl" />,
                className: "hover:text-sky-300",
              },
              {
                href: "https://tryhackme.com/p/th3c0d3hunt3r101",
                icon: <SiTryhackme className="text-xl" />,
                className: "hover:text-rose-300",
              },
            ].map((s) => (
              <a
                key={s.href}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`text-zinc-500 transition ${s.className}`}
              >
                {s.icon}
              </a>
            ))}
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/projects"
              className="rounded-xl bg-cyan-500 px-5 py-2.5 text-sm font-semibold text-zinc-950 transition hover:bg-cyan-400"
            >
              View projects
            </Link>
            <Link
              href="/resources"
              className="rounded-xl border border-white/15 px-5 py-2.5 text-sm font-semibold text-zinc-200 transition hover:border-cyan-500/40"
            >
              Resources
            </Link>
          </div>
        </div>
      </div>

      <div className="mt-16">
        <h3 className="text-center font-[family-name:var(--font-outfit)] text-2xl font-bold text-white md:text-left">
          Professional focus
        </h3>
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {experiences.map((exp) => (
            <div
              key={exp.title}
              className={`surface-card p-6 ring-1 ${exp.ring}`}
            >
              <div
                className={`mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl ${exp.iconBg}`}
              >
                {exp.icon}
              </div>
              <h4 className="font-semibold text-zinc-100">{exp.title}</h4>
              <p className="mt-2 text-sm text-zinc-500">{exp.description}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-20">
        <h3 className="text-center font-[family-name:var(--font-outfit)] text-2xl font-bold text-white md:text-left">
          Experience
        </h3>
        <div className="mt-8 space-y-6">
          {workExperience.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="surface-card p-6"
            >
              <div className="flex flex-col gap-4 sm:flex-row sm:items-start">
                {exp.logo ? (
                  // eslint-disable-next-line @next/next/no-img-element -- external employer logos
                  <img
                    src={exp.logo}
                    alt=""
                    className="h-14 w-auto object-contain sm:mr-2"
                  />
                ) : (
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-cyan-500/15 text-cyan-300">
                    <FaBriefcase />
                  </div>
                )}
                <div className="min-w-0 flex-1">
                  <h4 className="font-[family-name:var(--font-outfit)] text-lg font-semibold text-white">
                    {exp.position}
                  </h4>
                  <p className="text-sm text-zinc-400">
                    {exp.company} · {exp.duration}
                  </p>
                  <p className="mt-1 text-xs text-zinc-600">{exp.location}</p>
                  <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-zinc-400">
                    {exp.description.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {exp.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-md bg-white/[0.05] px-2 py-1 text-xs text-zinc-400"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="mt-20">
        <h3 className="text-center font-[family-name:var(--font-outfit)] text-2xl font-bold text-white md:text-left">
          Education
        </h3>
        <div className="relative mt-10">
          <div className="absolute left-[11px] top-0 hidden h-full w-px bg-gradient-to-b from-cyan-500/50 to-transparent md:block" />
          <div className="space-y-8">
            {education.map((edu, index) => (
              <div
                key={index}
                className="relative flex flex-col gap-4 md:flex-row md:items-center"
              >
                <div
                  className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-white md:absolute md:left-0 md:-translate-x-0 ${edu.color}`}
                >
                  {edu.icon}
                </div>
                <div className="surface-card ml-0 flex-1 p-6 md:ml-12">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <h4 className="font-semibold text-zinc-100">{edu.degree}</h4>
                    <span className="rounded-full bg-white/[0.06] px-2 py-0.5 text-xs text-zinc-400">
                      {edu.type}
                    </span>
                  </div>
                  <p className="mt-1 text-sm text-zinc-500">{edu.institution}</p>
                  <p className="mt-1 text-xs text-zinc-600">{edu.year}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mt-20 overflow-hidden rounded-2xl border border-cyan-500/20 bg-gradient-to-br from-cyan-500/10 via-zinc-900/80 to-violet-600/10 p-8 text-center sm:p-12"
      >
        <h3 className="font-[family-name:var(--font-outfit)] text-2xl font-bold text-white sm:text-3xl">
          {"Let's Innovate and Secure the Web"}
        </h3>
        <p className="mx-auto mt-4 max-w-xl text-sm text-zinc-400 sm:text-base">
          Interested in building robust, secure, and scalable web solutions that
          push the boundaries of technology and innovation?
        </p>
        <Link
          href="/contact"
          className="mt-8 inline-block rounded-xl bg-white px-8 py-3 text-sm font-semibold text-zinc-950 transition hover:bg-zinc-200"
        >
          Collaborate now
        </Link>
      </motion.div>
    </motion.div>
  );
}

import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Darshan Gowda",
  initials: "DG",
  url: "https://darshansrc.com",
  location: "Bangalore, IN",
  locationLink: "https://www.google.com/maps/place/bengaluru",
  description: ` A Software Developer based in Bangalore.`,
  summary:
    "An experienced full-stack developer specializing in TypeScript and a GenAI enthusiast building innovative tools and solutions",
  avatarUrl: "/me.png",
  skills: [
    "React",
    "Next.js",
    "Typescript",
    "Postgres",
    "Prisma",
    "Fastify",
    "Node.js",
    "Go",
    "Cloudflare",
    "AWS",
    "Docker",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "darshansr1618@gmail.com",
    tel: "+918088597575",
    whatsapp: "https://wa.me/918088597575",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://git.new/darshan-github",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://dub.sh/darshan-linkedin",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: "https://dub.sh/darshan-x",
        icon: Icons.x,

        navbar: true,
      },

      email: {
        name: "Send Email",
        url: "mailto:darshansr1618@gmail.com",
        icon: Icons.email,
        navbar: true,
      },
    },
  },

  work: [
    {
      company: "Asymmetri",
      href: "https://asymmetri.in/",
      location: "Bangalore, India",
      title: "SDE-1",
      logoUrl: "/asymmetri.png",
      badges: [],
      start: "Jan 2025",
      end: "Current",
      description: `• Developed the complete backend and admin panel for Zimkey (a platform similar to Urban Company) using TypeScript, Prisma, Fastify, Next.js, and Razorpay. <br /> • Worked on homepage optimizations and modifications for Tradejini based on client requirements, improving performance and user experience.`,
    },
    {
      company: "Outpost ",
      href: "https://outpost.run/",
      badges: [],
      location: "Bangalore, India",
      title: "SDE Intern",
      logoUrl: "/outpost.png",
      start: "Jun 2024",
      end: "Jan 2025",
      description: `As a developer at an AI Infra as a Service startup, I developed the landing, documentation,
blog and pricing page for outpost.run using Next.js and TypeScript. Currently, I am working on the development of outpost's control plane. My
tech stack includes Next.js, TypeScript, Tailwind, Node.js, and Fastify for building scalable solutions.`,
    },
    {
      company: "Fiverr",
      href: "#",
      badges: [],
      location: "Remote",
      title: "Freelance Content and Video Editor",
      logoUrl: "/fiverr.png",
      start: "July 2022",
      end: "Dec 2023",
      description: `Worked as a Content and Video Editor for over 20+ international clients and completed over 50+ orders. Tools used
include Adobe Premiere Pro & After Effects.
Top clients: codedex.io, launchagency.co.nz`,
    },
  ],
  education: [
    {
      school: "RV Institute of Technology & Management",
      href: "#",
      degree: "Bachelor in Information Science & Engineering",
      logoUrl: "/rvitm.png",
      start: "2021",
      end: "2025",
    },
  ],
  projects: [
    {
      title: "EZ Diagram",
      href: "https://ezdiagram.com",
      dates: "Mar 2024 - Jun 2024",
      active: true,
      description: `Built a SaaS platform, EZ Diagram, to simplify diagramming and documentation. Using AI, it generates PlantUML and
Mermaid.js architecture diagrams through prompts. With over 10,000+ visitors, the platform has created over 1,000
diagrams via AI. The source code is confidential but can be shared upon request.`,
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "OpenAI",
        "AWS Bedrock",
        "Mermaid.js",
        "Supabase",
        "Vercel",
        "TailwindCSS",
        "Paddle",
        "Shadcn UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://ezdiagram.com",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video: "https://www.ezdiagram.com/videos/demo.mp4",
    },
    {
      title: "Docusage",
      href: "https://docu-sage.vercel.app/",
      dates: "June 2023 - Present",
      active: false,
      description: `Built a multiple PDF RAG (Retrieval-Augmented Generation) chatbot for the national-level hackathon Fantomcode24,
where I secured the 2nd runner-up position. The tech stack included TypeScript, Next.js, Tailwind CSS, OpenAI API,
Langchain, and PineconeDB. Hosted on Vercel`,
      technologies: [
        "Next.js",
        "Typescript",
        "Supabase",
        "Vercel",
        "PineconeDB",
        "Langchain",
        "OpenAI API",
      ],
      links: [
        {
          type: "Website",
          href: "https://docu-sage.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/darshansrc/docu-sage",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/docusage.png",
    },
  ],
} as const;

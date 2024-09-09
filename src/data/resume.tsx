import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Darshan Gowda",
  initials: "DG",
  url: "https://darshansrc.vercel.app",
  location: "Bangalore, IN",
  locationLink: "https://www.google.com/maps/place/bengaluru",
  description: `A Full Stack Developer based in Bangalore.`,
  summary:
    "An experienced Full stack developer and GenAI enthusiast, building innovative tools and solutions",
  avatarUrl: "/darshan.jpg",
  skills: [
    "React",
    "Next.js",
    "Typescript",
    "Node.js",
    "Python",
    "Go",
    "Postgres",
    "Docker",
    "Kubernetes",
    "Java",
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
        url: "https://dub.sh/dillion-twitter",
        icon: Icons.x,

        navbar: true,
      },

      email: {
        name: "Send Email",
        url: "mailto:darshansr1618@gmail.com",
        icon: Icons.email,

        navbar: false,
      },
    },
  },

  work: [
    {
      company: "Outpost",
      href: "https://outpost.run/",
      badges: [],
      location: "Bangalore, IN",
      title: "SDE Intern",
      logoUrl: "/outpost.svg",
      start: "June 2024",
      end: "Current",
      description: `As a Full-Stack Developer at an AI Infra as a Service startup, I developed the landing, documentation,
blog and pricing page for outpost.run using Next.js and TypeScript. Currently, I am working on the development of outpost's control plane. My
tech stack includes Next.js, TypeScript, Node.js, FastAPI, Go, Docker, and Kubernetes for building scalable solutions.`,
    },
  ],
  education: [
    {
      school: "RV Institute of Technology & Management",
      href: "https://rvitm.edu.in",
      degree: "Bachelor in Information Science Engineering",
      logoUrl: "/rv-logo.jpg",
      start: "2021",
      end: "2025",
    },
  ],
  projects: [
    {
      title: "EZ Diagram",
      href: "https://ezdiagram.com",
      dates: "Jan 2024 - Feb 2024",
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

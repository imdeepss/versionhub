import {
  Code2,
  Layers,
  Box,
  Sparkles,
  Cloud,
  Terminal,
  Smartphone,
  Monitor,
  LucideIcon,
} from "lucide-react";

// --- 1. Strict Interfaces (The Contract) ---

export interface Category {
  id: string;
  name: string;
  icon: LucideIcon;
  desc: string;
  color: string;
  bg: string;
}

export interface UpdateItem {
  id: string;
  name: string;
  version: string;
  date: string;
  type: "Major" | "Minor" | "Patch" | "Security" | "Feature";
  typeColor: string;
}

export interface TrendingItem {
  id: string;
  name: string;
  version: string;
  growth: string;
  icon: string;
}

export interface TimelineItem {
  version: string;
  date: string;
  type: string;
  desc: string;
}

export interface ToolDetail {
  name: string;
  category: string;
  version: string;
  date: string;
  desc: string;
  website: string;
  github: string;
  timeline: TimelineItem[];
}

// --- 2. Data Implementation ---

export const categories: Category[] = [
  {
    id: "lang",
    name: "Languages",
    icon: Code2,
    desc: "JS, Python, Go",
    color: "text-blue-400",
    bg: "bg-blue-400/10",
  },
  {
    id: "framework",
    name: "Frameworks",
    icon: Layers,
    desc: "Next.js, React, Vue",
    color: "text-purple-400",
    bg: "bg-purple-400/10",
  },
  {
    id: "lib",
    name: "Libraries",
    icon: Box,
    desc: "Redux, Zod, Pandas",
    color: "text-orange-400",
    bg: "bg-orange-400/10",
  },
  {
    id: "ai",
    name: "AI Tools",
    icon: Sparkles,
    desc: "PyTorch, OpenAI",
    color: "text-pink-400",
    bg: "bg-pink-400/10",
  },
  {
    id: "cloud",
    name: "Cloud",
    icon: Cloud,
    desc: "AWS, Vercel, Docker",
    color: "text-cyan-400",
    bg: "bg-cyan-400/10",
  },
  {
    id: "devops",
    name: "DevOps",
    icon: Terminal,
    desc: "Kubernetes, Terraform",
    color: "text-green-400",
    bg: "bg-green-400/10",
  },
  {
    id: "mobile",
    name: "Mobile",
    icon: Smartphone,
    desc: "Flutter, React Native",
    color: "text-yellow-400",
    bg: "bg-yellow-400/10",
  },
  {
    id: "desktop",
    name: "Desktop",
    icon: Monitor,
    desc: "Electron, Tauri",
    color: "text-red-400",
    bg: "bg-red-400/10",
  },
];

export const recentUpdates: UpdateItem[] = [
  {
    id: "nextjs",
    name: "Next.js",
    version: "15.1.0",
    date: "2h ago",
    type: "Feature",
    typeColor: "text-blue-400 bg-blue-400/10 border-blue-400/20",
  },
  {
    id: "tailwind",
    name: "Tailwind CSS",
    version: "4.0.0-alpha",
    date: "5h ago",
    type: "Major",
    typeColor: "text-purple-400 bg-purple-400/10 border-purple-400/20",
  },
  {
    id: "docker",
    name: "Docker Desktop",
    version: "4.27.1",
    date: "1d ago",
    type: "Patch",
    typeColor: "text-green-400 bg-green-400/10 border-green-400/20",
  },
  {
    id: "python",
    name: "Python",
    version: "3.13.0",
    date: "2d ago",
    type: "Security",
    typeColor: "text-red-400 bg-red-400/10 border-red-400/20",
  },
];

export const trendingTools: TrendingItem[] = [
  { id: "react", name: "React", version: "19.0.0", growth: "+14%", icon: "R" },
  { id: "vite", name: "Vite", version: "5.0.10", growth: "+8%", icon: "V" },
  { id: "astro", name: "Astro", version: "4.2.0", growth: "+22%", icon: "A" },
];

// Strictly typed dictionary using the ToolDetail interface
export const toolDetails: Record<string, ToolDetail> = {
  nextjs: {
    name: "Next.js",
    category: "Framework",
    version: "14.1.0",
    date: "2 days ago",
    desc: "The React Framework for the Web. Used by Vercel, Nike, and more.",
    website: "https://nextjs.org",
    github: "https://github.com/vercel/next.js",
    timeline: [
      {
        version: "14.1.0",
        date: "Feb 2024",
        type: "Minor",
        desc: "Improved Turbopack reliability and memory usage.",
      },
      {
        version: "14.0.4",
        date: "Jan 2024",
        type: "Patch",
        desc: "Bug fixes for App Router navigation.",
      },
      {
        version: "14.0.0",
        date: "Oct 2023",
        type: "Major",
        desc: "Server Actions stable, Partial Prerendering preview.",
      },
    ],
  },
  python: {
    name: "Python",
    category: "Language",
    version: "3.13.0",
    date: "Oct 2023",
    desc: "A programming language that lets you work quickly and integrate systems.",
    website: "https://python.org",
    github: "https://github.com/python/cpython",
    timeline: [
      {
        version: "3.13.0",
        date: "Oct 2023",
        type: "Major",
        desc: "New interactive interpreter and JIT compiler.",
      },
      {
        version: "3.12.0",
        date: "Oct 2022",
        type: "Major",
        desc: "Better error messages and performance improvements.",
      },
    ],
  },
};

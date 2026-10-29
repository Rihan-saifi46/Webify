export interface ShowcaseProject {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  date: string;
  image: string;
  tags: string[];
  link?: string;
}

/**
 * SAMPLE PLACEHOLDER PROJECTS FOR PROJECTS SHOWCASE
 * Replace these placeholder images and details with actual project assets.
 */
export const SHOWCASE_PROJECTS: ShowcaseProject[] = [
  {
    id: "cloudsync",
    title: "CloudSync Web App",
    subtitle: "Enterprise cloud sync & management engine",
    category: "Performance Optimization",
    date: "March 9, 2026",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1000&q=80",
    tags: ["React", "Node.js", "MongoDB"],
    link: "#"
  },
  {
    id: "nova-retail",
    title: "Nova Commerce Hub",
    subtitle: "Modern storefront with instant WhatsApp checkouts",
    category: "E-Commerce & Retail",
    date: "February 18, 2026",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1000&q=80",
    tags: ["MERN Stack", "Tailwind CSS"],
    link: "#"
  },
  {
    id: "apex-health",
    title: "Apex Clinical Portal",
    subtitle: "Automated sample collection & digital patient reports",
    category: "Healthcare & AI Bot",
    date: "January 24, 2026",
    image: "https://images.unsplash.com/photo-1579783902614-a3fb3927b675?auto=format&fit=crop&w=1000&q=80",
    tags: ["React Native", "Node.js"],
    link: "#"
  },
  {
    id: "lumina-studio",
    title: "Lumina Creative Studio",
    subtitle: "High-fashion editorial portfolio with smooth interactions",
    category: "Digital Architecture",
    date: "December 12, 2025",
    image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=1000&q=80",
    tags: ["Next.js", "TypeScript"],
    link: "#"
  },
  {
    id: "horizon-erp",
    title: "Horizon Logistics ERP",
    subtitle: "Automated GST invoicing and real-time fleet telemetry",
    category: "Enterprise Software",
    date: "November 5, 2025",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1000&q=80",
    tags: ["Flutter", "MongoDB"],
    link: "#"
  },
  {
    id: "pulse-bot",
    title: "Pulse WhatsApp Engine",
    subtitle: "24/7 intelligent conversion bot handling 50k+ chats",
    category: "Conversational AI",
    date: "October 19, 2025",
    image: "https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?auto=format&fit=crop&w=1000&q=80",
    tags: ["Node.js", "Hostinger", "GitHub"],
    link: "#"
  }
];


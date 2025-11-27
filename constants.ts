import { Testimonial, Service, FaqItem, BlogPost, TeamMember } from './types';
import { Layout, ShoppingCart, Settings, Smartphone, Search, BarChart } from 'lucide-react';

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    name: "Rajesh K.",
    role: "E-commerce Business Owner",
    content: "Atharv transformed our outdated site into a modern masterpiece, boosting traffic by 40%.",
    rating: 5
  },
  {
    id: 2,
    name: "Priya S.",
    role: "CEO, TechStart",
    content: "Reliable, punctual, and skilled—highly recommend for businesses ready to grow online.",
    rating: 5
  },
  {
    id: 3,
    name: "Sameer D.",
    role: "Blogger",
    content: "Exceptional attention to detail and great communication throughout the project.",
    rating: 5
  },
  {
    id: 4,
    name: "Neha T.",
    role: "Artist",
    content: "Creative solutions and responsive support after launch. My portfolio looks amazing.",
    rating: 4
  }
];

export const SERVICES: Service[] = [
  {
    id: 1,
    title: "Custom Website Design",
    description: "Responsive, SEO-optimized websites that reflect your brand’s identity.",
    features: ["Mobile-friendly layouts", "Fast loading speeds", "UX/UI Design"],
    iconName: "Layout"
  },
  {
    id: 2,
    title: "E-commerce Solutions",
    description: "Robust online stores built to convert visitors into loyal customers.",
    features: ["Payment Gateway Integration", "Inventory Management", "Secure Checkout"],
    iconName: "ShoppingCart"
  },
  {
    id: 3,
    title: "Website Maintenance",
    description: "Ongoing support to keep your site secure, updated, and performing well.",
    features: ["Security Updates", "Content Edits", "Performance Monitoring"],
    iconName: "Settings"
  }
];

export const FAQS: FaqItem[] = [
  {
    question: "How long does it take to build a website?",
    answer: "Timelines vary by project scope. A standard brochure site typically takes 2-4 weeks, while complex e-commerce sites may take 6-8 weeks."
  },
  {
    question: "Do you provide website hosting?",
    answer: "We can recommend top-tier hosting providers and assist with the setup, but we recommend clients own their hosting accounts for full control."
  },
  {
    question: "Can you update my existing website?",
    answer: "Yes, we offer redesign and maintenance services to modernize existing websites and improve their performance."
  },
  {
    question: "What if I need support after launch?",
    answer: "We offer various maintenance packages to ensure your website remains up-to-date and secure after the initial launch."
  },
  {
    question: "Will my website be mobile-friendly?",
    answer: "Absolutely. All our designs are responsive by default, ensuring they look great on phones, tablets, and desktops."
  }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 1,
    title: "Top 5 Web Design Trends in 2025",
    excerpt: "Discover the latest aesthetics and technologies shaping the future of the web.",
    date: "Oct 12, 2024",
    category: "Design",
    imageUrl: "https://picsum.photos/800/600?random=10"
  },
  {
    id: 2,
    title: "How SEO Improves Your Website’s Performance",
    excerpt: "Learn the basics of SEO and why it is crucial for your business growth.",
    date: "Sep 28, 2024",
    category: "Marketing",
    imageUrl: "https://picsum.photos/800/600?random=11"
  },
  {
    id: 3,
    title: "Building Mobile-Friendly Websites",
    excerpt: "Why mobile responsiveness is non-negotiable for small businesses today.",
    date: "Sep 15, 2024",
    category: "Development",
    imageUrl: "https://picsum.photos/800/600?random=12"
  }
];

export const TEAM: TeamMember[] = [
  {
    name: "Atharv",
    role: "Founder & Lead Developer",
    bio: "Skilled in frontend and backend technologies, dedicated to personalized client service with over 5 years of experience.",
    imageUrl: "https://picsum.photos/400/400?random=20"
  }
];
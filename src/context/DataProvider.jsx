import { createContext, useEffect, useState } from "react";



export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [user, setUser] = useState({
    name: "Vikash kumar verma",
    dob: "March 5, 1998",
    country: "India",
    occupation: "Software Developer",
    college: "Tula's institute, Deharadun",
    university: "Uttrakhand technical university",
    email: "lucky824123@gmail.com",
    contact: "+(91) 9870936624",
    linkedin: "",
    leetcode: "",
    snapchat: "",
    github: "https://github.com/Vikashkumarverma",
    gitlab: "https://github.com/Vikashkumarverma",
  });

  const [ blog, setBlog ] = useState([
    {
      id: 1,
      title: "The Future of AI in Web Design",
      excerpt:
        "Exploring how artificial intelligence is reshaping the web design industry.",
      category: "Technology",
      date: "Jan 15, 2024",
      image: "https://example.com/images/ai-web-design.jpg",
    },
    {
      id: 2,
      title: "10 Essential Typography Rules for Designers",
      excerpt:
        "Master these fundamental typography principles to elevate your design work.",
      category: "Design",
      date: "Feb 3, 2024",
      image: "https://example.com/images/typography-rules.jpg",
    },
    {
      id: 3,
      title: "The Rise of Sustainable Web Development",
      excerpt:
        "How eco-friendly practices are becoming crucial in modern web development.",
      category: "Development",
      date: "Mar 22, 2024",
      image: "https://example.com/images/sustainable-web.jpg",
    },
    {
      id: 4,
      title: "Mastering Color Theory in UX Design",
      excerpt:
        "Learn how to use color effectively to enhance user experience and engagement.",
      category: "UX Design",
      date: "Apr 11, 2024",
      image: "https://example.com/images/color-theory-ux.jpg",
    },
    {
      id: 5,
      title: "The Impact of 5G on Web Applications",
      excerpt:
        "Exploring the possibilities and challenges of 5G technology for web developers.",
      category: "Technology",
      date: "May 7, 2024",
      image: "https://example.com/images/5g-web-apps.jpg",
    },
    {
      id: 6,
      title: "Accessibility in Web Design: A Comprehensive Guide",
      excerpt:
        "Ensuring your websites are accessible to all users: best practices and tools.",
      category: "Web Design",
      date: "Jun 19, 2024",
      image: "https://example.com/images/web-accessibility.jpg",
    },
    {
      id: 7,
      title: "The Art of Minimalism in UI Design",
      excerpt:
        "How to create impactful user interfaces with a 'less is more' approach.",
      category: "UI Design",
      date: "Jul 8, 2024",
      image: "https://example.com/images/minimalist-ui.jpg",
    },
    {
      id: 8,
      title: "Optimizing Web Performance for Mobile Devices",
      excerpt:
        "Strategies to ensure your websites run smoothly on smartphones and tablets.",
      category: "Development",
      date: "Aug 14, 2024",
      image: "https://example.com/images/mobile-optimization.jpg",
    },
    {
      id: 9,
      title: "The Psychology of User Interface Design",
      excerpt:
        "Understanding how human psychology influences effective UI design decisions.",
      category: "UX/UI Design",
      date: "Sep 5, 2024",
      image: "https://example.com/images/ui-psychology.jpg",
    },
    {
      id: 10,
      title: "Emerging Trends in Frontend Frameworks",
      excerpt:
        "A look at the latest frontend frameworks shaping the future of web development.",
      category: "Development",
      date: "Oct 23, 2024",
      image: "https://example.com/images/frontend-trends.jpg",
    },
    {
      id: 11,
      title: "Creating Effective Landing Pages: A Guide",
      excerpt:
        "Tips and tricks for designing landing pages that convert visitors into customers.",
      category: "Marketing",
      date: "Nov 9, 2024",
      image: "https://example.com/images/landing-pages.jpg",
    },
    {
      id: 12,
      title: "The Role of Motion Design in User Experience",
      excerpt:
        "How thoughtful animation can enhance user engagement and interface usability.",
      category: "UX Design",
      date: "Dec 1, 2024",
      image: "https://example.com/images/motion-design-ux.jpg",
    },
    {
      id: 13,
      title: "Mastering CSS Grid Layout",
      excerpt:
        "A deep dive into creating complex, responsive layouts with CSS Grid.",
      category: "Development",
      date: "Jan 17, 2025",
      image: "https://example.com/images/css-grid-mastery.jpg",
    },
    {
      id: 14,
      title: "The Future of Voice User Interfaces in Web Design",
      excerpt:
        "Exploring the integration of voice commands in web applications and its impact.",
      category: "Technology",
      date: "Feb 28, 2025",
      image: "https://example.com/images/voice-ui-web.jpg",
    },
    {
      id: 15,
      title: "Designing for Dark Mode: Best Practices",
      excerpt:
        "How to effectively implement dark mode in your web and mobile applications.",
      category: "Design",
      date: "Mar 14, 2025",
      image: "https://example.com/images/dark-mode-design.jpg",
    },
    {
      id: 16,
      title: "The Impact of Web3 on User Experience Design",
      excerpt:
        "Understanding how blockchain and decentralized apps are changing UX design.",
      category: "Technology",
      date: "Apr 6, 2025",
      image: "https://example.com/images/web3-ux-impact.jpg",
    },
    {
      id: 17,
      title: "Effective Data Visualization Techniques for the Web",
      excerpt:
        "Turning complex data into clear, engaging, and interactive web visualizations.",
      category: "Data Science",
      date: "May 22, 2025",
      image: "https://example.com/images/data-viz-web.jpg",
    },
    {
      id: 18,
      title: "Designing for Augmented Reality on the Web",
      excerpt:
        "Exploring the possibilities of AR in web browsers and best design practices.",
      category: "Innovation",
      date: "Jun 11, 2025",
      image: "https://example.com/images/ar-web-design.jpg",
    },
    {
      id: 19,
      title: "The Art of Micro-interactions in UI Design",
      excerpt:
        "How small, thoughtful animations can significantly improve user experience.",
      category: "UI Design",
      date: "Jul 3, 2025",
      image: "https://example.com/images/micro-interactions.jpg",
    },
    {
      id: 20,
      title: "Ethical Considerations in UX Research and Design",
      excerpt:
        "Navigating the ethical challenges of user research and experience design.",
      category: "UX Design",
      date: "Aug 19, 2025",
      image: "https://example.com/images/ethical-ux-design.jpg",
    },
  ]);

  useEffect(() => {}, []);

  return (
    <DataContext.Provider value={{ user, blog }}>{children}</DataContext.Provider>
  );
};

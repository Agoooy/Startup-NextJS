import { Blog } from "@/types/blog";

const blogData: Blog[] = [
  {
    id: 1,
    title: "Best UI components for modern websites",
    paragraph:
      "Make sure your website includes Navbar, Hero Section, Card Components, CTA Buttons, Animated Elements, Footer, Slider, Icons, Form Components, and Responsive Design for a modern and appealing look.",
    image: "/images/blog/blog-01.jpg",
    author: {
      name: "Samuyl Joshi",
      image: "/images/blog/author-01.png",
      designation: "Graphic Designer",
    },
    tags: ["creative"],
    publishDate: "2023",
  },
  {
    id: 2,
    title: "9 simple ways to improve your design skills",
    paragraph:
      "To improve your design skills, practice regularly, learn design principles, seek inspiration, get feedback, experiment with tools, stay updated with trends, simplify your design, collaborate with others, and learn from mistakes.",
    image: "/images/blog/blog-02.jpg",
    author: {
      name: "Musharof Chy",
      image: "/images/blog/author-02.png",
      designation: "Content Writer",
    },
    tags: ["computer"],
    publishDate: "2023",
  },
  {
    id: 3,
    title: "Tips to quickly improve your coding speed.",
    paragraph:
      "Make sure to practice consistenly, grasp fundamental concepts, utilize online resource, tackle daily challenges, seek feedback from peers, explore new languages, stay updated with trends, prioritize efficiency in your code, and hone your debugging skills.",
    image: "/images/blog/blog-03.jpg",
    author: {
      name: "Lethium Deo",
      image: "/images/blog/author-03.png",
      designation: "Graphic Designer",
    },
    tags: ["design"],
    publishDate: "2023",
  },
];
export default blogData;

import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    encata,
    tesla,
    shopify,
    carrent,
    hoobank,
    gym,
    threejs,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "React Native Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Content Creator",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
   
  ];
  
  const experiences = [
    {
      title: "WordPress Developer",
      company_name: "Encata engineering catalyst",
      icon: encata,
      iconBg: "#E6DEDD",
      date: "July 2021 - November 2022",
      points: [
        "Leveraged strong understanding of WordPress core to manipulate admin and theme components",
        "Developed and implemented SEO and AB testing strategies to improve effectiveness of marketing efforts.",
        "Teamed with design and project developers to understand project scope and offer elegant, creative and scalable solutions",
        "Reviewed application requirements and interface designs and provided feedback on feasibility.",
        "Designed responsive, mobile-first websites from design concepts",
        "Implemented and assessed performance of SEO best practices."
        
      ],
    },
   
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Car Rent" ,
      description:
        "Web-based platform that allows users to search car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
      tags: [
        {
          name: "next.js",
          color: "blue-text-gradient",
        },
        {
          name: "typescript",
          color: "green-text-gradient",
        },
        {
          name: "RapidAPI",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      link: "https://car-rent-kappa.vercel.app/",
      source_code_link: "https://github.com/Anais2111/car_rent",
    },
    {
      name: "HooBank",
      description:
        "React JS application consisting of a stunning hero section, high-quality assets and gradients, business stats, reusable feature sections with call-to-action buttons, testimonials, and more!",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "tailwindcss",
          color: "green-text-gradient",
        },
        {
          name: "scss",
          color: "pink-text-gradient",
        },
      ],
      image: hoobank,
      link: "https://dev.di1nyjki7gt9x.amplifyapp.com/",
      source_code_link: "https://github.com/Anais2111/hoobank.git",
    },
    {
      name: "Fitness App",
      description:
        "The React Fitness Application is a cutting-edge fitness platform designed to revolutionize your workout experience and help you achieve your health and fitness goals in the most efficient and enjoyable way possible..",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "RapidAPI",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: gym,
      link: "https://dev.d338oai3i9vfut.amplifyapp.com/",
      source_code_link: "https://github.com/Anais2111/fitness_app.git",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };
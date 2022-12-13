// import images
import Hero_person from "./assets/images/Hero/person.png";

import html from './assets/images/Skills/html5.png';
import css from './assets/images/Skills/css-3.png';
import bootstrap from './assets/images/Skills/bootstrap.png';
import tailwind from './assets/images/Skills/tailwind-css.1024x615.png';
import materialUI from './assets/images/Skills/material-ui.1024x814.png';
import react from './assets/images/Skills/react.png';
import reactRouter from './assets/images/Skills/react-router.1024x559.png';
import firebase from './assets/images/Skills/file-type-firebase.746x1024.png';
import redux from './assets/images/Skills/redux-original.1024x972.png';
import figma from './assets/images/Skills/figma.png';
import git from './assets/images/Skills/git.1024x1024.png';
import nodeJS from './assets/images/Skills/nodejs.1024x627.png';
import express from './assets/images/Skills/express-original.1024x594.png';
import mongoDB from './assets/images/Skills/mongodb-original-wordmark.1008x1024.png';


// import c from './assets/images/Skills/letter-c.png';
// import python from './assets/images/Skills/python.png';
// import javaScript from './assets/images/Skills/javaScript';
// import java from './assets/images/Skills/java.png';

import services_logo1 from "./assets/images/Services/logo1.png";
import services_logo2 from "./assets/images/Services/logo2.png";
import services_logo3 from "./assets/images/Services/logo3.png";

import project1 from "./assets/images/projects/img1.png";
import project2 from "./assets/images/projects/img2.png";
import project3 from "./assets/images/projects/img3.png";
import person_project from "./assets/images/Hero/Antu_1-removebg-preview.png";

import avatar1 from "./assets/images/Testimonials/avatar1.png";
import avatar2 from "./assets/images/Testimonials/avatar2.png";
import avatar3 from "./assets/images/Testimonials/avatar3.png";
import avatar4 from "./assets/images/Testimonials/avatar4.png";

import HireMe_person from "./assets/images/HireMe/person2.png";
import HireMe_person2 from "./assets/images/HireMe/person.png";

// import icons from react-icons

import { TbSmartHome } from "react-icons/tb";
import { BiUser } from "react-icons/bi";
import { RiServiceLine, RiProjectorLine } from "react-icons/ri";
import { MdOutlinePermContactCalendar } from "react-icons/md";


export const content = {
  nav: [
    {
      link: "#home",
      icon: TbSmartHome,
    },
    {
      link: "#skills",
      icon: BiUser,
    },
    {
      link: "#services",
      icon: RiServiceLine,
    },
    {
      link: "#projects",
      icon: RiProjectorLine,
    },
    {
      link: "#contact",
      icon: MdOutlinePermContactCalendar,
    },
  ],
  hero: {
    title: "Web Developer",
    firstName: "ANTU",
    LastName: " DAS",
    btnText: "Download Resume",
    image: Hero_person,
    hero_content: [
      {
        count: "12+",
        text: "Months of Experinse in Web development",
      },
      {
        count: "6+",
        text: "Projects Worked in my career",
      },
    ],
  },
  skills: {
    title: "Skills",
    subtitle: "MY TOP SKILLS",
    skills_content: [
      {
        name: "HTML5",
        para: "Lorem ipsum text  dummy",
        logo: html,
      },
      {
        name: "CSS3",
        para: "Lorem ipsum text  dummy",
        logo: css,
      },
      {
        name: "Bootstrap",
        para: "Lorem ipsum text  dummy",
        logo: bootstrap,
      },
      {
        name: "Tailwind",
        para: "Lorem ipsum text  dummy",
        logo: tailwind,
      },
      {
        name: "React js",
        para: "Lorem ipsum text  dummy",
        logo: react,
      },
      {
        name: "React Router",
        para: "Lorem ipsum text  dummy",
        logo: reactRouter,
      },
      {
        name: "Material UI",
        para: "Lorem ipsum text  dummy",
        logo: materialUI,
      },
      {
        name: "Git",
        para: "Lorem ipsum text  dummy",
        logo: git,
      },
      {
        name: "Firebase",
        para: "Lorem ipsum text  dummy",
        logo: firebase,
      },
      {
        name: "Redux",
        para: "Lorem ipsum text  dummy",
        logo: redux,
      },
      {
        name: "Express JS",
        para: "Lorem ipsum text  dummy",
        logo: express,
      },
      {
        name: "MongoDB",
        para: "Lorem ipsum text  dummy",
        logo: mongoDB,
      },
      {
        name: "Figma",
        para: "Lorem ipsum text  dummy",
        logo: figma,
      },
      {
        name: "Node js",
        para: "Lorem ipsum text  dummy",
        logo: nodeJS,
      },
      // {
      //   name: "C Language",
      //   para: "Lorem ipsum text  dummy",
      //   logo: c,
      // },
      // {
      //   name: "JavaScript",
      //   para: "Lorem ipsum text  dummy",
      //   logo: javaScript,
      // },
      // {
      //   name: "Python",
      //   para: "Lorem ipsum text  dummy",
      //   logo: python,
      // },
      // {
      //   name: "Java",
      //   para: "Lorem ipsum text  dummy",
      //   logo: java,
      // },
    ],
    // icon: arrow,
  },
  services: {
    title: "Services",
    subtitle: "WHAT I ACTUALLY DO",
    service_content: [
      {
        title: "Web Development",
        para: "Web development is the building and maintenance of websites; it's the work that happens behind the scenes to make a website look great, work fast and perform well with a seamless user experience. Web developers, or 'devs', do this by using a variety of coding languages.",
        logo: services_logo1,
      },
      {
        title: "Front End Development",
        para: "A Front-End Developer is responsible for developing new user-facing features, determining the structure and design of web pages, building reusable codes, optimizing page loading times, and using a variety of markup languages to create the web pages.",
        logo: services_logo2,
      },
      {
        title: "Back End Development",
        para: "A back-end web developer is responsible for server-side web application logic and integration of the work front-end developers do. Back-end developers are usually write the web services and APIs used by front-end developers and mobile application developers. Share. Share. Hire a Top Back-end Developer Now.",
        logo: services_logo1,
      },
    ],
  },
  Projects: {
    title: "Projects",
    subtitle: "MY CREATION",
    image: person_project,
    project_content: [
      {
        title: "Panda Website",
        image: project1,
        live: 'https://antudaa.github.io/panda-commerce-website/',
        code: 'https://github.com/antudaa/panda-commerce-website'
      },
      {
        title: "Personal Photographer Website",
        image: project2,
        live: 'https://lens-king-108c1.web.app/',
        code: 'https://github.com/antudaa/Lens-King-Client-Site'
      },
      {
        title: "Buy And Sell Website",
        image: project3,
        live: 'https://resale-land-7ef74.web.app/',
        code: 'https://github.com/antudaa/Resale-Land-Client-Site'
      },
    ],
  },
  Testimonials: {
    title: "Testimonials",
    subtitle: "MY CLIENT REVIEWS",
    testimonials_content: [
      {
        review:
          "“In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstra”",
        img: avatar1,
        name: "JOHN DOE",
      },
      {
        review:
          "“In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstra”",
        img: avatar2,
        name: "Tom Alex",
      },
      {
        review:
          "“In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstra”",
        img: avatar3,
        name: "Johnny",
      },
      {
        review:
          "“In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstra”",
        img: avatar4,
        name: "ROBBIN",
      },
    ],
  },
  HireMe: {
    title: "Hire Me",
    subtitle: "FOR YOUR PROJECTS",
    image1: HireMe_person,
    image2: HireMe_person2,
    para: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document elying on mean",
    btnText: "Contact",
  },
  Contact: {
    title: "Contect Me",
    subtitle: "GET IN TOUCH",
    social_media: [
      {
        text: "antu.haks@gamil.com",
        link: "mailto:antu.haks@gmail.com",
      },
      {
        text: "+8801788362766",
        link: "https://wa.me/1788362766",
      },
      {
        text: "Linkedin",
        link: "https://www.linkedin.com/in/antu-antu/",
      },
    ],
  },
  Footer: {
    text: "All © Copy Right Reserved 2022",
  },
};

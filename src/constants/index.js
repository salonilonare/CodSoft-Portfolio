import {
    frontend,
    backend,
    javaicon,
    webdev,
    javascript,
    java,
    html,
    css,
    reactjs,
    redux,
    nextjs,
    nodejs,
    mysql,
    git,
    elogo,
    youtubeicon,
    fitnessicon,
    chatapp,
    github1,
    frnd1,
    frnd2,
    frnd3,
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
      icon: webdev,
    },
    {
      title: "Front-end Developer",
      icon: frontend,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Java Developer",
      icon: javaicon,
    },
  ];
  
  const technologies = [
    {
      name: "Java",
      icon: java,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "Next JS",
      icon: nextjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "MySQL",
      icon: mysql,
    },
    {
      name: "GitHub",
      icon: github1,
    },
    {
      name: "git",
      icon: git,
    },
  ];
  
  const experiences = [
    {
      title: "Web Development Intern",
      company_name: "CodSoft",
      icon : elogo,
      iconBg: "#E6DEDD",
      date: "1 Aug 2023 - 31 Aug 2023",
      points: [
        "Built website content and designs using HTML and CSS.",
        "Engineered websites using web development frameworks such as Reacts.",
        "Developed 3D Portfolio applications using Three.js.",
      ],
    },
    {
      title: "Intern",
      company_name: "Treue Technologies",
      icon:elogo,
      iconBg: "#383E56",
      date: "16 July 2023 - 20 Aug 2023",
      points: [
        "Implemented strategies to take advantage of new opportunities.",
        "Identified areas for improvement, narrowing focus for decision-makers in making necessary changes.",
        "Developed a user-friendly web platform for browsing and purchasing books using React)S and RESTful APIs.",
        
      ],
    },
    ];
  
   const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as this product, but Saloni proved me wrong.",
      name: "Jayshree",
      designation: "IPS",
      company: "Indore",
      image: frnd1,
    },
    {
      testimonial:
        "Your website highlights your versatility and attention to detail. It's a testament to your commitment to excellence.",
      name: "Vibhuti",
      designation: "NIT",
      company: "Warangal",
      image: frnd2,
    },
    {
      testimonial:
        "Your website showcases a perfect blend of creativity and professionalism - truly impressive!",
      name: "Harshita",
      designation: "NIT",
      company: "Raipur",
      image: frnd3,
    },
  ];
  
  const projects = [
    {
      name: "MediaStream Hub",
      description:
        "This innovative website enables users to upload, share, and stream videos effortlessly. Designed to handle large-scale video storage and smooth streaming.",
      tags: [
        {
          name: "React",
          color: "blue-text-gradient",
        },
        {
          name: "MaterialUI",
          color: "green-text-gradient",
        },
        {
          name: "ResponsiveDesign",
          color: "pink-text-gradient",
        },
      ],
      image: youtubeicon,
      source_code_link: "https://github.com/",
    },
    {
      name: "ActiveLife",
      description:
        "An empowering fitness app that harnesses the full potential of advanced React techniques and an optimized file structure.ActiveLife takes your fitness journey to the next level by curating related YouTube videos, offering valuable insights and inspiration right at your fingertips.",
      tags: [
        {
          name: "ReactTechniques",
          color: "blue-text-gradient",
        },
        {
          name: "RapidAPI",
          color: "green-text-gradient",
        },
        {
          name: "WebApp",
          color: "pink-text-gradient",
        },
      ],
      image: fitnessicon,
      source_code_link:"https://github.com/salonilonare",
    },
    {
      name: "Real-Time Chat Application using React",
      description:
        "Enable online statuses, read indicators, image support, and sound notifications for a user experience.One of the standout features of this chat application is the support for multiple rooms. ",
      tags: [
        {
          name: "WebChat",
          color: "blue-text-gradient",
        },
        {
          name: "ReactJS",
          color: "green-text-gradient",
        },
        {
          name: "RealTimeMessaging",
          color: "pink-text-gradient",
        },
      ],
      image: chatapp,
      source_code_link: "https://github.com/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };
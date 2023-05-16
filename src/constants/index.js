import {
  icon,
  mobile,
  backend,
  creator,
  web,
  ecommerce,
  petnest,
  django,
  NEcom,
  NFoodZone,
  NDeliveroo,
} from "../assets";

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
    title: "3D Artist and Developer",
    icon: creator,
  },
];

// const technologies = [
//   {
//     name: "HTML 5",
//     icon: html,
//   },
//   {
//     name: "CSS 3",
//     icon: css,
//   },
//   {
//     name: "JavaScript",
//     icon: javascript,
//   },
//   {
//     name: "TypeScript",
//     icon: typescript,
//   },
//   {
//     name: "React JS",
//     icon: reactjs,
//   },
//   {
//     name: "Redux Toolkit",
//     icon: redux,
//   },
//   {
//     name: "Tailwind CSS",
//     icon: tailwind,
//   },
//   {
//     name: "Node JS",
//     icon: nodejs,
//   },
//   {
//     name: "MongoDB",
//     icon: mongodb,
//   },
//   {
//     name: "Three JS",
//     icon: threejs,
//   },
//   {
//     name: "git",
//     icon: git,
//   },
//   {
//     name: "figma",
//     icon: figma,
//   },
//   {
//     name: "docker",
//     icon: docker,
//   },
// ];

const experiences = [
  {
    title: "React.js Developer",
    company_name: "Freelance",
    icon: icon,
    iconBg: "#383E56",
    date: "January 2021 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "React Native Developer",
    company_name: "Freelance",
    icon: icon,
    iconBg: "#E6DEDD",
    date: "Jan 2022 - Present",
    points: [
      "Developing and maintaining Mobile applications using React Native and other related technologies.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Backend Developer",
    company_name: "Freelance",
    icon: icon,
    iconBg: "#383E56",
    date: "Jan 2020 - Jan 2023",
    points: [
      "Developing and maintaining web applications using Python frameworks Django and other related technologies.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "3D Artist",
    company_name: "Freelance",
    icon: icon,
    iconBg: "#E6DEDD",
    date: "Jan 2017 - Present",
    points: [
      "Creating high quality highpoly and lowpoly model for Game props or Animation using Blender and Autodesk Maya.",
      "UV unwrapping and texturing in Adobe Photoshop.",
      "Material and Lighting setup for Realistic rendering and  in Mental Ray and Cycles",
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
    name: "Pet Nest",
    description:
      "Image sharing social media responsive web app, user can create profile with image and upload pet image to share others and comment others post.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "sanity",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "OAuth",
        color: "blue-text-gradient",
      },
    ],
    image: petnest,
    source_code_link: "https://github.com/MahbubMorshed/petnest",
    live_side_link: "https://petnest-gules.vercel.app/",
  },
  {
    name: "E-Commerce",
    description:
      "A modern Full stack ecommerce fully responsive web app with, user search product by category and variations, profile create, update and django auth.",
    tags: [
      {
        name: "Django",
        color: "blue-text-gradient",
      },
      {
        name: "Bootstrap",
        color: "green-text-gradient",
      },
      {
        name: "paypal",
        color: "pink-text-gradient",
      },
    ],
    image: django,
    source_code_link: "https://github.com/MahbubMorshed/shopbd-pythonAnywhere",
    live_side_link: "https://mahbubmorshed.pythonanywhere.com/",
  },
  {
    name: "Sound Shop",
    description:
      "A modern e-commerce fully responsive fullstack web app with product image gallery, cart and stripe payment method and Sanity backend.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "sanity",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
      {
        name: "stripe",
        color: "blue-text-gradient",
      },
    ],
    image: ecommerce,
    source_code_link: "https://github.com/MahbubMorshed/shop_next_sanity",
    live_side_link: "https://shop-next-sanity-orpin.vercel.app/",
  },
  {
    name: "Ecommerce",
    description:
      "A modern Frontend E-Commerce android app with signup, profile, cart, shop, order, payment, shipping, total, history, pages, reviews, pages.",
    tags: [
      {
        name: "native",
        color: "blue-text-gradient",
      },
      {
        name: "native base",
        color: "green-text-gradient",
      },
      {
        name: "swipe-list",
        color: "pink-text-gradient",
      },
    ],
    image: NEcom,
    source_code_link: "https://github.com/MahbubMorshed/shop-frontend-native",
    live_side_link:
      "https://drive.google.com/file/d/1DMS7DoPM5UjD7bPe4RpWh9Li0ICm3XCS/view?usp=share_link",
  },
  {
    name: "FoodZone",
    description:
      "Location based restaurent and food searching android App with firebase authentication, google map api and camera module.",
    tags: [
      {
        name: "native",
        color: "blue-text-gradient",
      },
      {
        name: "firebase",
        color: "green-text-gradient",
      },
      {
        name: "map",
        color: "pink-text-gradient",
      },
      {
        name: "camera",
        color: "blue-text-gradient",
      },
    ],
    image: NFoodZone,
    source_code_link: "https://github.com/MahbubMorshed/Food_Zone",
    live_side_link:
      "https://drive.google.com/file/d/10ibpQkI_jZ7r5y2eDyGz5laZP7x2V23e/view?usp=share_link",
  },
  {
    name: "Deliveroo",
    description:
      "Deliveroo location based food order and delivery app with feature cart, total and order functionality. Sanity backend integrated with frontend.",
    tags: [
      {
        name: "native",
        color: "blue-text-gradient",
      },
      {
        name: "sanity",
        color: "green-text-gradient",
      },
      {
        name: "Tailwind css",
        color: "pink-text-gradient",
      },
      {
        name: "Redux",
        color: "blue-text-gradient",
      },
    ],
    image: NDeliveroo,
    source_code_link: "https://github.com/MahbubMorshed/deliveroo",
    live_side_link:
      "https://drive.google.com/file/d/1wX4d9-dh_JmVXQL6138r--aFtVdf7Vxh/view?usp=share_link",
  },
];

export { services, experiences, testimonials, projects };

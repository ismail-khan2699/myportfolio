import { FaReact, FaCss3Alt } from "react-icons/fa6";
import { SiNetlify } from "react-icons/si";
import { RiNextjsLine } from "react-icons/ri";
import { SiTailwindcss } from "react-icons/si";
const projects = [
  {
    imageUrl: "/1businessportfolio-small.png",
    imageUrlFull: "/1businessportfolio.png",
    githubLink: "https://github.com/ismail-khan2699/BusinessPortfolio",
    liveDemoLink: "https://businessportfolio9387.netlify.app/",
    title: "Web Megnatism",
    descriptionPoints: [
      "Responsive Design: Optimized for all devices.",
      "Dynamic Content: React components and state management.",
      "Custom Styling: Sleek UI with custom CSS.",
    ],
    technologies: [
      { icon: <FaReact className="min-h-4 min-w-4" />, name: "REACTjs, TSX" },
      { icon: <FaCss3Alt className="min-h-4 min-w-4" />, name: "CSS" },
      { icon: <SiNetlify className="min-h-4 min-w-4" />, name: "NETLIFY" },
    ],
  },
  {
    imageUrl: "/windmill-small.png",
    imageUrlFull: "/windmill-netlify-app.png",
    githubLink: "https://github.com/ismail-khan2699/WindMill",
    liveDemoLink: "https://windmill.netlify.app/",
    title: "Wind Mill",
    descriptionPoints: [
      "Responsive Design: Optimized for all devices.",
      "Dynamic Content: React components and state management.",
      "Custom Styling: Using Tailwindcss",
    ],
    technologies: [
      {
        icon: <RiNextjsLine className="min-h-4 min-w-4" />,
        name: "NEXT JS",
      },
      {
        icon: <SiTailwindcss className="min-h-4 min-w-4" />,
        name: "TAILWINDCSS",
      },
      { icon: <SiNetlify className="min-h-4 min-w-4" />, name: "NETLIFY" },
    ],
  },
  {
    imageUrl: "/49pound-small.png",
    imageUrlFull: "/49pound-netlify-app.png",
    githubLink: "https://github.com/ismail-khan2699/49pound",
    liveDemoLink: "https://49pound.netlify.app/",
    title: "49 Pound Social",
    descriptionPoints: [
      "Responsive Design: Optimized for all devices.",
      "Dynamic Content: React components and state management.",
      "Custom Styling: Sleek UI with Tailwind CSS.",
      "Sleek Animations: Added animations to the elements",
    ],
    technologies: [
      {
        icon: <RiNextjsLine className="min-h-4 min-w-4" />,
        name: "NEXT JS",
      },
      {
        icon: <SiTailwindcss className="min-h-4 min-w-4" />,
        name: "TAILWINDCSS",
      },
      { icon: <SiNetlify className="min-h-4 min-w-4" />, name: "NETLIFY" },
    ],
  },
  {
    imageUrl: "/doctorinterface-small.png",
    imageUrlFull: "/doctorinterface-netlify-app.png",
    githubLink: "https://github.com/ismail-khan2699/Doctor-Interface",
    liveDemoLink: "https://mediappinterface.netlify.app/",
    title: "Doctor App Interface",
    descriptionPoints: [
      "Dynamic Content: React components and state management.",
      "Custom Styling: Sleek UI with custom CSS.",
    ],
    technologies: [
      { icon: <FaReact className="min-h-4 min-w-4" />, name: "REACTjs, TSX" },
      { icon: <FaCss3Alt className="min-h-4 min-w-4" />, name: "CSS" },
      { icon: <SiNetlify className="min-h-4 min-w-4" />, name: "NETLIFY" },
    ],
  },
  {
    imageUrl: "/imagecaption-small.png",
    imageUrlFull: "/texttospeechgen-netlify-app.png",
    githubLink: "https://github.com/ismail-khan2699/intelliwriter",
    liveDemoLink: "https://texttospeechgen.netlify.app/CaptionGenerator",
    title: "Intelliwriter",
    descriptionPoints: [
      "Responsive Design: Optimized for all devices.",
      "Dynamic Content: React components and state management.",
      "Custom Styling: Sleek UI with Tailwind CSS.",
    ],
    technologies: [
      {
        icon: <RiNextjsLine className="min-h-4 min-w-4" />,
        name: "NEXT JS",
      },
      {
        icon: <SiTailwindcss className="min-h-4 min-w-4" />,
        name: "TAILWINDCSS",
      },
      { icon: <SiNetlify className="min-h-4 min-w-4" />, name: "NETLIFY" },
    ],
  },
  // Add more project objects here as needed
];

export { projects };

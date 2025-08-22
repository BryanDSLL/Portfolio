import { FaCode, FaPalette, FaMobile } from 'react-icons/fa';
import DentalCare from '../assets/dentalcare.mp4';
import BraIA from '../assets/braia.png';

// Array com os dados dos projetos em destaque
export const projectsData = [
  {
    id: 1,
    title: "DentalCare",
    description: "Sistema de agendamento para clínica odontológica com interface moderna e responsiva.",
    technologies: [
      { name: "React", color: "bg-blue-600/20 text-blue-400" },
      { name: "Vite", color: "bg-green-600/20 text-green-400" },
      { name: "Tailwind CSS", color: "bg-cyan-600/20 text-cyan-400" },
      { name: "Node.js", color: "bg-green-600/20 text-green-400" }
    ],
    media: [
      { type: "video", src: DentalCare, alt: "DentalCare Demo" }
    ],
    fallbackIcon: FaCode,
    fallbackColor: "from-blue-600/20 to-purple-600/20",
    iconColor: "text-blue-400"
  },
  {
    id: 2,
    title: "Bra.IA",
    description: "Chatbot conectado a LLMs para uso como assistente pessoal.",
    technologies: [
      { name: "React", color: "bg-blue-600/20 text-blue-400" },
      { name: "Next.js", color: "bg-gray-600/20 text-gray-400" },
      { name: "Tailwind CSS", color: "bg-cyan-600/20 text-cyan-400" },
      { name: "Node.js", color: "bg-green-600/20 text-green-400" }
    ],
    media: [
      { type: "image", src: BraIA, alt: "Bra.IA Interface" }
    ],
    fallbackIcon: FaPalette,
    fallbackColor: "from-green-600/20 to-blue-600/20",
    iconColor: "text-green-400"
  },
  {
    id: 3,
    title: "Em breve",
    description: "Novo projeto em desenvolvimento com tecnologias modernas.",
    technologies: [
      { name: "React Native", color: "bg-blue-600/20 text-blue-400" },
      { name: "TypeScript", color: "bg-blue-600/20 text-blue-400" },
      { name: "Expo", color: "bg-purple-600/20 text-purple-400" }
    ],
    media: [],
    fallbackIcon: FaMobile,
    fallbackColor: "from-purple-600/20 to-pink-600/20",
    iconColor: "text-purple-400"
  }
];
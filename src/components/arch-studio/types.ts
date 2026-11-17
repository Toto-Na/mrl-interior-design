export type PageName = "home" | "projects" | "services" | "about" | "contact";

export interface Project {
  id: number;
  title: string;
  category: "Architecture" | "Interiors" | "Landscapes";
  location: string;
  year: string;
  image: string;
  description: string;
}

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: "The Horizon Villa",
    category: "Architecture",
    location: "Aspen, Colorado",
    year: "2024",
    image: "/images/local-assets/2246df08492f.jpg",
    description:
      "A modern curved-glass residence cantilevered over a rocky mountainside, designed around natural light and panoramic views.",
  },
  {
    id: 2,
    title: "Cedar Pavilion",
    category: "Interiors",
    location: "Kyoto, Japan",
    year: "2024",
    image: "/images/local-assets/5874ade3e3e2.jpg",
    description:
      "Warm minimal interiors blending raw cedar, plaster and indirect light to create a serene sequence of living spaces.",
  },
  {
    id: 3,
    title: "Stonegarden Terrace",
    category: "Landscapes",
    location: "Provence, France",
    year: "2023",
    image: "/images/local-assets/3864a7e989ff.jpg",
    description:
      "A terraced landscape of native stone, olive groves and reflecting pools that frames a hillside residence.",
  },
  {
    id: 4,
    title: "Aurora Cliff House",
    category: "Architecture",
    location: "Reykjavik, Iceland",
    year: "2023",
    image: "/images/local-assets/25de431d3aaf.jpg",
    description:
      "A glass-and-basalt retreat perched on a coastal cliff, engineered for extreme weather while framing the northern lights.",
  },
  {
    id: 5,
    title: "Atelier Loft",
    category: "Interiors",
    location: "Milan, Italy",
    year: "2024",
    image: "/images/local-assets/ac9d937081a2.jpg",
    description:
      "An adaptive-reuse loft inside a 19th-century industrial building, with custom millwork and a private gallery wing.",
  },
  {
    id: 6,
    title: "Riverbend Gardens",
    category: "Landscapes",
    location: "Cotswolds, UK",
    year: "2022",
    image: "/images/local-assets/1817fedff5ba.jpg",
    description:
      "A series of outdoor rooms沿着 a river bend, weaving wild meadow planting with formal water features.",
  },
  {
    id: 7,
    title: "Solstice House",
    category: "Architecture",
    location: "Marrakech, Morocco",
    year: "2023",
    image: "/images/local-assets/555ce6017b4e.jpg",
    description:
      "A courtyard house of rammed earth and cast bronze, oriented to track the winter solstice across a central pool.",
  },
  {
    id: 8,
    title: "The Reading Room",
    category: "Interiors",
    location: "Copenhagen, Denmark",
    year: "2024",
    image: "/images/local-assets/3101889e4bb1.jpg",
    description:
      "A private library and study lined with hand-bound oak shelving, micro-acoustic panels and a hidden reading nook.",
  },
  {
    id: 9,
    title: "Coastal Pine Walk",
    category: "Landscapes",
    location: "Amalfi, Italy",
    year: "2022",
    image: "/images/local-assets/515608dc1f6c.jpg",
    description:
      "A restored coastal pine walk with dry-stone retaining walls, Mediterranean herbs and a sunset belvedere.",
  },
];

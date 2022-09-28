import type { ProjectType } from "@/types"

const PROJECTS: Record<
  ProjectType,
  Array<{ filename: string; alt: string; link?: string }>
> = {
  // LE IMMAGINI DEVI METTERLA NELLA CARTELLA PUBLIC/IMAGES/ !!!
  // ----------------------------------------
  "web-design": [
    {
      filename: "pomi-corp.webp",
      alt: "landing page designer e developer agenzia",
      link: "https://www.behance.net/gallery/153682137/Designer-and-Developer-Landing-Page",
    },
    {
      filename: "shopisea.webp",
      alt: "landing page servizi nft e metaverso",
      link: "https://www.behance.net/gallery/153543541/Landing-page-metaverse-services",
    },
    {
      filename: "sito-minecraft.webp",
      alt: "landing page server minecraft",
      link: "https://www.behance.net/gallery/153454421/Landing-page-Minecraft-server",
    },
    {
      filename: "construction-landing.webp",
      alt: "landing page azienda costruzioni e trasporti",
      link: "https://www.behance.net/gallery/153346839/Landing-Page-Construction-Agency",
    },
  ],
  "case-studies": [
    {
      filename: "plant-app.webp",
      alt: "interfaccia app negozio piante",
      link: "https://www.behance.net/gallery/153460295/UX-Case-Study-Plant-Shop",
    },
    {
      filename: "big-hack.webp",
      alt: "interfaccia app finalisti hackaton 2022",
      link: " https://github.com/Yoddikko/Be-Charge-Host-Hackaton2022",
    },
    {
      filename: "goodie-foodie.webp",
      alt: "case study app cibo",
      link: "https://www.behance.net/gallery/153524527/UX-Case-Study-Food-App",
    },
  ],
  "graphic-design": [
    {
      filename: "logo-carmine.png",
      alt: "logo programmatore",
      link: "https://www.behance.net/gallery/153602461/Logo-Web-Developer",
    },
    {
      filename: "studio-bimbi.png",
      alt: "logo asilo",
      link: "https://www.behance.net/gallery/153591597/Logo-Studio-Bimbi-kids",
    },
    {
      filename: "holy-cannolo.png",
      alt: "logo for designer and developer",
      link: "https://www.behance.net/gallery/153609953/Logo-Sicilian-Design-and-Developer",
    },
  ],
  // "social-design": [
  //   { filename: "beauty.webp", alt: "post social media compagnia bellezza" },
  //   { filename: "ig-work.webp", alt: "post social media abbigliamento" },
  //   {
  //     filename: "instagram-post.webp",
  //     alt: "post social media negozio articoli da regalo",
  //   },
  // ],
  // ----------------------------------------
}

export default PROJECTS

import type { ProjectType } from "@/types"

const PROJECTS: Record<
  ProjectType,
  Array<{ filename: string; alt: string }>
> = {
  // LE IMMAGINI DEVI METTERLA NELLA CARTELLA PUBLIC/IMAGES/ !!!
  // ----------------------------------------
  "web-design": [
    { filename: "events-site.webp", alt: "landing page sito di eventi" },
    { filename: "shopisea.webp", alt: "landing page servizi nft e metaverso" },
    {
      filename: "sito-carmine.webp",
      alt: "landing page portfolio programmatore",
    },
  ],
  "app-design": [
    { filename: "plant-app.webp", alt: "interfaccia app negozio piante" },
    {
      filename: "big-hack.webp",
      alt: "interfaccia app finalisti hackaton 2022",
    },
  ],
  "graphic-design": [
    { filename: "logo-carmine.webp", alt: "logo programmatore" },
    { filename: "studio-bimbi.webp", alt: "logo asilo" },
  ],
  "social-design": [
    { filename: "beauty.webp", alt: "post social media compagnia bellezza" },
    { filename: "ig-work.webp", alt: "post social media abbigliamento" },
    {
      filename: "instagram-post.webp",
      alt: "post social media negozio articoli da regalo",
    },
  ],
  // ----------------------------------------
}

export default PROJECTS

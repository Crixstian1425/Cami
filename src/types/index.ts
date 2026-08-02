export interface GalleryItem {
  id: string;
  type: "image" | "video";
  title: string;
  description: string;
  src: string;
  thumbnail?: string;
  size: "sm" | "md" | "lg";
}

export interface PlaylistItem {
  id: string;
  title: string;
  artist: string;
  description: string;
  /** Reemplaza con la ruta de la portada, ej: "/images/cancion1.jpg" */
  coverSrc: string;
}

export interface NavItem {
  id: string;
  label: string;
  href: string;
}

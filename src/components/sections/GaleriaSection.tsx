"use client";

import { useState } from "react";
import Image from "next/image";
import { galleryItems } from "@/data/gallery";
import ScrollReveal from "@/components/ui/ScrollReveal";
import Lightbox from "@/components/ui/Lightbox";
import FloralDecoration from "@/components/ui/FloralDecoration";
import type { GalleryItem } from "@/types";

const sizeHeights = {
  sm: "h-48 sm:h-52",
  md: "h-56 sm:h-64",
  lg: "h-64 sm:h-72 md:h-80",
};

export default function GaleriaSection() {
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);

  return (
    <section className="relative min-h-[calc(100dvh-var(--nav-height))] bg-cream/50 paper-texture overflow-hidden">
      <FloralDecoration
        variant="rose"
        size="md"
        className="absolute top-[12%] left-[4%] animate-float-slow opacity-40 hidden sm:block"
      />
      <FloralDecoration
        variant="sprig"
        size="sm"
        className="absolute bottom-[10%] right-[5%] animate-float-slower opacity-35"
      />
      <div className="section-container">
        <ScrollReveal>
          <h2 className="section-title">Galería</h2>
          <p className="section-subtitle">
          Algunos momentos solo duran unos segundos, pero encuentran la forma de quedarse para siempre.
          </p>
        </ScrollReveal>

        <div className="masonry-grid">
          {galleryItems.map((item, index) => (
            <ScrollReveal key={item.id} delay={index * 100}>
              <article
                className="masonry-item group cursor-pointer"
                onClick={() => setSelectedItem(item)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    setSelectedItem(item);
                  }
                }}
                aria-label={`Ver ${item.title}`}
              >
                <div className="card-hover bg-bone rounded-scrapbook shadow-card overflow-hidden">
                  {/* Imagen */}
                  <div
                    className={`relative w-full ${sizeHeights[item.size]} overflow-hidden`}
                  >
                    <Image
                      src={item.type === "video" ? item.thumbnail! : item.src}
                      alt={item.title}
                      fill
                      className="object-cover transition-transform duration-slower ease-out group-hover:scale-105"
                      sizes="(max-width: 480px) 100vw, (max-width: 768px) 50vw, 33vw"
                    />

                    {/* Overlay en hover */}
                    <div
                      className="absolute inset-0 bg-ink/0 group-hover:bg-ink/15
                                    transition-all duration-slow flex items-center justify-center"
                    >
                      {item.type === "video" && (
                        <div
                          className="w-12 h-12 rounded-full bg-bone/80 flex items-center justify-center
                                        shadow-soft opacity-80 group-hover:opacity-100 transition-opacity"
                        >
                          <svg
                            width="18"
                            height="18"
                            viewBox="0 0 24 24"
                            fill="none"
                            aria-hidden="true"
                          >
                            <path d="M8 5v14l11-7L8 5z" fill="#8b7355" />
                          </svg>
                        </div>
                      )}
                      <span
                        className="absolute bottom-3 right-3 text-bone text-xs font-poppins
                                     opacity-0 group-hover:opacity-100 transition-opacity duration-300
                                     bg-ink/30 px-2 py-1 rounded-full"
                      >
                        Ver más
                      </span>
                    </div>
                  </div>

                  {/* Texto */}
                  <div className="p-4 sm:p-5">
                    <h3 className="font-playfair text-base sm:text-lg text-ink mb-1.5">
                      {item.title}
                    </h3>
                    <p className="font-cormorant text-sm sm:text-base text-ink-light leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </div>

      <Lightbox item={selectedItem} onClose={() => setSelectedItem(null)} />
    </section>
  );
}

"use client";

import { useEffect, useCallback } from "react";
import Image from "next/image";
import type { GalleryItem } from "@/types";
import { createPortal } from "react-dom";

interface LightboxProps {
  item: GalleryItem | null;
  onClose: () => void;
}

export default function Lightbox({ item, onClose }: LightboxProps) {
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    },
    [onClose]
  );

  useEffect(() => {
    if (!item) return;

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [item, handleKeyDown]);

  if (!item) return null;

  return createPortal (
    <div
      className="lightbox-overlay fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={`Vista ampliada: ${item.title}`}
    >
      <div className="absolute inset-0 bg-ink/40 backdrop-blur-sm" />

      <div
        className="lightbox-content relative z-10 w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-cream rounded-scrapbook shadow-letter"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-3 right-3 z-20 w-10 h-10 flex items-center justify-center
                     rounded-full bg-bone/80 text-ink-light
                     hover:bg-bone hover:text-ink transition-colors duration-300
                     focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-coffee/40"
          aria-label="Cerrar"
        >
          <svg
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            aria-hidden="true"
          >
            <path
              d="M4 4L14 14M14 4L4 14"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </svg>
        </button>

        <div className="relative w-full aspect-[4/3] sm:aspect-[16/10] overflow-hidden rounded-t-scrapbook bg-beige">
          {item.type === "video" ? (
            <>
              {/* Reemplaza src con tu video local, ej: "/videos/mi-video.mp4" */}
              {item.src.endsWith(".mp4") ||
              item.src.endsWith(".webm") ||
              item.src.startsWith("/videos/") ? (
                <video
                  src={item.src}
                  controls
                  playsInline
                  className="w-full h-full object-cover"
                  poster={
                    item.src.startsWith("/videos/")
                      ? undefined
                      : item.src
                  }
                />
              ) : (
                <div className="relative w-full h-full">
                  <Image
                    src={item.src}
                    alt={item.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 672px"
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-ink/20">
                    <div className="w-16 h-16 rounded-full bg-bone/90 flex items-center justify-center shadow-soft">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        aria-hidden="true"
                      >
                        <path d="M8 5v14l11-7L8 5z" fill="#8b7355" />
                      </svg>
                    </div>
                  </div>
                  <p className="absolute bottom-3 left-3 right-3 text-center text-xs text-bone/80 font-poppins">
                    Reemplaza con tu video en /public/videos/
                  </p>
                </div>
              )}
            </>
          ) : (
            <Image
              src={item.src}
              alt={item.title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 672px"
            />
          )}
        </div>

        <div className="p-5 sm:p-7">
          <h3 className="font-playfair text-xl sm:text-2xl text-ink mb-2">
            {item.title}
          </h3>
          <p className="font-cormorant text-base sm:text-lg text-ink-light leading-relaxed">
            {item.description}
          </p>
        </div>
      </div>
      </div>,
  document.body
);
}

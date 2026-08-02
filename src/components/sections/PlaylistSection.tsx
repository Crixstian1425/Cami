"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { playlistItems } from "@/data/playlist";
import ScrollReveal from "@/components/ui/ScrollReveal";
import FloralDecoration from "@/components/ui/FloralDecoration";
import type { PlaylistItem } from "@/types";

function PlayIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path d="M8 5v14l11-7L8 5z" fill="currentColor" />
    </svg>
  );
}

function PauseIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <rect x="6" y="5" width="4" height="14" fill="currentColor" />
      <rect x="14" y="5" width="4" height="14" fill="currentColor" />
    </svg>
  );
}

export default function PlaylistSection() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [currentSong, setCurrentSong] = useState<string | null>(null);

  const handlePlay = (song: PlaylistItem) => {
    if (!audioRef.current) return;

    if (currentSong === song.id) {
      audioRef.current.pause();
      setCurrentSong(null);
      return;
    }

    audioRef.current.src = song.audioSrc;
    audioRef.current.play();
    setCurrentSong(song.id);
  };

  return (
    <section className="relative min-h-[calc(100dvh-var(--nav-height))] bg-cream/50 paper-texture overflow-hidden">
      <FloralDecoration
        variant="leaf"
        size="md"
        className="absolute top-[10%] right-[4%] animate-float-slower opacity-35 hidden sm:block"
      />

      <FloralDecoration
        variant="rose"
        size="sm"
        className="absolute bottom-[8%] left-[5%] animate-float-slow opacity-40"
      />

      <div className="section-container">
        <ScrollReveal>
          <h2 className="section-title">Playlist</h2>
          <p className="section-subtitle">
            No son mis canciones favoritas. Son las que inevitablemente terminan llevándome a ti.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6 max-w-5xl mx-auto">
          {playlistItems.map((song, index) => (
            <ScrollReveal key={song.id} delay={index * 80}>
              <article
                onClick={() => handlePlay(song)}
                className="group cursor-pointer card-hover bg-bone rounded-scrapbook shadow-card overflow-hidden flex sm:flex-col h-auto"
              >
                <div className="relative w-24 h-24 sm:w-full sm:h-44 md:h-48 flex-shrink-0 overflow-hidden">
                  <Image
                    src={song.coverSrc}
                    alt={`Portada de ${song.title}`}
                    fill
                    className="object-cover transition-transform duration-slower ease-out group-hover:scale-105"
                    sizes="(max-width:640px) 96px,(max-width:1024px) 50vw,33vw"
                  />

                  <div className="absolute inset-0 bg-black/20 flex items-center justify-center">

                    <div
                      className="w-12 h-12 rounded-full bg-coffee text-white flex items-center justify-center shadow-lg"
                    >
                      {currentSong === song.id ? (
                        <PauseIcon />
                      ) : (
                        <PlayIcon />
                      )}
                    </div>

                  </div>
                </div>

                <div className="flex-1 p-4 sm:p-5 flex flex-col justify-center min-w-0">
                  <h3 className="font-playfair text-base sm:text-lg text-ink truncate">
                    {song.title}
                  </h3>

                  <p className="font-poppins text-xs sm:text-sm text-coffee/80 tracking-wide mt-0.5">
                    {song.artist}
                  </p>

                  <p className="font-cormorant text-sm text-ink-light leading-relaxed mt-2 sm:mt-3 line-clamp-3">
                    {song.description}
                  </p>
                </div>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </div>

      <audio
        ref={audioRef}
        onEnded={() => setCurrentSong(null)}
      />
    </section>
  );
}
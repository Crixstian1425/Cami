"use client";

import { useState } from "react";
import FloralDecoration from "@/components/ui/FloralDecoration";

interface WelcomeScreenProps {
  onEnter: () => void;
  isExiting: boolean;
}

export default function WelcomeScreen({
  onEnter,
  isExiting,
}: WelcomeScreenProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`fixed inset-0 z-50 flex flex-col items-center justify-center
                  bg-cream paper-texture overflow-hidden
                  ${isExiting ? "welcome-exit" : ""}`}
    >
      {/* Flores decorativas */}
      <FloralDecoration
        variant="rose"
        size="lg"
        className="absolute top-[8%] left-[6%] animate-float-slow opacity-60"
      />
      <FloralDecoration
        variant="sprig"
        size="md"
        className="absolute top-[12%] right-[8%] animate-float-slower opacity-50"
      />
      <FloralDecoration
        variant="leaf"
        size="md"
        className="absolute bottom-[15%] left-[10%] animate-float-slower opacity-40"
      />
      <FloralDecoration
        variant="rose"
        size="sm"
        className="absolute bottom-[20%] right-[12%] animate-float-slow opacity-50"
      />
      <FloralDecoration
        variant="sprig"
        size="sm"
        className="absolute top-[40%] left-[3%] animate-float-slow opacity-30 hidden sm:block"
      />
      <FloralDecoration
        variant="leaf"
        size="lg"
        className="absolute bottom-[8%] right-[5%] animate-float-slower opacity-35 hidden sm:block"
      />

      {/* Contenido central */}
      <div className="relative z-10 flex flex-col items-center px-6 sm:px-8 text-center max-w-lg animate-fade-in">
        <div className="mb-8 sm:mb-10">
          <div className="w-12 h-[1px] bg-pastel-pink mx-auto mb-6 sm:mb-8" />
          <h1 className="font-cormorant text-2xl sm:text-3xl md:text-4xl text-ink leading-relaxed text-balance">
            Para alguien que significó mucho para mí.
          </h1>
          <div className="w-12 h-[1px] bg-pastel-pink mx-auto mt-6 sm:mt-8" />
        </div>

        <button
          onClick={onEnter}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className="btn-primary text-base sm:text-lg min-w-[200px] sm:min-w-[220px]"
        >
          <span>Entrar</span>
          <span
            className={`inline-block transition-transform duration-500 ${
              isHovered ? "scale-125" : "scale-100"
            }`}
          >
            ♡
          </span>
        </button>
      </div>

      {/* Borde decorativo inferior */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-pastel-pink/30 to-transparent" />
    </div>
  );
}

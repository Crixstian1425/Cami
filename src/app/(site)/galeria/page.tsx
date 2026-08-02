import type { Metadata } from "next";
import PageTransition from "@/components/layout/PageTransition";
import GaleriaSection from "@/components/sections/GaleriaSection";

export const metadata: Metadata = {
  title: "Galería — Cami🩵",
};

export default function GaleriaPage() {
  return (
    <PageTransition>
      <GaleriaSection />
    </PageTransition>
  );
}

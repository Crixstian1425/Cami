import type { Metadata } from "next";
import PageTransition from "@/components/layout/PageTransition";
import InicioSection from "@/components/sections/InicioSection";

export const metadata: Metadata = {
  title: "Inicio — Cami🩵",
};

export default function InicioPage() {
  return (
    <PageTransition>
      <InicioSection />
    </PageTransition>
  );
}

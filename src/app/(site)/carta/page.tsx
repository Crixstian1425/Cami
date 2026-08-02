import type { Metadata } from "next";
import PageTransition from "@/components/layout/PageTransition";
import CartaSection from "@/components/sections/CartaSection";

export const metadata: Metadata = {
  title: "Carta — Cami🩵",
};

export default function CartaPage() {
  return (
    <PageTransition>
      <CartaSection />
    </PageTransition>
  );
}

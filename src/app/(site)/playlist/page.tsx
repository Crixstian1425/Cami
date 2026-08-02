import type { Metadata } from "next";
import PageTransition from "@/components/layout/PageTransition";
import PlaylistSection from "@/components/sections/PlaylistSection";

export const metadata: Metadata = {
  title: "Playlist — Cami🩵",
};

export default function PlaylistPage() {
  return (
    <PageTransition>
      <PlaylistSection />
    </PageTransition>
  );
}

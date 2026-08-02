"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import WelcomeScreen from "@/components/WelcomeScreen/WelcomeScreen";

export default function HomePage() {
  const [isExiting, setIsExiting] = useState(false);
  const router = useRouter();

  const handleEnter = () => {
    setIsExiting(true);
    setTimeout(() => {
      router.push("/inicio");
    }, 1200);
  };

  return <WelcomeScreen onEnter={handleEnter} isExiting={isExiting} />;
}

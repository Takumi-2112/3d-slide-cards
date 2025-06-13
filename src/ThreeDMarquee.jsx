"use client";
import { ThreeDMarquee } from "@/components/ui/ThreeDMarqueeUI";
import d2vLogo from "../src/assets/d2v-logo.png"


export function ThreeDMarqueeDemo() {
  const images = [
    d2vLogo,
    d2vLogo,
    d2vLogo,
    d2vLogo,
    d2vLogo,
    d2vLogo,
    d2vLogo,
    d2vLogo,
    d2vLogo,
    d2vLogo,
    d2vLogo,
    d2vLogo,
    d2vLogo,
    d2vLogo,
    d2vLogo,
    d2vLogo,
    d2vLogo,
    d2vLogo,
    d2vLogo,
    d2vLogo,
    d2vLogo,
    d2vLogo,
    d2vLogo,
    d2vLogo,
    d2vLogo,
    d2vLogo,
    d2vLogo,
    d2vLogo,
    d2vLogo,
    d2vLogo,
    d2vLogo,
  ];
  return (
    <div
      className="mx-auto mt-[50px] bg-black w-screen h-screen">
      <ThreeDMarquee images={images} />
    </div>
  );
}

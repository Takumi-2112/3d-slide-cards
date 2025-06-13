"use client";
import { ThreeDMarquee } from "@/components/ui/ThreeDMarqueeUI";
import d2vLogo from "../src/assets/d2v-logo.png";
import d2vLogoWhite from "../src/assets/d2v-logo-white.png";

export function ThreeDMarqueeDemo() {
  const images = [
    d2vLogo,
    d2vLogoWhite,
    d2vLogo,
    d2vLogoWhite,
    d2vLogo,
    d2vLogoWhite,
    d2vLogo,
    d2vLogoWhite,
    d2vLogoWhite,
    d2vLogo,
    d2vLogoWhite,
    d2vLogo,
    d2vLogoWhite,
    d2vLogo,
    d2vLogoWhite,
    d2vLogo,
    d2vLogoWhite,
    d2vLogo,
    d2vLogoWhite,
    d2vLogo,
    d2vLogoWhite,
    d2vLogo,
    d2vLogoWhite,
    d2vLogo,
    d2vLogoWhite,
    d2vLogo,
    d2vLogoWhite,
    d2vLogo,
    d2vLogoWhite,
    d2vLogo,
    d2vLogoWhite,
  ];
  return (
    <div className="mx-auto mt-[50px] bg-black w-screen h-screen">
      <ThreeDMarquee images={images} />
    </div>
  );
}

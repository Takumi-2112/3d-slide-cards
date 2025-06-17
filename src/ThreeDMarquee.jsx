"use client";
import { ThreeDMarquee } from "@/components/ui/ThreeDMarqueeUI";
import d2vLogo from "../src/assets/d2v-logo.png";
import d2vLogoWhite from "../src/assets/d2v-logo-white.png";
import tile1 from "../src/assets/tile-one.png";
import tile2White from "../src/assets/tile-two.png";
import tile3 from "../src/assets/tile-three.png";
import tile4White from "../src/assets/tile-four.png";
import tile5 from "../src/assets/tile-five.png";
import tile6White from "../src/assets/tile-six.png"; 
import tile7White from "../src/assets/tile-seven.png";
import tile8 from "../src/assets/tile-eight.png";

export function ThreeDMarqueeDemo() {
  const images = [
    d2vLogoWhite,
    tile1,
    d2vLogoWhite,
    tile3,
    d2vLogoWhite,
    tile5,
    d2vLogoWhite,
    tile8,
    d2vLogoWhite,
    tile1,
    d2vLogoWhite,
    tile3,
    d2vLogoWhite,
    tile5,
    d2vLogoWhite,
    tile8,
    d2vLogoWhite,
    d2vLogo,
    tile2White,
    d2vLogo,
    tile4White,
    d2vLogo,
    tile6White,
    d2vLogo,
    tile7White,
    d2vLogo,
    tile2White,
    d2vLogo,
    tile4White,
    d2vLogo,
    tile6White,
    d2vLogo,
    tile7White,
    d2vLogo,
    d2vLogoWhite,
    tile1,
    d2vLogoWhite,
    tile3,
    d2vLogoWhite,
    tile5,
    d2vLogoWhite,
    tile8,
    d2vLogoWhite,
    tile1,
    d2vLogoWhite,
    tile3,
    d2vLogoWhite,
    tile5,
    d2vLogoWhite,
    tile8,
    d2vLogoWhite,
    d2vLogo,
    tile2White,
    d2vLogo,
    tile4White,
    d2vLogo,
    tile6White,
    d2vLogo,
    tile7White,
    d2vLogo,
    tile2White,
    d2vLogo,
    tile4White,
    d2vLogo,
    tile6White,
    d2vLogo,
    tile7White,
    d2vLogo,
  ];
  return (
    <div className="mx-auto mt-[50px] bg-black w-screen h-screen">
      <ThreeDMarquee images={images} />
    </div>
  );
}

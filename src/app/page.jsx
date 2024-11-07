import AboutUs from "@/components/AboutUs";
import GallerySlider from "../components/GallerySlider";
import Hero from "@/components/Hero";
import LogoTicker from "@/components/LogoTicker";
import SdgSlider from "@/components/sdgSlider";
import VideoPlayer from "@/components/VideoPlayer";
import Image from "next/image";
import React from "react";
import OurStory from "@/components/OurStory";
import vector3 from "../../public/images/vector3.png";
export default function Home() {
  return (
    <div className="">
      <Hero />
      <GallerySlider />
      <AboutUs />
      <VideoPlayer />
      <div className="relative">
        <div className="absolute -z-10 bottom-0 ">
          <Image
            src={vector3}
            alt="vector"
            className="w-auto h-auto"
            width={200}
            height={200}
          />
        </div>
        <SdgSlider />
        <LogoTicker />
      </div>
      <OurStory />
    </div>
  );
}

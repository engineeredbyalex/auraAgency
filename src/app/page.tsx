'use client'
// importing Navigation
import Navigation from "@/layouts/Navigation";
// importing Title
import Title from "@/components/Title"
// importing image slider
import Slider from "@madzadev/image-slider";
// importing Loading Screen
import LoadingScreen from "@/loading/LoadingScreen"
// importing Landing
import Landing from "@/sections/landing";
// importing AboutUs
import AboutUs from "../sections/about"


export default function Home() {
  const images = [
  { url: "https://firebasestorage.googleapis.com/v0/b/aura-agency-32c86.appspot.com/o/mockup_1_1.png?alt=media&token=aa6c7c32-9230-4379-aef1-19750e9e53f3" },
  { url: "https://firebasestorage.googleapis.com/v0/b/aura-agency-32c86.appspot.com/o/mockup_1_1.png?alt=media&token=aa6c7c32-9230-4379-aef1-19750e9e53f3" },
  { url: "https://firebasestorage.googleapis.com/v0/b/aura-agency-32c86.appspot.com/o/mockup_1_1.png?alt=media&token=aa6c7c32-9230-4379-aef1-19750e9e53f3" },
  ];
  

  return (
    <div className="w-[100vw] min-h-screen flex flex-col items-center justify-start overflow-hidden">
      {/* <LoadingScreen/> */}
      <Navigation />
      <Landing/>
      <AboutUs />
    </div>
  );
}

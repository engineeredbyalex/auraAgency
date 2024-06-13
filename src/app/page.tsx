'use client'
// importing Navigation
import Navigation from "@/app/layouts/Navigation";
// importing Title
import Title from "@/app/components/Title"
// importing Loading Screen
import LoadingScreen from "@/app/loading/LoadingScreen"
// importing Landing
import Landing from "@/app/sections/landing";
// importing AboutUs
import AboutUs from "./sections/about"
// importing Projects
import Projects from "./sections/projects";


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
      <Title/>
      <Landing/>
      <AboutUs />
      <Projects />
    </div>
  );
}

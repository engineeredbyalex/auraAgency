'use client'
// importing Navigation
import Navigation from "@/layouts/Navigation";
// importing Title
import Title from "@/components/Title"
// importing image slider
import Slider from "@madzadev/image-slider";


export default function Landing() {
  const images = [
  { url: "https://firebasestorage.googleapis.com/v0/b/aura-agency-32c86.appspot.com/o/mockup_1_1.png?alt=media&token=aa6c7c32-9230-4379-aef1-19750e9e53f3" },
  { url: "https://firebasestorage.googleapis.com/v0/b/aura-agency-32c86.appspot.com/o/mockup_1_1.png?alt=media&token=aa6c7c32-9230-4379-aef1-19750e9e53f3" },
  { url: "https://firebasestorage.googleapis.com/v0/b/aura-agency-32c86.appspot.com/o/mockup_1_1.png?alt=media&token=aa6c7c32-9230-4379-aef1-19750e9e53f3" },
  ];
  

  return (
    <div className="w-[100vw] h-screen mt-[80px]  flex flex-col items-center justify-start overflow-hidden">
        <div className="h-screen items-center justify-center flex-row overflow-hidden flex ">
         <Slider imageList={images} width={'100vw'} height={'100%'} loop={true} autoPlay={true} autoPlayInterval={5000}/>
        </div>
    </div>
  );
}

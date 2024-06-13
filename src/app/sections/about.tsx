// importing button
import Button from "@/app/components/Button"
// importing Link
import Link from "next/link"
// importing page


export default function AboutUs() {
    return (
        <div className="w-full h-auto mt-10 mb-10 flex flex-col items-center justify-center">
            <h2 className="mt-6 font-bold leading-[3.5rem] text-center uppercase">
                BORN OUT OF PASSION
            </h2>
            <h3 className="mt-2 mb-1">
              What does this mean ?
            </h3>
            <h5 className="text-center w-[80%]">
                We are Aura - a team passionate about digital creation.<br /> We are delighted to bring your ideas to life and to create remarkable digital experiences.<br /> Lets turn your dreams into online reality!
            </h5>
            <div className="mt-3">
                <Link href={'/contact'}>
                    <Button variant="solid_dark">
                        <p>
                            Start your project
                        </p>
                    </Button>
                </Link>
           </div>
        </div>
    )
}
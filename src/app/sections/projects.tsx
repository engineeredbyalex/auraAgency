// importing link
import Link from "next/link"
// importing button
import Button from "../components/Button"

export default function Projects() {
    return (
        <div className="w-full h-auto mt-10 mb-10 flex flex-col items-center justify-center">
            <h2 className="mt-6 font-bold leading-[3.5rem] text-center uppercase">
               Letting our projects speak
            </h2>
            <h3 className="mt-2 mb-1">
              What does this mean ?
            </h3>
            <h5 className="text-center w-[80%]">
             Well...Just talkin about how greate we are isnt our way of doing things, so, we beleive in letting our work speak for us.
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
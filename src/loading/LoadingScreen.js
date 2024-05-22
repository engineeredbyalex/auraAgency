'use client'
// importing useEffect and
import { useEffect,useState } from "react"
// importing gsap
import gsap from "gsap"

export default function LoadingScreen() {
    const [loaded, setLoaded] = useState(false)
    
    useEffect(() => {
        const timer = setTimeout(() => {
            setLoaded(true);
        }, 3000);

        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        if (loaded == false) {
            gsap.to(".loading_screen", {
                top: '0'
            })
            gsap.to(".letter_1", {
                transform:"translateY(0vh)",duration:1
            })
            gsap.to(".letter_2", {
                transform:"translateY(0vh)",duration:1.25
            })
            gsap.to(".letter_3", {
                transform:"translateY(0vh)",duration:1.5
            })
            gsap.to(".letter_4", {
                transform:"translateY(0vh)",duration:1.75
            })
            gsap.to(".catch_text", {
                opacity:1,delay:1.5,duration:1.75
            })
        }
        else {
            gsap.to(".loading_screen", {
                top: '-100%', duration: 1,delay:2.5
            })
            gsap.to(".letter_1", {
                transform: "translateY(100vh)",duration:1,delay:1
            })
            gsap.to(".letter_2", {
                transform: "translateY(-100vh)", duration: 1.25,delay:1
            })
            gsap.to(".letter_3", {
                transform: "translateY(100vh)", duration: 1.5,delay:1
            })
            gsap.to(".letter_4", {
                transform: "translateY(-100vh)", duration: 1.75,delay:1
            })
            gsap.to(".catch_text", {
                opacity: 0,  duration: 1.75
            })
        }
    }, [loaded])


    return (
        <div className="loading_screen">
            <div className="flex">
                <h1 className="letter letter_1">
                    A
                </h1>
                <h1 className="letter letter_2">
                    U
                </h1>
                <h1 className="letter letter_3">
                    R
                </h1>
                <h1 className="letter letter_4">
                    A
                </h1>
             
            </div>
            <div>
                <h5 className="letter catch_text">
                    Your all-in-one Digital Solution
                </h5>
            </div>
        </div>
    )
}
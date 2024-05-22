'use client'
// importing link
import Link from "next/link";
// importing IoSearch, IoCart, IoMenuOutline
import { IoSearch, IoCart, IoMenuOutline } from "react-icons/io5";
// importing useEffect, useState
import { useEffect, useState } from "react";
// importing gsap
import { gsap } from "gsap";
// importing logo
import Logo from "@/app/logo.svg"
// importing image
import Image from "next/image";

export default function Navigation() {
    const [toggle, setToggle] = useState(false);


    useEffect(() => {
        if (toggle) {
            gsap.to(".navigationBar", { background: "#000", zIndex: 10 });
            gsap.to(".navigationBar", { height: "14rem", delay: 0.5 });
            gsap.to(".logo", { fill: "#fff", delay: 0.75, height:'3rem' });
            gsap.to(".menu", { color: "#fff", delay: 0.75 });
            gsap.to(".navigationContainer", { display: 'flex', height: '4rem', width: '100%', background: "#000", zIndex: '2' });
            gsap.to(".menu_items_1", { display: "flex", color: "#fff", position: 'absolute', left:'60px' , top: '10rem', delay: 1.25, zIndex: '1' });
            gsap.to(".menu_items_2", { display: "flex", color: "#fff", position: 'absolute', left: '0px', right: '0px', top: '10rem', delay: 1.35, zIndex: '1' });
            gsap.to(".menu_items_3", { display: "flex", color: "#fff", position: 'absolute', right:'60px' , top: '10rem', delay: 1.45, zIndex: '1' });
        } else {
            gsap.to(".navigationBar", { height: "4rem", zIndex: 10, delay: 1 });
            gsap.to(".navigationBar", { background: "#000", delay: 1.25 });
            gsap.to(".navigationContainer", { background: '#000', delay: 1.25 });
            gsap.to(".logo", { fill: "#fff", delay: 0.25, height:'3rem' });
            gsap.to(".menu", { color: "#fff", delay: 0.25 });
            gsap.to(".menu_items_1", { display: "none", color: "#000", position: 'absolute', left: '60px',top: '6rem', delay:0.25 });
            gsap.to(".menu_items_2", { display: "none", color: "#000", position: 'absolute', left: '0px', right: '0px', top: '6rem', delay:0.35 });
            gsap.to(".menu_items_3", { display: "none", color: "#000", position: 'absolute', right: '60px',top: '6rem', delay:0.45 });
        }
    }, [toggle]);

    return (
        <div className="navigationBar">
            <div className="container">
                <div className="navigationContainer">
                    <div className="logoWrapper">
                        <Link href="/">
                            <Image className="logo"  src={Logo} alt='logo' />
                        </Link>
                    </div>
                    <div className="menuWrapper">
                        <IoMenuOutline className="menu" onClick={() => setToggle(!toggle)} size={40} />
                    </div>
                </div>
                <ul className="">
                    <li className="menu_items_1">
                        <Link href={'/shop'}>
                            <p>Magazin</p>
                        </Link>
                    </li>
                    <li className="menu_items_2">
                        <Link href={'/portfolio'}>
                            <p>Portofoliu</p>
                        </Link>
                    </li>
                    <li className="menu_items_3">
                        <Link href={'/colaboration'}>
                            <p>Colaborare</p>
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    );
}

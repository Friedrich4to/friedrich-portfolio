'use client'

import { useEffect, useState } from "react";
import { ArrowUp } from "./icons/interface_icons";

const isBrowser = () => typeof window !== 'undefined'; //The approach recommended by Next.js

function scrollToTop() {
    if (!isBrowser()) return;
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

export default function ScrollToTopButton() {

    const [isVisible, setIsVisible] = useState(false);

    const handleScroll = () => {
    const scrollTop = window.scrollY;
    setIsVisible(scrollTop > 300);
    };

    useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <button 
        className={`z-40 group fixed right-4 bottom-24 xl:bottom-4 w-fit p-3 xl:p-4 border rounded-xl bg-blanco hover:border-verdeSage hover:bg-verdeSage hover:fill-blanco transition-all ease-aggresive duration-700 ${isVisible ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"} `}
        onClick={scrollToTop}>
            <ArrowUp />
        </button>
    );
}
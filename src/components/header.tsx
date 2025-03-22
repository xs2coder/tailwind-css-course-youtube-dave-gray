"use client";

import React from "react";

const UNICODE = {
    ROCKET: "\u{1F680}",
    HAMBURGER: "\u{2630}"
}

export default function Header(){
    const [showMobileMenu, setShowMobileMenu] = React.useState<boolean>(false);
    const onHamburgerBtnClick = () => {
        setShowMobileMenu((showMobileMenu) => !showMobileMenu);
    }
    return (
        <header className="bg-teal-700 text-white sticky top-0 z-10">
            <section className="max-w-4xl mx-auto p-4 flex justify-between items-center">
                <h1 className="text-3xl font-medium">
                <a href="#hero">{UNICODE.ROCKET} Acme Rockets</a>
                </h1>
                <div>
                    <button id="hamburger-button" onClick={onHamburgerBtnClick} className="text-3xl md:hidden cursor-pointer relative w-8 h-8">
                        {/* {UNICODE.HAMBURGER} */}
                        {/* @NOTE: creating animated hamburger and X from the same */}
                        {/* @NOTE: giving negative margin top */}
                        <div className={`w-8 h-1 rounded absolute top-4 -mt-0.5 transition-all duration-500 before:content=[''] before:bg-white before:w-8 before:h-1 before:rounded before:absolute before:-translate-x-4 before:transition-all before:duration-500 after:content=[''] after:bg-white after:w-8 after:h-1 after:rounded after:absolute after:-translate-x-4 after:transition-all after:duration-500 ${showMobileMenu ? "before:translate-y-0 before:rotate-45 after:translate-y-0 after:-rotate-45 bg-transparent rotate-[720deg]" : "bg-white before:-translate-y-3 after:translate-y-3"}`}></div>
                    </button>
                    {/* @NOTE: space-x-8: gives children of nav element a margin left which is different from margin left on nav element itself */}
                    <nav className="hidden md:block space-x-8 txt-xl" aria-label="main">
                        <a href="#rockets" className="hover:opacity-90">Our Rockets</a>
                        <a href="#testimonials" className="hover:opacity-90">Testimonials</a>
                        <a href="#contact" className="hover:opacity-90">Contact Us</a>
                    </nav>
                </div>
            </section>
            {/* @NOTE: can use specific values for margin, padding etc. by putting in square brackets [] */}
            <section id="mobile-menu" onClick={onHamburgerBtnClick} className={`absolute top-[68px] bg-black w-full text-5xl flex-col justify-content-center origin-top animate-open-menu ${showMobileMenu ? "flex" : "hidden"}`}>
                {/* <button className="text-8xl self-end px-6">
                    &times;
                </button> */}
                <nav className="flex flex-col min-h-screen items-center py-8" aria-label="mobile">
                    <a href="#hero" className="w-full text-center py-6 hover:opacity-90">Home</a>
                    <a href="#rockets" className="w-full text-center py-6 hover:opacity-90">Our Rockets</a>
                    <a href="#testimonials" className="w-full text-center py-6 hover:opacity-90">Testimonials</a>
                    <a href="#contact" className="w-full text-center py-6 hover:opacity-90">Contact Us</a>
                    <a href="#footer" className="w-full text-center py-6 hover:opacity-90">Legal</a>
                </nav>
            </section>
        </header>
    )
}
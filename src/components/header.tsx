const UNICODE = {
    ROCKET: "\u{1F680}",
    HAMBURGER: "\u{2630}"
}

export default function Header(){
    return (
        <header className="bg-teal-700 text-white sticky top-0 z-10">
            <section className="max-w-4xl mx-auto p-4 flex justify-between items-center">
                <h1 className="text-3xl font-medium">
                <a href="#hero">{UNICODE.ROCKET} Acme Rockets</a>
                </h1>
                <div>
                    <button id="mobile-open-button" className="text-3xl sm:hidden focus:outline-none">{UNICODE.HAMBURGER}</button>
                    {/* space-x-8: gives children of nav element a margin left which is different from margin left on nav element itself */}
                    <nav className="hidden sm:block space-x-8 txt-xl" aria-label="main">
                        <a href="#rockets" className="hover:opacity-90">Our Rockets</a>
                        <a href="#testimonials" className="hover:opacity-90">Testimonials</a>
                        <a href="#contact" className="hover:opacity-90">Contact Us</a>
                    </nav>
                </div>
            </section>
        </header>
    )
}
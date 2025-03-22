export default function Footer(){
    return (
        <footer id="#footer" className="bg-teal-700 text-white text-xl">
            {/* @NOTE: using section element as a container for the content */}
            <section className="max-w-4xl mx-auto p-4 flex flex-col sm:flex-row sm:justify-between">
                {/* @NOTE: semantic HTML tag which tells whatever is processing the HTML that the inside is an actual address */}
                <address>
                    <h2>Acme Rocket-Powered Products, Inc.</h2>
                    555 Astro Way<br></br>Fairfield, New Jersey 12345-5555<br></br>
                    {/* @NOTE: when we click the email or phone it gets processed by default email client or dialer because of the href*/}
                    Email: <a href="mailto:inquiries@acmerockets.com">Inquiries@AcmeRockets.com</a><br></br>
                    Phone: <a href="tel:+15555555555">(555) 555-5555</a>
                </address>
                <nav className="hidden md:flex flex-col gap-2" aria-label="footer">
                    <a href="#rockets" className="hover:opacity-90">Our Rockets</a>
                    <a href="#testimonials" className="hover:opacity-90">Testimonials</a>
                    <a href="#contact" className="hover:opacity-90">Contact Us</a>
                </nav>
                <div className="flex flex-col sm:gap-2">
                    <p className="text-right">Copyright &copy; <span id="year">2025</span></p>
                    <p className="text-right">All Rights Reserved</p>
                </div>
            </section>
        </footer>
    )
}
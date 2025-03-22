import Image from "next/image";

const Testimonials = [
  {
    author: "Wile E. Coyote, Genius",
    message: "Acme has always been there for me. Their Explorer rocket arrived in a wooden crate as expected. Life-long customer! A++ shopping experience."
  },
  {
    author: "Marvin The MArtian &amp; K-9",
    message: "The Acme Adventurer Rocket has thwarted my Illudium Q-36 Explosive Space Modulator on several ocassions. This makes me very, very angry! Neverthless, K-9 and I have awarded Acme the Martian contract for space exploration rockets based on Acme's quality and sturdy designs."
  },
  {
    author: "Buzz Lightyear",
    message: "I knew I only wanted &#8212; <span class='italic'>I needed</span> &#8212; Acme's Infinity Rocket for my mission in space. Acme delivered in one day! Noting says <q class='italic'>Take me to your leader</q> like Acme's Infinity Rocket! &#128175;",
    dangerouslySetInnerHTML: true
  },

]

//@NOTE: type and interface are mostly interchangeable, but interface is generally preferred for defining component props.
interface Testimonial {
  author: string;
  message: string;
}

const Testimonial: React.FC<Testimonial> = ({author, message}) => {
  return (
    <figure className="my-12">
    <blockquote className="bg-teal-600 dark:bg-black pl-14 pr-8 py-12 rounded-3xl relative">
      <p className="text-2xl sm:text-3xl text-left mt-2 text-white dark:text-slate-400 before:content-['\201C'] before:font-serif before:absolute before:top-0 before:left-0 before:text-9xl before:text-white before:opacity-25 before:transform before:translate-x-2 before:translate-y-2
      after:content-['\201D'] after:font-serif after:absolute after:-bottom-20 after:right-0 after:text-9xl after:text-white after:opacity-25 after:transform after:-translate-x-2 after:-translate-y-2" dangerouslySetInnerHTML={{__html: message}}>
        
      </p>
    </blockquote>
      <figcaption className="italic text-xl sm:text-2xl text-right mt-2 text-slate-500 dark:text-slate-400" dangerouslySetInnerHTML={{__html: `&#8212; ` + author}}></figcaption>
  </figure>
  )
}

const Services = [
  {
    title: "Explorer",
    description: "Affordable Exploration",
    imgSrc: "/rocketman.png",
    priceSign: "$"
  },
  {
    title: "Adventurer",
    description: "Best Selling Rocket!",
    imgSrc: "/rocketride.png",
    priceSign: "$$"
  },
  {
    title: "Infinity",
    description: "Luxury Starship",
    imgSrc: "/rocketlaunch.png",
    priceSign: "$$$"
  },
];

interface Service {
  title: string;
  description: string;
  imgSrc: string;
  priceSign: string;
};

const ServiceCard: React.FC<Service> = ({imgSrc, title, description, priceSign}) => {
  return (
    <li className="w-2/3 sm:w-5/6 flex flex-col items-center border border-solid border-slate-900 dark:border-gray-100 bg-white dark:bg-black py-6 px-2 rounded-3xl shadow-xl">
    <img src={imgSrc} alt="Explorer" className="w-1/2 mb-6" />
    <h3 className="text-3xl text-center text-slate-900 dark:text-white">{title}</h3>
    <p className="hidden sm:block text-3xl text-center mt-2 text-slate-500 dark:text-slate-400">{priceSign}</p>
    <p className="sm:hidden text-2xl text-center mt-2 text-slate-500 dark:text-slate-400">{description}</p>
  </li>
  )
}
export default function Home() {
  return (
    <main className="max-w-4xl mx-auto">
      <section id="hero" className="flex flex-col-reverse justify-center sm:flex-row p-6 items-center gap-8 mb-12 scroll-mt-40 widescreen:section-min-height tallscreen:section-min-height">
        <article className="sm:w-1/2">
        <h2 className="max-w-md text-4xl font-bold text-center sm:text-5xl sm:text-left text-slate-900 dark:text-white">
          We Boldly Go <span className="text-indigo-700 dark:text-indigo-300">Where No Rocket</span> Has Gone Before...
          </h2>
          <p className="max-w-md text-2xl mt-4 text-center sm:text-left text-slate-700 dark:text-slate-400">We're buildings rockets for the next century today. From the moon to Mars, Jupiter, and beyond...</p>
          <p className="max-w-md text-2xl mt-4 text-center sm:text-left text-slate-700 dark:text-slate-400">Think Acme Rockets.</p>
          </article>
          <img src="/rocketdab.png" alt="Rocket Dab" className="w-1/2" />
      </section>
      <hr className="mx-auto bg-black dark:bg-white w-1/2" />

      {/* @NOTE: scroll-mt-20: when we use #id to scroll it adds a top scroll margin */}
      <section id="rockets" className="p-6 my-12 scroll-mt-20 widescreen:section-min-height tallscreen:section-min-height">
        <h2 className="text-4xl font-bold text-center sm:text-5xl mb-6 text-slate-900 dark:text-white">
          Our Rockets
        </h2>
        <ul className="list-none mx-auto my-12 flex flex-col sm:flex-row items-center gap-8">
          {
            Services.map((service, index)=><ServiceCard key={index} {...{...service}}/>)
          }
        </ul>
      </section>
      <hr className="mx-auto bg-black dark:bg-white w-1/2" />
      <section id="testimonials" className="p-6 my-12 scroll-mt-20 widescreen:section-min-height tallscreen:section-min-height">
        <h2 className="text-4xl font-bold text-center sm:text-5xl mb-6 text-slate-900 dark:text-white">
          Testimonials
        </h2>
        {
          Testimonials.map((testimonial, index)=>{
            return <Testimonial key={index} { ...{...testimonial}}/>
          })
        }
      </section>
      <hr className="mx-auto bg-black dark:bg-white w-1/2" />
      <section id="contact" className="p-6 my-12 scroll-mt-16 widescreen:section-min-height tallscreen:section-min-height">
        <h2 className="text-4xl font-bold text-center sm:text-5xl mb-6 text-slate-900 dark:text-white">
          Contact Us
        </h2>
        <form action="" className="max-w-4xl mx-auto text-2xl sm:text-3xl flex flex-col items-left gap-4">
          <label htmlFor="subject">Subject:</label>
          <input type="text" name="subject" id="subject" required minLength={3} maxLength={60} placeholder="Your Subject" className="w-full text-black text-2xl sm:text-3xl p-3 rounded-xl border border-solid border-slate-900 dark:border-none"/>
          
          <label htmlFor="message">Message:</label>
          <textarea name="message" id="message" cols={30} rows={10} placeholder="Your Message" required className="w-full text-black text-2xl sm:text-3xl p-3 rounded-xl border border-solid border-slate-900 dark:border-none"></textarea>

          <button className="bg-teal-700 hover:bg-teal-600 active:bg-teal-500 text-white p-3 ww-48 rounded-xl border border-solid border-slate-900 dark:border-none">Submit</button>
        </form>
      </section>
    </main>
  )
}


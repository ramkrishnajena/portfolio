import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBg from "@/assets/bg.jpeg";

const Hero = () => {
  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className=" min-h-screen flex flex-col-reverse pt-20 items-center justify-between overflow-hidden px-6 gap-10 flex-wrap w-full sm:flex-row">
      <div className="flex flex-col gap-8 w-full md:w-[60%]">
        <div className="flex flex-col items-start gap-2">
          <h3 className="text-4xl font-sora">
            Hello I'm <b>Ramkrishna Jena .</b>
          </h3>
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl py-5 text-start">
            <span className="font-extrabold">
              <span className="font-extrabold"> Full Stack </span>

              <span className="font-outline-2 lg:pl-5"> Developer</span>
            </span>
          </h2>
          <h4 className="text-xl sm:text-1xl md:text-2xl lg:text-3xl xl:text-4xl">
            Based in <b>Bangalore</b>
          </h4>
        </div>
        <div className="flex justify-start">
          <p className="text-start text-zinc-600">
            <b className="">Full Stack Developer</b> with{" "}
            <b>3.5+ years of experience</b> building scalable, high-performance
            web applications. Skilled in frontend development with React.js,
            TypeScript, and modern UI frameworks, and backend development using
            Node.js (Express/NestJS) with RESTful APIs.
          </p>
        </div>
      </div>
      <div className="flex flex-1">
        <img
          src="https://vasantmestry.netlify.app/assets/hero-Dez35dR7.svg"
          alt="hero"
        />
      </div>
    </section>
  );
};

export default Hero;

import { RevealOnScroll } from "../RevealOnScroll";
import { useEffect, useState } from "react";

export const Home = ({ isLoaded }) => {
  const [text, setText] = useState("");
  const [startTyping, setStartTyping] = useState(false);
  const fullText = "Hi, I'm Syed Noor Ul Talha";

  useEffect(() => {
    if (isLoaded) {
      // Add a small delay before starting the typing animation
      const timer = setTimeout(() => {
        setStartTyping(true);
      }, 500); // 500ms delay after loading screen
      return () => clearTimeout(timer);
    }
  }, [isLoaded]);

  useEffect(() => {
    if (!startTyping) return;

    let index = 0;
    const interval = setInterval(() => {
      setText(fullText.substring(0, index));
      index++;

      if (index > fullText.length) {
        clearInterval(interval);
      }
    }, 100);

    return () => clearInterval(interval);
  }, [startTyping]);

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative"
    >
      <RevealOnScroll>
        <div className="text-center z-10 px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-lime-500 to-lime-300 bg-clip-text text-transparent leading-right min-h-[4rem] md:min-h-[6rem]">
            {text}
            {startTyping && <span className="animate-blink ml-1">|</span>}
          </h1>

          <p className="text-gray-400 text-lg mb-8 max-w-lg mx-auto">
            I'm a full-stack software engineer who loves crafting clean, scalable web
            applications. My goal is to build solutions that offer both
            exceptional performance and a delightful user experience.
          </p>
          <div className="flex justify-center space-x-4">
            <a
              href="#projects"
              className="bg-lime-500 text-black py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(132,204,22,0.4)]"
            >
              View Projects
            </a>

            <a
              href="#contact"
              className="border border-lime-500/50 text-lime-500 py-3 px-6 rounded font-medium transition-all duration-200 
             hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(132,204,22,0.2)] hover:bg-lime-500/10"
            >
              Github Profile
            </a>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};

import { useEffect, useState } from "react";

export const Navbar = ({ menuOpen, setMenuOpen }) => {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "projects", "contact"];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = (section) => {
    setMenuOpen(false);
    setActiveSection(section);
  };

  return (
    <nav className="fixed top-0 w-full z-40 bg-[rgba(10, 10, 10, 0.8)] backdrop-blur-lg border-b border-white/10 shadow-lg">
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <a href="#home" className="font-mono text-xl font-bold text-white" onClick={() => handleClick("home")}>
            {" "}
            sn<span className="text-lime-500">talha</span>{" "}
          </a>

          <div
            className="w-7 h-5 relative cursor-pointer z-40 md:hidden"
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            &#9776;
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#home"
              onClick={() => handleClick("home")}
              className={`text-gray-300 hover:text-lime-500 transition-colors ${
                activeSection === "home" ? "text-lime-500" : ""
              }`}
            >
              Home
            </a>
            <a
              href="#about"
              onClick={() => handleClick("about")}
              className={`text-gray-300 hover:text-lime-500 transition-colors ${
                activeSection === "about" ? "text-lime-500" : ""
              }`}
            >
              About
            </a>
            <a
              href="#projects"
              onClick={() => handleClick("projects")}
              className={`text-gray-300 hover:text-lime-500 transition-colors ${
                activeSection === "projects" ? "text-lime-500" : ""
              }`}
            >
              Projects
            </a>
            <a
              href="#contact"
              onClick={() => handleClick("contact")}
              className={`text-gray-300 hover:text-lime-500 transition-colors ${
                activeSection === "contact" ? "text-lime-500" : ""
              }`}
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

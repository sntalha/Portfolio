import { RevealOnScroll } from "../RevealOnScroll";

export const About = () => {
  const frontendSkills = [
    "React",
    "JavaScript",
    "Bootstrap",
    "TailwindCSS",
    "Flutter",
  ];

  const backendSkills = ["Node.js", "Express", "PostgreSQL", "MongoDB", "Blockchain","Git"];

  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-lime-500 text-center">
            {" "}
            About Me
          </h2>

          <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
            <p className="text-gray-300 mb-6">
              Passionate developer with expertise in building scalable web
              applications and creating innovative solutions.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4"> Frontend</h3>
                <div className="flex flex-wrap gap-2">
                  {frontendSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="
                      bg-lime-500/10 text-lime-500 py-1 px-3 
                      rounded-full text-sm
                      transition
                      hover:bg-lime-500/20 hover:-translate-y-0.5
                      hover:shadow-[0_2px_8px_rgba(132,204,22,0.2)]
                    "
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4"> Backend</h3>
                <div className="flex flex-wrap gap-2">
                  {backendSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="
                      bg-lime-500/10 text-lime-500 py-1 px-3 
                      rounded-full text-sm
                      transition
                      hover:bg-lime-500/20 hover:-translate-y-0.5
                      hover:shadow-[0_2px_8px_rgba(132,204,22,0.2)]
                    "
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4"> 🏫 Education </h3>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>
                  <strong className="text-lime-500"> B.E in Software Engineering </strong> - NED University
                  (2022-2024)
                </li>
                <li>
                  <span className="text-lime-300">Relevant Coursework:</span> Data Structures, Web Engineering, Object Oriented Programming , Software Architecture, E-Commerce, Quality Engineering 
                </li>
              </ul>
            </div>
            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4"> 📚 Certifications </h3>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>
                  <strong className="text-lime-500"> MERN Stack Development </strong> - DevTrio
                </li>
                <li>
                  <span className="text-lime-300">Relevant Learnings:</span> HTML, CSS, JavaScript, React, Node.js, Express, MongoDB, Git, Netlify 
                </li>
              </ul>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};

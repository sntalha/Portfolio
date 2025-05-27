import { RevealOnScroll } from "../RevealOnScroll";

export const Projects = () => {
  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-lime-500 text-center">
            My Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-lime-500/30 hover:shadow-[0_2px_8px_rgba(132,204,22,0.2)] transition">
              <h3 className="text-xl font-bold mb-2"> BidSphere - Auction Platform</h3>
              <p className="text-gray-400 mb-4">
                  A decentralized auction platform built on the Ethereum blockchain (Sepolia Testnet).
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["React", "Java", "Solidity", "MetaMask"].map((tech, key) => (
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

              <div className="flex justify-between items-center">
                <a
                  href="#"
                  className="text-lime-400 hover:text-lime-300 transition-colors my-4"
                >
                  View Project →
                </a>
              </div>
            </div>
            <div
              className="
              glass p-6 rounded-xl border border-white/10 
              hover:-translate-y-1 hover:border-lime-500/30
              hover:shadow-[0_4px_20px_rgba(132,204,22,0.1)]
              transition-all
            "
            >
              <h3 className="text-xl font-bold mb-2">Sadaqa Safar - Donation Platform</h3>
              <p className="text-gray-400 mb-4">
                A donation assistance platform for donors and NGOs using MVC architecture.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["React", "Node.Js", "MongoDB", "Web Socket"].map((tech, key) => (
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
              <div className="flex justify-between items-center">
                <a
                  href="#"
                  className="text-lime-400 hover:text-lime-300 transition-colors my-4"
                >
                  View Project →
                </a>
              </div>
            </div>

            <div
              className="
              glass p-6 rounded-xl border border-white/10 
              hover:-translate-y-1 hover:border-lime-500/30
              hover:shadow-[0_4px_20px_rgba(132,204,22,0.1)]
              transition-all
            "
            >
              <h3 className="text-xl font-bold mb-2">E-Mart - E-Commerce Website</h3>
              <p className="text-gray-400 mb-4">
                A full-stack e-commerce web application with a modern UI and secure payment integration.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["React", "Express", "MongoDB", "Stripe"].map(
                  (tech) => (
                    <span
                      key={tech}
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
                  )
                )}
              </div>
              <div className="flex justify-between items-center">
                <a
                  href="#"
                  className="text-lime-400 hover:text-lime-300 transition-colors my-4"
                >
                  View Project →
                </a>
              </div>
            </div>

            <div
              className="
              glass p-6 rounded-xl border border-white/10 
              hover:-translate-y-1 hover:border-lime-500/30
              hover:shadow-[0_4px_20px_rgba(132,204,22,0.1)]
              transition-all
            "
            >
              <h3 className="text-xl font-bold mb-2">CineBuzz - Movie Review Platform</h3>
              <p className="text-gray-400 mb-4">
                A collaborative movie exploration platform with discussion forums and personalized lists.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["TMDB", "HTML", "Node.Js", "PostgreSQL"].map((tech, key) => (
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
              <div className="flex justify-between items-center ">
                <a
                  href="#"
                  className="text-lime-400 hover:text-lime-300 transition-colors my-4"
                >
                  View Project →
                </a>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};

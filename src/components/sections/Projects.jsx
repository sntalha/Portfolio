import { useState } from "react";
import { RevealOnScroll } from "../RevealOnScroll";
import { ProjectModal } from "../ProjectModal";

// Import images
import bidsphere1 from "../../assets/Bidsphere-1.png";
import bidsphere2 from "../../assets/Bidsphere-2.png";
import bidsphere3 from "../../assets/Bidsphere-3.png";
import bidsphere4 from "../../assets/Bidsphere-4.png";
import bidsphere5 from "../../assets/Bidsphere-5.png";
import bidsphere6 from "../../assets/Bidsphere-6.png";
import bidsphere7 from "../../assets/Bidsphere-7.png";
import bidsphere8 from "../../assets/Bidsphere-8.png";
import bidsphere9 from "../../assets/Bidsphere-9.png";
import bidsphere10 from "../../assets/Bidsphere-10.png";
import bidsphere11 from "../../assets/Bidsphere-11.png";
import bidsphere12 from "../../assets/Bidsphere-12.png";

export const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      title: "BidSphere - Auction Platform",
      description: "A decentralized auction platform built on the Ethereum blockchain (Sepolia Testnet).",
      techStack: ["React", "Java", "Solidity", "MetaMask"],
      websiteUrl: "#",
      repoUrl: "https://github.com/Ahmedbaig2004/BidSphere-Frontend",
      images: [
        bidsphere1,
        bidsphere2,
        bidsphere3,
        bidsphere4,
        bidsphere5,
        bidsphere6,
        bidsphere7,
        bidsphere8,
        bidsphere9,
        bidsphere10,
        bidsphere11,
        bidsphere12
      ]
    },
    {
      title: "Sadaqa Safar - Donation Platform",
      description: "A donation assistance platform for donors and NGOs using MVC architecture.",
      techStack: ["React", "Node.Js", "MongoDB", "Web Socket"],
      websiteUrl: "#",
      repoUrl: "https://github.com/Ahmedbaig2004/SadaqaSafar-FullStack",
      images: [] // Add your images here
    },
    {
      title: "E-Mart - E-Commerce Website",
      description: "A full-stack e-commerce web application with a modern UI and secure payment integration.",
      techStack: ["React", "Express", "MongoDB", "Stripe"],
      websiteUrl: "#",
      repoUrl: "https://github.com/sntalha/E-Mart",
      images: [] // Add your images here
    },
    {
      title: "CineBuzz - Movie Review Platform",
      description: "A collaborative movie exploration platform with discussion forums and personalized lists.",
      techStack: ["TMDB", "HTML", "Node.Js", "PostgreSQL"],
      websiteUrl: "#",
      repoUrl: "https://github.com/sntalha/CineBuzz",
      images: [] // Add your images here
    }
  ];

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
            {projects.map((project, index) => (
              <div
                key={index}
                className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-lime-500/30 hover:shadow-[0_2px_8px_rgba(132,204,22,0.2)] transition"
              >
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.techStack.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-lime-500/10 text-lime-500 py-1 px-3 rounded-full text-sm transition hover:bg-lime-500/20 hover:-translate-y-0.5 hover:shadow-[0_2px_8px_rgba(132,204,22,0.2)]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex justify-between items-center">
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="text-lime-400 hover:text-lime-300 transition-colors my-4"
                  >
                    View Project →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </RevealOnScroll>

      <ProjectModal
        isOpen={selectedProject !== null}
        onClose={() => setSelectedProject(null)}
        project={selectedProject}
      />
    </section>
  );
};

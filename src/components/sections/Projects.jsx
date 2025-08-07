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
import sadaqasafar1 from "../../assets/SadaqaSafar-1.png";
import sadaqasafar2 from "../../assets/SadaqaSafar-2.png";
import sadaqasafar3 from "../../assets/SadaqaSafar-3.png";
import sadaqasafar4 from "../../assets/SadaqaSafar-4.png";
import sadaqasafar5 from "../../assets/SadaqaSafar-5.png";
import sadaqasafar6 from "../../assets/SadaqaSafar-6.png";
import sadaqasafar7 from "../../assets/SadaqaSafar-7.png";
import sadaqasafar8 from "../../assets/SadaqaSafar-8.png";
import emart1 from "../../assets/Emart-1.png";
import emart2 from "../../assets/Emart-2.png";
import emart3 from "../../assets/Emart-3.png";
import emart4 from "../../assets/Emart-4.png"; 
import emart5 from "../../assets/Emart-5.png";
import emart6 from "../../assets/Emart-6.png";
import emart7 from "../../assets/Emart-7.png";
import emart8 from "../../assets/Emart-8.png";
import emart9 from "../../assets/Emart-9.png";
import cinebuzz1 from "../../assets/Cinebuzz-1.png";
import cinebuzz2 from "../../assets/Cinebuzz-2.png";
import cinebuzz3 from "../../assets/Cinebuzz-3.png";
import cinebuzz4 from "../../assets/Cinebuzz-4.png";
import cinebuzz5 from "../../assets/Cinebuzz-5.png";
import cinebuzz6 from "../../assets/Cinebuzz-6.png";  
import cinebuzz7 from "../../assets/Cinebuzz-7.png";
import cinebuzz8 from "../../assets/Cinebuzz-8.png";  

export const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      title: "BidSphere - Auction Platform",
      description: "A decentralized auction platform built on the Ethereum blockchain (Sepolia Testnet).",
      techStack: ["React", "Java", "Solidity", "MetaMask"],
      websiteUrl: "#",
      repoUrl: "https://github.com/Ahmedbaig2004/BidSphere-Frontend",
      role: "Developed Frontend with API Integrations, connecting users to the Sepolia Testnet through MetaMask and execution of Smart Contract.",
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
      role: "Developed the modules for user authentication and profile management with JWT tokens and password encryption for two seperate roles (Donor and NGO).",
      images: [
        sadaqasafar1,
        sadaqasafar2,
        sadaqasafar3,
        sadaqasafar4,
        sadaqasafar5,
        sadaqasafar6,
        sadaqasafar7,
        sadaqasafar8
      ] // Add your images here
    },
    {
      title: "E-Mart - E-Commerce Website",
      description: "A full-stack e-commerce web application with a modern UI and efficient state management.",
      techStack: ["React", "Express", "MongoDB", "Redux"],
      websiteUrl: "https://e-mart-dusky-sigma.vercel.app/",
      repoUrl: "https://github.com/sntalha/E-Mart",
      role: "Developed both the frontend and backend of the e-commerce website using React, Express, and MongoDB.",
      images: [
        emart1,
        emart2,
        emart3,
        emart4,
        emart5,
        emart6,
        emart7,
        emart8,
        emart9
      ] // Add your images here
    },
    {
      title: "CineBuzz - Movie Review Platform",
      description: "A collaborative movie exploration platform with discussion forums and personalized lists.",
      techStack: ["TMDB", "HTML", "Node.Js", "PostgreSQL"],
      websiteUrl: "#",
      repoUrl: "https://github.com/sntalha/CineBuzz",
      role: "Developed the modules for user authentication, collaborative forums and personalized lists. Also, developed the backend with session management and local PostgreSQL database integration.",
      images: [
        cinebuzz1,
        cinebuzz2,
        cinebuzz3,
        cinebuzz4,
        cinebuzz5,
        cinebuzz6,
        cinebuzz7,
        cinebuzz8
      ] // Add your images here
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
        showWebsiteButton={selectedProject && selectedProject.websiteUrl && selectedProject.websiteUrl !== "#"}
      />
    </section>
  );
};

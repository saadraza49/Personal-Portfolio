"use client";

import { motion } from "framer-motion";
import { Github, ExternalLink, Sparkles } from "lucide-react";

const projects = [
  {
    title: "Customer Churn Prediction",
    status: "Completed",
    description:
      "A machine learning project that predicts customer churn using Python. Includes data preprocessing, EDA, model training, and evaluation with accuracy metrics.",
    tags: ["Python", "Pandas", "NumPy", "Scikit-learn", "Matplotlib", "Seaborn", "Jupyter"],
    github: "https://github.com/saadraza49/Customer-Churn-Prediction",
    live: null,
  },
  {
    title: "Personal Portfolio Website",
    status: "Completed",
    description:
      "This portfolio — designed and built from scratch. Fully responsive and deployed on Vercel with smooth animations and a modern dark aesthetic.",
    tags: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Framer Motion"],
    github: "https://github.com/saadraza49/Personal-Portfolio",
    live: "https://saadraza.vercel.app",
  },
  {
    title: "ApnaGPA",
    status: "Completed",
    description:
      "A GPA and CGPA calculator built for GCUF students, offering instant, accurate semester and cumulative GPA calculations following the official GCUF grading policy.",
    tags: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/saadraza49/ApnaGPA",
    live: "https://apnagpa.vercel.app/",
  },
  {
    title: "KARDEO",
    status: "Completed",
    description:
      "AI-powered fitness and gym management SaaS platform built for independently owned gyms, featuring AI-driven coaching and business automation.",
    tags: ["FastAPI", "MongoDB", "Next.js"],
    github: null,
    live: "https://kardeo.vercel.app",
  },
];

export function ProjectsSection() {
  return (
    <section id="projects" className="py-24 bg-background">
      <div className="container-custom relative z-10">
        <div className="flex flex-col items-center text-center space-y-4 mb-20">
          <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-[10px] font-black uppercase tracking-widest">
            <Sparkles size={12} />
            <span>Portfolio</span>
          </div>
          <h2 className="section-heading uppercase tracking-tighter">
            Featured <span className="text-gradient-blue">Works</span>
          </h2>
          <p className="section-subtitle">
            A selection of my recent projects involving AI, full-stack development, and complex problem-solving.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -6 }}
              className="glass p-8 rounded-[2.5rem] flex flex-col gap-6 hover:bg-white/[0.07] hover:border-primary/30 transition-all group shadow-xl"
            >
              {/* Title & Status */}
              <div className="flex items-start justify-between gap-4">
                <h3 className="text-xl font-black text-foreground uppercase tracking-tight leading-tight">
                  {project.title}
                </h3>
                {project.status === "In Progress" && (
                  <span className="px-2 py-1 rounded-md bg-amber-500/10 text-amber-500 text-[10px] font-black uppercase tracking-widest border border-amber-500/20 whitespace-nowrap mt-0.5">
                    In Progress
                  </span>
                )}
              </div>

              {/* Description */}
              <p className="text-sm text-muted-foreground leading-relaxed font-medium flex-1">
                {project.description}
              </p>

              {/* Tech Tags */}
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 rounded-full bg-primary/10 text-primary text-[10px] font-black uppercase tracking-wider border border-primary/20"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="flex items-center gap-3 pt-2">
                {project.status === "In Progress" ? (
                  <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full glass text-muted-foreground/50 text-xs font-black uppercase tracking-widest border border-white/5 cursor-not-allowed">
                    Coming Soon
                  </div>
                ) : (
                  <>
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary text-primary-foreground text-xs font-black uppercase tracking-widest hover:brightness-110 active:scale-95 transition-all"
                      >
                        <Github size={14} />
                        GitHub
                      </a>
                    )}
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full glass text-foreground text-xs font-black uppercase tracking-widest hover:bg-white/10 transition-all border-white/20"
                      >
                        <ExternalLink size={14} />
                        Live
                      </a>
                    )}
                  </>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

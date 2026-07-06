"use client";

import { motion } from "framer-motion";

const aboutStats = [
  { label: "LeetCode Solved", value: "10+", color: "green" },
  { label: "Hands-on Builder", value: "Since '24", color: "blue" },
  { label: "Projects Done", value: "4+", color: "purple" },
  { label: "Certifications", value: "6", color: "emerald" }
];

export function AboutSection() {
  return (
    <section id="about" className="section-padding bg-background relative overflow-hidden">
      <div className="container-custom relative z-10">
        <div className="flex flex-col items-center text-center space-y-16">

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl space-y-6"
          >
            <div className="space-y-4">
              <span className="text-[10px] font-black uppercase tracking-[0.4em] text-primary">About Me</span>
              <h2 className="text-4xl md:text-6xl font-black text-foreground leading-none">
                Solving problems with <br />
                <span className="text-gradient-emerald uppercase">Intelligent Code</span>
              </h2>
            </div>

            <div className="space-y-8">
              <p className="text-xl text-muted-foreground leading-relaxed font-bold">
                AI-Driven Software Engineer with a focus on building real, production-minded applications in AI/ML and backend development. Currently serving as a Section Leader at Stanford University's Code in Place 2026, selected globally to mentor and teach Python to students around the world. Software Engineering student at Government College University, Faisalabad (SE'29), also training in AI & Data Science at Saylani Mass IT Training Program. I don't just study concepts — I build with them: FastAPI backends connected to real cloud databases, AI-powered applications, and a Google hackathon project. Open to internships, freelance projects, collaborations, and mentorship.
              </p>

              <div className="glass p-6 md:p-8 rounded-[2rem] border-white/5 shadow-xl text-left space-y-4 hover:bg-white/[0.04] transition-colors relative overflow-hidden group">
                <div className="absolute top-0 left-0 w-1.5 h-full bg-primary/80 group-hover:bg-primary transition-colors" />
                <h3 className="text-xl font-black text-foreground">Section Leader — Stanford University: Code in Place 2026</h3>
                <p className="text-xs font-bold uppercase tracking-widest text-primary/90">April 2026 – May 2026 (2 months) | Stanford, CA (Remote)</p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 text-sm md:text-base leading-relaxed">
                  <li>Mentored a section of 10-15 beginner programmers in Stanford's Code in Place, a free global intro-to-CS course modeled on CS106A</li>
                  <li>Led 6 weekly live sections covering Python fundamentals — variables, loops, conditionals, functions, lists, dictionaries</li>
                  <li>Debugged 1:1 with students on real coding assignments, focusing on improving problem-solving approach rather than just fixing errors</li>
                  <li>Built a collaborative section culture with high engagement and attendance</li>
                </ul>
              </div>
            </div>
          </motion.div>

          <div className="w-full grid grid-cols-2 lg:grid-cols-4 gap-6">
            {aboutStats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="glass p-8 rounded-[2.5rem] border-white/5 flex flex-col items-center space-y-2 hover:bg-white/[0.08] transition-colors shadow-xl"
              >
                <div className="text-3xl font-black text-foreground">{stat.value}</div>
                <div className="text-[10px] font-black text-primary/80 uppercase tracking-widest">
                  {stat.label === "SE Student" ? "SE Student" : stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}


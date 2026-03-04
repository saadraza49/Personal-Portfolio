"use client";

import { motion } from "framer-motion";

const aboutStats = [
  { label: "LeetCode Solved", value: "10+", color: "green" },
  { label: "Experience", value: "3+ Years", color: "blue" },
  { label: "Projects Done", value: "4+", color: "purple" },
  { label: "Certifications", value: "3+", color: "emerald" }
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

            <p className="text-xl text-muted-foreground leading-relaxed font-bold">
              I&apos;m <span className="text-foreground font-black">Muhammad Saad Raza</span>, a Software Engineering student at GCU Faisalabad.
              Currently, I am <span className="text-primary font-black">Learning AI & Machine Learning from SMIT (Saylani Mass IT Training)</span> to further deepen my expertise.
              I specialize in merging advanced AI capabilities with modern web architectures to build scalable, intelligent software systems.
            </p>
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


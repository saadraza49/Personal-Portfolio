"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";

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
        <div className="flex flex-col items-center gap-2 px-4 py-2 rounded-full glass border-primary/10 mt-6">
          <span className="h-2 w-2 rounded-full bg-primary animate-pulse" />
          <span className="text-xs font-bold text-foreground">4+ Projects shipped</span>
        </div>
      </div>

      <div className="container-custom mt-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass p-12 rounded-[3rem] text-center space-y-6 bg-gradient-to-b from-primary/5 to-transparent border-primary/10"
        >
          <div className="inline-flex h-20 w-20 items-center justify-center rounded-3xl bg-primary/10 text-primary mb-4">
            <Sparkles className="h-10 w-10" />
          </div>
          <h3 className="text-2xl font-black text-foreground uppercase tracking-tight">Case Studies <span className="text-gradient-blue uppercase">Coming Soon</span></h3>
          <p className="max-w-xl mx-auto text-muted-foreground leading-relaxed font-medium">
            I&apos;m currently curating and documenting my most impactful work.
            I&apos;ve built AI tools, dashboards, and full-stack apps that are being polished for showcase here.
          </p>
          <div className="pt-4">
            <a href="https://github.com/saadraza49" target="_blank" className="inline-flex items-center gap-2 text-primary font-bold hover:gap-3 transition-all">
              <span className="text-xs font-black uppercase tracking-widest">View my GitHub for live code</span>
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import { Code2, Sparkles, Trophy, Users, BookOpen } from "lucide-react";

const competitions = [
  {
    icon: <Trophy className="h-6 w-6" />,
    title: "MIT Competitive Programming Contest",
    role: "Participant",
    description: "Competed in MIT's competitive programming contest, tackling algorithmic challenges under timed conditions.",
    accent: "🏆",
  },
  {
    icon: <Code2 className="h-6 w-6" />,
    title: "CS50x Puzzle Day",
    role: "Upcoming Participant",
    description: "Registered to participate in Harvard's CS50x Puzzle Day, a collaborative puzzle-solving event.",
    accent: "🧩",
  },
  {
    icon: <Sparkles className="h-6 w-6" />,
    title: "Calico",
    role: "Upcoming Participant",
    description: "Preparing to participate in Calico, UC Berkeley's biannual programming contest emphasizing algorithms.",
    accent: "🐱",
  },
  {
    icon: <Users className="h-6 w-6" />,
    title: "CIP — Competitive & Informatics Program",
    role: "Teacher & Student",
    description: "Both a learner and an instructor in the Competitive & Informatics Program, mentoring peers in algorithms and data structures.",
    accent: "📚",
  },
];

export function CompetitionsSection() {
  return (
    <section id="competitions" className="section-padding bg-background relative border-t border-white/5">
      <div className="container-custom">
        <div className="flex flex-col items-center text-center space-y-4 mb-16">
          <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-[10px] font-black uppercase tracking-widest">
            <Sparkles size={12} />
            <span>Competitions & Community</span>
          </div>
          <h2 className="section-heading uppercase tracking-tighter">
            Competing &amp; <span className="text-gradient-blue">Contributing</span>
          </h2>
          <p className="section-subtitle">
            Engaging with the global programming community through contests, puzzle days, and mentorship.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {competitions.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="glass p-8 rounded-[2.5rem] flex flex-col items-center text-center space-y-6 hover:bg-white/[0.07] hover:border-primary/30 transition-all group shadow-xl"
            >
              <div className="h-16 w-16 rounded-2xl bg-primary flex items-center justify-center text-primary-foreground shadow-lg shadow-primary/20 transform group-hover:scale-110 transition-transform">
                {item.icon}
              </div>
              <div className="space-y-2">
                <h3 className="text-base font-black text-foreground leading-tight uppercase tracking-tight">{item.title}</h3>
                <span className="text-[10px] font-black uppercase tracking-widest text-primary/80">{item.role}</span>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed font-medium">
                {item.description}
              </p>
              <div className="text-3xl pt-2">{item.accent}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
